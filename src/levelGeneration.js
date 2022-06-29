import MeshObject from "./MeshObject.js"
import * as THREE from "three";
class LevelGenerator{
    constructor(){
        this.level = new THREE.Scene();
    }

    generateLevel(difficulty){
        var length = randomLength(difficulty*5,difficulty*5+5);
        var direction = new THREE.Vector3(0,0,-1);
        var pos = direction.clone();
        pos.multiplyScalar(20)
        for (var i = 0;i<length;i++){
            var checkpoint = new MeshObject();
            //test geometries
            const geometry = new THREE.SphereGeometry(1,32,11);
            const material = new THREE.MeshStandardMaterial({color:0xffff00});
            checkpoint.mesh = new THREE.Mesh(geometry,material);
            this.level.add(checkpoint);
            checkpoint.position.set(pos.x,pos.y,pos.z);

            var newDir = new THREE.Vector3();
            newDir.randomDirection();
            while(direction.dot(newDir)<Math.cos(degreeToRad(30))){
                newDir.randomDirection();
            }
            direction.add(newDir);
            pos = direction.clone();
            pos.multiplyScalar(20);
        }
    }
}

function randomLength(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}

function degreeToRad(degree){
    return degree*(Math.PI/180);
}

export default LevelGenerator