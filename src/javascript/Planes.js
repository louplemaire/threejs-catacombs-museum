import * as THREE from 'three'
import brickwallColorSource from '../textures/brickwall/color.jpg'
import brickwallAmbientOcclusionSource from '../textures/brickwall/ambientOcclusion.jpg'
import brickwallDisplacementSource from '../textures/brickwall/displacement.jpg'
import brickwallNormalSource from '../textures/brickwall/normal.jpg'
import brickwallRoughnessSource from '../textures/brickwall/roughness.jpg'

const textureLoader = new THREE.TextureLoader()

const brickwallColorTexture = textureLoader.load(brickwallColorSource)

const brickwallAmbientOcclusionTexture = textureLoader.load(brickwallAmbientOcclusionSource)
const brickwallDisplacementTexture = textureLoader.load(brickwallDisplacementSource)
const brickwallNormalTexture = textureLoader.load(brickwallNormalSource)
const brickwallRoughnessTexture = textureLoader.load(brickwallRoughnessSource)

export default class Planes {
    constructor(_x,_z){
        this.group = new THREE.Group()

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(2,2),
            new THREE.MeshStandardMaterial({
                map: brickwallColorTexture,
                aoMap: brickwallAmbientOcclusionTexture,
                displacementMap: brickwallDisplacementTexture,
                displacementScale: 0.1,
                roughnessMap: brickwallRoughnessTexture,
                normalMap: brickwallNormalTexture
            })
        )
        plane.position.set(_x,1,_z)
        plane.rotation.set(0,0,0)
        this.group.add(plane)
    }
}


