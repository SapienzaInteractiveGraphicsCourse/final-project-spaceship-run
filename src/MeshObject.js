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

    loadMesh(meshFile,filetype,parent=this){
        const loader = new OBJLoader();

        loader.load(
            meshFile,
            function(object){
                parent.loaded(object)
            }
        )
    }
    loaded(object){
        this.mesh = object
    }
}

export default MeshObject;