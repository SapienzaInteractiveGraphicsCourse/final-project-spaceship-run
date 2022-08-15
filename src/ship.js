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
        const scale = 1;
        this.shipModel.scale.set(scale,scale,scale);
        this.shipModel.translateZ(100);
        this.controls = new FlyControls(this,domElement);
        this.controls.dragToLook = true;
        this.controls.movementSpeed = 10;
        this.controls.rollSpeed = 0.5;
        this.add(this.camera)
        this.add(this.shipModel)

        this.camera.translateOnAxis(new THREE.Vector3(0,0,1),-10);
    }
}

export default Ship;