import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Skull {
    constructor(_x,_y,_z,_rotX,_rotY,_rotZ,_scale){
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        dracoLoader.preload()

        const gtlfLoader = new GLTFLoader()
        gtlfLoader.setDRACOLoader(dracoLoader)

        gtlfLoader.load(
            '/models/skull/skull.gltf',
            (_gltf) => {
                this.skull = _gltf.scene
                this.skull.position.set(_x, _y, _z)
                this.skull.rotation.set(_rotX,_rotY,_rotZ)
                this.skull.scale.set(_scale, _scale, _scale)
                this.group.add(this.skull)
            }
        )
    }
}
