import * as THREE from "three";
import { FlyControls } from 'FlyControls';
import MeshObject from "./MeshObject.js";
class Ship extends THREE.Object3D{
    constructor(domElement, camera){
        super();
        this.name = "ship";
        this.camera = camera;
        this.cube;
        this.helperBox;
        this.boxGeometry;
        this.ConstantboxGeometry = new THREE.Box3();
        this.shipModel = new MeshObject();
        this.shipModel.loadMesh("../resources/meshes/spaceship.glb");
        const scale = 1;
        this.shipModel.scale.set(scale,scale,scale);
        this.shipModel.translateZ(-10);
        this.shipModel.translateY(-5)
        this.shipModel.rotateY(Math.PI);

        this.controls = new FlyControls(this,domElement);
        this.controls.dragToLook = true;
        this.controls.movementSpeed = 50;
        this.controls.rollSpeed = 0.5;
        this.controls.autoForward = false;

        this.add(this.camera)
        this.add(this.shipModel)

        this.camera.position.add(new THREE.Vector3(0,0,0))
    }

    vectorThrust(oldDir){
        //oldDir = this.worldToLocal(oldDir)
        var forward = new THREE.Vector3(0,0,1)
        this.getWorldDirection(forward)
        var shipMatrix = new THREE.Matrix3()
        shipMatrix.setFromMatrix4(this.matrixWorld)
        shipMatrix.invert()

        forward.applyMatrix3(shipMatrix)
        oldDir.applyMatrix3(shipMatrix)

        const leftThruster = this.getObjectByName("thruster_connection_left");
        const rightThruster = this.getObjectByName("thruster_connection_right");
        const shipRotation = this.children[1]
        
        oldDir.sub(forward);
        //oldDir = this.worldToLocal(oldDir)
        var vertical = oldDir.y;
        var orizontal = oldDir.x;
        //var angle=oldDir.dot(this.up);
        
        
        const scale = 100;
        shipRotation.setRotationFromAxisAngle(new THREE.Vector3(0,0,1),-orizontal*scale)
        leftThruster.setRotationFromAxisAngle(new THREE.Vector3(1,0,0),(vertical-orizontal)*scale)
        rightThruster.setRotationFromAxisAngle(new THREE.Vector3(1,0,0),(vertical+orizontal)*scale)
        
    }
    createBoundingBox(x=3, y=2, z=5, parent = this)
    {
        parent.boxGeometry = new THREE.Box3();
        parent.boxGeometry.setFromCenterAndSize(this.position, new THREE.Vector3( x, y, z ) );
        parent.ConstantboxGeometry.setFromCenterAndSize(this.shipModel.position, new THREE.Vector3( x, y, z ) );
        parent.helperBox = new THREE.Box3Helper(parent.boxGeometry)
        return parent.helperBox
    }
    //Let's try creating a box that follows the ship, and then setting the bounding box via setfromobject
    
    updateBoundingBox(matrix, parent=this)
    {   
        parent.helperBox.box.copy(parent.ConstantboxGeometry).applyMatrix4(matrix)
    }
}
function degreeToRad(degree){
    return degree*(Math.PI/180);
}
export default Ship;