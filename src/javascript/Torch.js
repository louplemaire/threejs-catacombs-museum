import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class Torch
{
    constructor(_x, _y, _z, _rotationX,_rotationY,_rotationZ)
    {
        this.group = new THREE.Group()

        const gtlfLoader = new GLTFLoader()

        gtlfLoader.load(
            '/models/torchtest/scene.gltf',
            (_gltf) =>
            {
                this.torch = _gltf.scene

                this.torch.position.set(_x, _y, _z)
                this.torch.rotation.set(_rotationX,_rotationY,_rotationZ)
                this.torch.scale.set(0.01, 0.01, 0.01)
                console.log(_x)
                this.group.add(this.torch)
            }
        )
    }
}
