class MeshObject extends GameObject{
    constructor(){
        super();
    }

    get mesh() {return this._mesh;}
    set mesh(mesh){
        super.add(mesh);
    }
}