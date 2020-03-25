import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default class Pillier
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
            '/models/pillier/pillier.gltf',
            (_gltf) =>
            {
                console.log(_gltf)
                this.pillier = _gltf.scene

                this.pillier.scale.set(0.01, 0.01, 0.01)
                this.pillier.rotation.set(Math.PI, 0,0)
                // this.pillier.position.set(_x, _y, _z)
                this.group.add(this.pillier)
            }
        )
    }
}
