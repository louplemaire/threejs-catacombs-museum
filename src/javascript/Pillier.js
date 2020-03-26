import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

import pillierColorSource from '../textures/pillier/color.jpg'
import pillierNormalSource from '../textures/pillier/normal.jpg'

const textureLoader = new THREE.TextureLoader()

const pillierColorTexture = textureLoader.load(pillierColorSource)
const pillierNormalTexture = textureLoader.load(pillierNormalSource)


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
                this.pillier = _gltf.scene.children[2]

                this.pillier.material = new THREE.MeshStandardMaterial
                (
                    {
                        map: pillierColorTexture,
                        normalMap: pillierNormalTexture
                    }
                )

                this.pillier.scale.set(0.01, 0.01, 0.01)
                // this.pillier.rotation.set(Math.PI, 0,0)
                // this.pillier.position.set(_x, _y, _z)
                this.pillier.position.set(0, 1, -3)
                this.group.add(this.pillier)
            }
        )
    }
}
