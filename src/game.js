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
    animate(time) {
        time+=0.001;
        requestAnimationFrame( this.animate.bind(this) );

        if(resizeRendererToDisplaySize(this.renderer)){
            const canvas = this.renderer.domElement;
            this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.camera.updateProjectionMatrix();
        }
        this.renderer.render(this.scene,this.camera);
        this.scene.getObjectByName("cube").rotation.y += 0.01;
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
game.animate(0);