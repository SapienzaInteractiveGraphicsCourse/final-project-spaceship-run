import * as THREE from "three";
import GameObject from "./GameObject.js";
import sceneSetup from "./gameSetup.js";
const scene = new THREE.Scene();
scene.background=new THREE.Color(0x808080);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
var world = new GameObject();

sceneSetup(scene,camera);
scene.add(world)

function animate() {
    requestAnimationFrame( animate );
    renderer.render(scene,camera);
    scene.children[0].rotation.y += 0.01;
};

animate();