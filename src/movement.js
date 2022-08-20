import * as THREE from 'three'

function rotateOnAxis(mesh, axis = 'x', angular_velocity, isInstanced = true )
{
    if (isInstanced == false)
    {
        if (axis == 'x') 
        {
            mesh.rotation.x += angular_velocity
        }
        if (axis == 'y') 
        {   
            mesh.rotation.y += angular_velocity
        }
        if (axis == 'z') 
        {
            mesh.rotation.z += angular_velocity
        }
    }
    else
    {
        var n_mesh = mesh.count
        var mesh_matrix = new THREE.Matrix4()
        var pos =  new THREE.Vector3()
        var initial_quat = new THREE.Quaternion()
        var end_quat = new THREE.Quaternion()
        var scale = new THREE.Vector3()
        mesh_matrix.matrixAutoUpdate = false

        if (axis =='x')
        {
            var factor_quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), angular_velocity )
            for (let index = 0; index < n_mesh; index++)
            {
                mesh.getMatrixAt(index, mesh_matrix)
                mesh_matrix.decompose(pos, initial_quat, scale)
                end_quat.multiplyQuaternions(initial_quat, factor_quat)
                mesh_matrix.compose(pos, end_quat, scale)
                mesh.setMatrixAt(index, mesh_matrix)
            }
            mesh.instanceMatrix.needsUpdate = true;
        }
        if (axis =='y')
        {
            var factor_quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0), angular_velocity)
            for (let index = 0; index < n_mesh; index++)
            {   
                mesh.getMatrixAt(index, mesh_matrix)
                mesh_matrix.decompose(pos, initial_quat, scale)
                end_quat.multiplyQuaternions(initial_quat, factor_quat)
                mesh_matrix.compose(pos, end_quat, scale)
                mesh.setMatrixAt(index, mesh_matrix)
            }
            mesh.instanceMatrix.needsUpdate = true;
        }
        if (axis =='z')
        {
            var factor_quat = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1), angular_velocity)
            for (let index = 0; index < n_mesh; index++)
            {
                mesh.getMatrixAt(index, mesh_matrix)
                mesh_matrix.decompose(pos, initial_quat, scale)
                end_quat.multiplyQuaternions(initial_quat, factor_quat)
                mesh_matrix.compose(pos, end_quat, scale)
                mesh.setMatrixAt(index, mesh_matrix)
            }
            mesh.instanceMatrix.needsUpdate = true;
        }
    }
}

/**
This function is used to move meshes along the chosen axis. If isInstanced is set to True, then all the instacieted mesh will be moved along the axis
If respawn is set to true, the meshes are going to respawn at their respawn position after reaching the limit position (a float). 
*/

function moveMeshAlongAxis(mesh, axis= 'z', velocity= .1, isInstanced=false, respawn = false, respawn_position = 0, limit_position = 100)
{
    if (isInstanced == false)

    {
        if (axis=='x') 
        {
        mesh.position.x += velocity
        if (respawn) 
            {
            if (mesh.position.x >= limit_position)
                {
                    mesh.position.x = respawn_position
                }

            }
        }
        if (axis=='y') 
        {
        mesh.position.y += velocity
        if (respawn) 
        {
            if (mesh.position.y >= limit_position)
            {
                mesh.position.y = respawn_position
            }
        }
        }

        if (axis=='z') 
        {
        mesh.position.z += velocity
        if (respawn) 
        {
            if (mesh.position.z >= limit_position)
            {
                mesh.position.z = respawn_position
            }
        }
        }

    }

    if (isInstanced == true)
    {
        var n_mesh = mesh.count
        var mesh_matrix = new THREE.Matrix4()
        var pos =  new THREE.Vector3()
        var initial_quat = new THREE.Quaternion()
        var scale = new THREE.Vector3()
        mesh_matrix.matrixAutoUpdate = false

        if (axis == 'x')
        {
        for (let index = 0; index < n_mesh; index++)
            {
                mesh.getMatrixAt(index, mesh_matrix)
                mesh_matrix.decompose(pos, initial_quat, scale)
                pos.x += velocity
                //check if the position is grater than the limit position
                if (respawn)
                {
                    if (pos.x > limit_position)
                    {
                        //reset the position to the respawn position
                        pos.x = respawn_position
                    }
                }
                mesh_matrix.compose(pos, initial_quat, scale)
                mesh.setMatrixAt(index, mesh_matrix)
            }
            mesh.instanceMatrix.needsUpdate = true;
        }
        if (axis == 'y')
        {
        for (let index = 0; index < n_mesh; index++)
            {
                mesh.getMatrixAt(index, mesh_matrix)
                mesh_matrix.decompose(pos, initial_quat, scale)
                pos.y += velocity
                //check if the position is grater than the limit position
                if (respawn)
                {
                    if (pos.y > limit_position)
                    {
                        pos.y = respawn_position
                    }
                }
                mesh_matrix.compose(pos, initial_quat, scale)
                mesh.setMatrixAt(index, mesh_matrix)
            }
            mesh.instanceMatrix.needsUpdate = true;
        }

        if (axis == 'z')
        {
        for (let index = 0; index < n_mesh; index++)
            {
                mesh.getMatrixAt(index, mesh_matrix)
                mesh_matrix.decompose(pos, initial_quat, scale)
                pos.z += velocity
                //check if the position is grater than the limit position
                if (respawn)
                {
                if (pos.z > limit_position)
                {
                    pos.z = respawn_position
                }
                }
                mesh_matrix.compose(pos, initial_quat, scale)
                mesh.setMatrixAt(index, mesh_matrix)
            }
            mesh.instanceMatrix.needsUpdate = true;
        }
    }
}

/** 
This function is going to move meshes from the initial position of the mesh to the point passed as input. If IsInstanced is set to true
then the meshes move

*/
function moveMeshToPoint (mesh, point = new THREE.Vector3(0,0,0), velocity = .1, isInstanced = false, respawn = true )
{




}
export {rotateOnAxis, moveMeshAlongAxis}