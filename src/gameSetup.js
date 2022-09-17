import * as THREE from "three";
import MeshObject from "./MeshObject.js";
import LevelGenerator from "./levelGeneration.js";
import Ship from "./ship.js";
import InstancedMeshGroup from "./InstancedMeshGroup.js";

async function sceneSetup(scene,camera, domElement){
    /* var object = new InstancedMeshObject(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial(),10);
    object.name = "cube";
    scene.add(object); */
    var ship = new Ship(domElement,camera);
     // METEORITES STUFF
    var meteorites = new InstancedMeshGroup('meteorites')
    var promise = await meteorites.load3DModel('/resources/meshes/meteorites/scene.gltf')
    meteorites.loadMeshAsCube(500, promise, [0,0,-100], 400, 15)
    meteorites.createBoundingBox()
    for (let box of meteorites.BBoxArray)
    {
        scene.add(box)
    }
    scene.add(meteorites) 
    // METEORITES STUFF 

    scene.add(ship);
    const light = new THREE.AmbientLight(0xFFFFFF);
    const dirLight = new THREE.DirectionalLight(0xffffff,0.5);
    dirLight.position.set(1,1,1);
    scene.add(dirLight)
    
    var level = new LevelGenerator(scene);
    level.generateLevel(5);
    //scene.copy(level.level,true);
    //scene.add(light)
    camera.position.z =0;
}
export default sceneSetup
