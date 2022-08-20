// import { CommandCategories, CommandQueue } from "./Command";
import * as THREE from "three"
// import GameObject from "./GameObject";
class World extends GameObject{
    constructor(){
        this.scene = new THREE.Scene();
        this.category==CommandCategories.None;
    }

    addChildren(child){
        this.scene.children.push(child);
    }

    onCommand(command, deltaTime){
        if(command.category==this.category){
            command.action
        }
        this.scene.children.array.forEach(element => {
            element.OnCommand(command, deltaTime);
        });
    }
}