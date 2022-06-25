class MeshObject extends GameObject{
    constructor(){
        super()
        this._mesh = new THREE.Mesh();
    }

    get mesh() {return this._mesh}
    set mesh(mesh){this._mesh = mesh}
}