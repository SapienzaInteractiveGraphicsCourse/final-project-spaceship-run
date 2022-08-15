import * as THREE from "three";
import MeshObject from "./MeshObject.js";
import LevelGenerator from "./levelGeneration.js";
import InstancedMeshObject from "./InstancedMeshObject.js";
import Ship from "./ship.js";

function sceneSetup(scene,camera, domElement){
    var object = new InstancedMeshObject(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial(),10);
    object.name = "cube";
    scene.add(object);
    //object.loadMesh("../resources/meshes/FinalBaseMesh.obj","obj");
    var ship = new Ship(domElement,camera);
    scene.add(ship);
    const light = new THREE.AmbientLight(0xFFFFFF);
    const dirLight = new THREE.DirectionalLight(0xffffff,0.5);
    dirLight.position.set(1,1,1);
    scene.add(dirLight)
    
    var level = new LevelGenerator();
    level.generateLevel(5);
    scene.copy(level.level,true);
    //scene.add(light)
    camera.position.z =0;
}

export default sceneSetup