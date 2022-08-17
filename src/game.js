import * as THREE from "three";
import { FlyControls } from 'FlyControls';
import { CommandQueue } from "./Command.js";
import GameObject from "./GameObject.js";
import sceneSetup from "./gameSetup.js";
import LevelGenerator from "./levelGeneration.js";
// var THREE;
// (async () =>{THREE=import("three")});
// import("FlyControls");
// import("./Command.js");
// import("./GameObject.js");
// import("./gameSetup.js");
// import("./levelGeneration.js");

class Game{
    constructor(){
        this.scene = new THREE.Scene();
        this.scene.background=new THREE.Color(0x808080);
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        // this.cameraControls = new FlyControls(this.camera,this.renderer.domElement);
        // this.cameraControls.dragToLook = true;
        // this.cameraControls.movementSpeed = 10;
        // this.cameraControls.rollSpeed = 0.5;
        // this.commandQueue = new CommandQueue;
        sceneSetup(this.scene,this.camera,this.renderer.domElement);
    }

    // const dirLight = new THREE.DirectionalLight(0xffffff,1);
    // dirLight.position.set(-300,0,300)
    // level.level.add(dirLight);
    // dirLight.castShadow = true;
    animate(deltaTime) {
        var now = Date.now();
        deltaTime=(now-LastUpdate)/1000;
        LastUpdate = now;
        requestAnimationFrame( this.animate.bind(this) );
        this.scene.getObjectByName("ship").controls.update(deltaTime);
        //this.cameraControls.update(deltaTime);
        if(resizeRendererToDisplaySize(this.renderer)){
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
        }
        
        this.renderer.render(this.scene,this.camera);
    };

}

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

var game = new Game();
var LastUpdate = Date.now();
var now = LastUpdate;
game.animate(0);