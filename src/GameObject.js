import * as THREE from "three";
import { CommandCategories } from "./Command.js";
class GameObject extends THREE.Object3D{
    constructor(){
        super();
        this.category = CommandCategories.None;
    }

    onCommand(command,deltaTime){
        if(command.category == this.category){
            command.action(this,deltaTime)
        }

        this.children.array.forEach(element => {
            element.onCommand(command,deltaTime);
        });
    }
}

export default GameObject;