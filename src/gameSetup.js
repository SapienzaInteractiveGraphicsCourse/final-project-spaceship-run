import * as THREE from "three";
import MeshObject from "./MeshObject.js";
import LevelGenerator from "./levelGeneration.js";
import InstancedMeshObject from "./InstancedMeshObject.js";

function sceneSetup(scene,camera){
    var object = new InstancedMeshObject(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial(),10);
    object.name = "cube";
    scene.add(object);
    //object.loadMesh("../resources/meshes/FinalBaseMesh.obj","obj");
   

    const light = new THREE.AmbientLight(0xFFFFFF);
    const dirLight = new THREE.DirectionalLight(0xffffff,0.5);
    dirLight.position.set(1,1,1);
    scene.add(dirLight)
    
    var level = new LevelGenerator();
    level.generateLevel(1);
    scene = level.level;
    //scene.add(light)
    camera.position.z =100;
}

export default sceneSetup