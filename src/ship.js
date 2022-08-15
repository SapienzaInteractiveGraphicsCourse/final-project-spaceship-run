import * as THREE from "three";
import { FlyControls } from 'FlyControls';
import MeshObject from "./MeshObject.js";
class Ship extends THREE.Object3D{
    constructor(domElement, camera){
        super();
        this.name = "ship";
        this.camera = camera;

        this.shipModel = new MeshObject();
        this.shipModel.loadMesh("../resources/meshes/space_ship_final.obj");
        const scale = 1/10;
        this.shipModel.scale.set(scale,scale,scale);
        this.shipModel.translateZ(-10);
        this.shipModel.translateY(-5)
        this.shipModel.rotateY(Math.PI);

        this.controls = new FlyControls(this,domElement);
        this.controls.dragToLook = true;
        this.controls.movementSpeed = 50;
        this.controls.rollSpeed = 0.5;
        this.controls.autoForward = true;

        this.add(this.camera)
        this.add(this.shipModel)

        this.camera.position.add(new THREE.Vector3(0,0,0))
    }
}

export default Ship;