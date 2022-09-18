import MeshObject from "./MeshObject.js"
import * as THREE from "three";
import GameMaster from "./gameMaster.js";

class LevelGenerator{
    constructor(scene, gameMaster){
        if(scene == null) this.level = new THREE.Scene();
        this.level = scene;
        this.gameMaster = gameMaster;
    }

    generateLevel(difficulty){
        const length = randomLength(difficulty*2,difficulty*2+2);
        const checkPointDistance = 100;
        const checkpointAngle = Math.cos(degreeToRad(10));

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
            var angle = direction.dot(newDir);
            while(!(angle<checkpointAngle && angle>=0)){
                newDir.randomDirection();
                angle = direction.dot(newDir);
            }
            direction.add(newDir);
            pos = direction.clone();
            pos.multiplyScalar(checkPointDistance);
        }

        this.gameMaster.CPMax = length;
        this.gameMaster.updateCPCount();
    }
}

function randomLength(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}

function degreeToRad(degree){
    return degree*(Math.PI/180);
}
export default LevelGenerator