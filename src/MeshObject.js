import * as THREE from "three";
import {OBJLoader} from 'OBJLoader'
import GameObject from "./GameObject.js";
class MeshObject extends GameObject{
    constructor(){
        super();
        this._mesh;
    }

    get mesh() {return this._mesh;}
    set mesh(mesh){
        super.clear()
        super.add(mesh);
        this._mesh = mesh;
    }

    //TODO 
    loadMesh(meshFile,filetype,parent=this){
        const loader = new OBJLoader();

        loader.load(
            meshFile,
            function(object){//object is a Object3D
                parent.mesh = object;
            }
        )
    }
}

export default MeshObject;