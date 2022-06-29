import * as THREE from "three";
import GameObject from "./GameObject.js";
import sceneSetup from "./gameSetup.js";
import LevelGenerator from "./levelGeneration.js";
const scene = new THREE.Scene();
scene.background=new THREE.Color(0x808080);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

sceneSetup(scene,camera);

var level = new LevelGenerator();
level.generateLevel(10);


// const dirLight = new THREE.DirectionalLight(0xffffff,1);
// dirLight.position.set(-300,0,300)
// level.level.add(dirLight);
// dirLight.castShadow = true;
function animate() {
    requestAnimationFrame( animate );
    renderer.render(scene,camera);
    scene.getObjectByName("cube").rotation.y += 0.01;
};

animate();