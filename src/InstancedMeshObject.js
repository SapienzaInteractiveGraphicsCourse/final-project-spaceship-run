import {InstancedMesh} from 'three'
class InstancedMeshObject extends InstancedMesh{
    //geometry: either a BufferGeometry instance or a string to file
    constructor(geometry,material,count){
        super()
        super.dispose();
        this._geometry;
        if((typeof geometry)==String){
            this.loadMesh(geometry)
        }else{
            this._geometry = geometry
        }

        this._material = material;
        this._count = count;
    }

    get geometry(){return this._geometry;}
    set geometry(geometry){
        this._geometry = geometry;
        super.geometry = geometry;
        super.material = this._material;
        super.count = this._count;
    }

    loadMesh(meshFile,filetype,parent=this){
        const loader = new OBJLoader();

        loader.load(
            meshFile,
            function(object){//object is a Object3D
                parent.geometry = object.getObjectByName("Group1").geometry;
                parent.super(object.getObjectByName("Group1").geometry)
            }
        )
    }
}

export default InstancedMeshObject