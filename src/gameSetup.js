import * as THREE from "three";
import MeshObject from "./MeshObject.js";
import LevelGenerator from "./levelGeneration.js";
import Ship from "./ship.js";
import InstancedMeshGroup from "./InstancedMeshGroup.js";

async function sceneSetup(scene,camera, domElement, gameMaster){
    /* var object = new InstancedMeshObject(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial(),10);
    object.name = "cube";
    scene.add(object); */
    var ship = new Ship(domElement,camera);

    //#region meteorites
     // METEORITES STUFF
    var meteorites = new InstancedMeshGroup('meteorites')
    var promise = await meteorites.load3DModel('/resources/meshes/meteorites/scene.gltf')
    meteorites.loadMeshAsCube(500, promise, [0,0,-100], 400, 15)
    meteorites.createBoundingBox()
    // for (let box of meteorites.BBoxArray)
    // {
    //     scene.add(box)
    // }
    scene.add(meteorites) 
    // METEORITES STUFF 
    //#endregion

    //#region skybox 
    //skybox
    //source: https://tools.wwwtyro.net/space-3d/index.html#animationSpeed=3.6899461267865497&fov=80&nebulae=true&pointStars=true&resolution=1024&seed=1e6bxj1uo3mo&stars=true&sun=true
    const loader = new THREE.CubeTextureLoader();
    loader.setPath("../resources/skybox/");

    const textureCube = loader.load(["right.png", "left.png", "top.png", "bottom.png", "front.png", "back.png"])
    scene.background = textureCube;
    //skybox
    //#endregion
    
    scene.add(ship);
    const light = new THREE.AmbientLight(0xFFFFFF);
    const dirLight = new THREE.DirectionalLight(0xffffff,0.5);
    dirLight.position.set(-1,0,0);
    scene.add(dirLight)
    
    var level = new LevelGenerator(scene, gameMaster);
    level.generateLevel(5);
    //scene.copy(level.level,true);
    //scene.add(light)
    camera.position.z =0;
}

    

export default sceneSetup
