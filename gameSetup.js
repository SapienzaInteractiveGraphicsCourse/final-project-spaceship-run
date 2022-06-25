function sceneSetup(world){
    var object = new MeshObject();
    world.add(object)
    object.mesh = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:0x00ff00}));
}