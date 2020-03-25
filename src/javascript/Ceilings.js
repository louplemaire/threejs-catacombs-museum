import * as THREE from 'three'

/* 
 * Textures
*/

import ceilingColorSource from '../textures/ceiling/color.jpg'
import ceilingAmbientOcclusionSource from '../textures/ceiling/ambientOcclusion.jpg'
import ceilingDisplacementSource from '../textures/ceiling/displacement.jpg'
import ceilingNormalSource from '../textures/ceiling/normal.jpg'
import ceilingRoughnessSource from '../textures/ceiling/roughness.jpg'
import ceilingAlphaSource from '../textures/ceiling/alphaMap.jpg'

const textureLoader = new THREE.TextureLoader()

const ceilingColorTexture = textureLoader.load(ceilingColorSource)
ceilingColorTexture.repeat.x = 25
ceilingColorTexture.repeat.y = 25
ceilingColorTexture.wrapS = THREE.RepeatWrapping
ceilingColorTexture.wrapT = THREE.RepeatWrapping

const ceilingAmbientOcclusionTexture = textureLoader.load(ceilingAmbientOcclusionSource)
const ceilingDisplacementTexture = textureLoader.load(ceilingDisplacementSource)
const ceilingNormalTexture = textureLoader.load(ceilingNormalSource)
const ceilingRoughnessTexture = textureLoader.load(ceilingRoughnessSource)
const ceilingAlphaTexture = textureLoader.load(ceilingAlphaSource)

/**
 * ceilings
 */

export default class Ceilings {
    constructor(_length, _width, _x, _z){
        this.group = new THREE.Group()

        const ceiling = new THREE.Mesh(
            new THREE.PlaneGeometry(_length, _width, 40, 40),
            new THREE.MeshStandardMaterial
            (
                {
                    map: ceilingColorTexture,
                    aoMap: ceilingAmbientOcclusionTexture,
                    displacementMap: ceilingDisplacementTexture,
                    displacementScale: 0.1,
                    roughnessMap: ceilingRoughnessTexture,
                    alphaMap: ceilingAlphaTexture,
                    normalMap: ceilingNormalTexture,
                }
            )
        )

        ceiling.position.set(_x, 2, _z)
        ceiling.rotation.set(Math.PI * 0.5, 0, Math.PI * 0.5)

        this.group.add(ceiling)
    }
}