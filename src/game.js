import * as THREE from "three";
import GameObject from "./GameObject.js";
import sceneSetup from "./gameSetup.js";
import LevelGenerator from "./levelGeneration.js";
class Game{
    constructor(){
        this.scene = new THREE.Scene();
        this.scene.background=new THREE.Color(0x808080);
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        sceneSetup(this.scene,this.camera);
    }

    // const dirLight = new THREE.DirectionalLight(0xffffff,1);
    // dirLight.position.set(-300,0,300)
    // level.level.add(dirLight);
    // dirLight.castShadow = true;
    animate() {
        requestAnimationFrame( this.animate );
        this.renderer.render(this.scene,this.camera);
        this.scene.getObjectByName("cube").rotation.y += 0.01;
    };

}

var game = new Game();
game.animate();