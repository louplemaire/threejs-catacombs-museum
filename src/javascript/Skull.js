import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Skull
{
    constructor(_x, _y, _z)
    {
        this.group = new THREE.Group()

        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')

        dracoLoader.preload()

        const gtlfLoader = new GLTFLoader()
        gtlfLoader.setDRACOLoader(dracoLoader)

        gtlfLoader.load(
            '/models/skull/skull.gltf',
            (_gltf) =>
            {
                console.log(_gltf)
                this.skull = _gltf.scene

                this.skull.scale.set(0.01, 0.01, 0.01)
                this.skull.rotation.set(Math.PI, 0,0)
                this.skull.position.set(_x, _y, _z)
                this.group.add(this.skull)
            }
        )
    }
}
