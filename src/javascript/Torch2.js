import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Torch
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
            '/models/torch2/torch2.gltf',
            (_gltf) =>
            {
                this.torch2 = _gltf.scene

                this.torch2.scale.set(0.01, 0.01, 0.01)
                this.torch2.rotation.set(Math.PI, 0,0)
                this.torch2.position.set(_x, _y, _z)
                this.group.add(this.torch2)
            }
        )
    }
}
