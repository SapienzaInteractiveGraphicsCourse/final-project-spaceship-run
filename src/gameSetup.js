import * as THREE from "three";
import MeshObject from "./MeshObject.js";

function sceneSetup(scene,camera){
    var object = new MeshObject();
    object.name = "cube";
    scene.add(object);
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshStandardMaterial({color:0xf020ff});
    object.mesh = new THREE.Mesh(geometry, material);
    object.loadMesh("C:\Users\Anton\Desktop\UNIVERSITA\Integrated Graphics\Project\SpaceshipRun\resources\meshes\FinalBaseMesh.obj","obj")

    const light = new THREE.AmbientLight(0xFFFFFF);
    const dirLight = new THREE.DirectionalLight(0xffffff,0.5);
    dirLight.position = new THREE.Vector3(-1,-1,-1);
    scene.add(dirLight)
    //scene.add(light)
    camera.position.z =5;
}

export default sceneSetup