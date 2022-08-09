import * as THREE from "three";
import { FlyControls } from 'FlyControls';
class Ship extends THREE.Object3D{
    constructor(domElement, camera){
        super();
        this.camera = camera;
        this.shipModel = new THREE.Object3D();
        this.controls = new FlyControls(this,domElement);
        this.controls.dragToLook = true;
    }
}

export default Ship;