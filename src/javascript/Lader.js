import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Lader
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
            '/models/lader/echelle.gltf',
            (_gltf) =>
            {
                console.log(_gltf)
                this.lader = _gltf.scene.children[2]
                this.lader.position.set(_x, _y, _z)
                this.lader.scale.set(0.1, 0.1, 0.1)
                // this.lader.rotation.set(Math.PI, 0,0)

                this.group.add(this.lader)
            }
        )
    }
}
