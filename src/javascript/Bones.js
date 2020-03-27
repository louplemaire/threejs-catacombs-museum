import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class Bones {
    constructor(_x,_y,_z,_rotX,_rotY,_rotZ,_scale){
        this.group = new THREE.Group()

        const gtlfLoader = new GLTFLoader()

        gtlfLoader.load(
            '/models/bones/scene.gltf',
            (_gltf) => {
                this.bones = _gltf.scene
                this.bones.position.set(_x, _y, _z)
                this.bones.rotation.set(_rotX,_rotY,_rotZ)
                this.bones.scale.set(_scale,_scale,_scale)
                this.group.add(this.bones)
            }
        )
    }
}
