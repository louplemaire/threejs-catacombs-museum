/* 
 * Textures
*/

import wallColorSource from '../textures/walls/color.jpg'
import wallAmbientOcclusionSource from '../textures/walls/ambientOcclusion.jpg'
import wallDisplacementSource from '../textures/walls/displacement.jpg'
import wallNormalSource from '../textures/walls/normal.jpg'
import wallRoughnessSource from '../textures/walls/roughness.jpg'
import wallAlphaSource from '../textures/walls/alphaMap.jpg'

const textureLoader = new THREE.TextureLoader()

const wallColorTexture = textureLoader.load(wallColorSource)
// wallColorTexture.repeat.x = 8
// wallColorTexture.repeat.y = 2
// wallColorTexture.wrapS = THREE.RepeatWrapping
// wallColorTexture.wrapT = THREE.RepeatWrapping

const wallAmbientOcclusionTexture = textureLoader.load(wallAmbientOcclusionSource)
const wallDisplacementTexture = textureLoader.load(wallDisplacementSource)
const wallNormalTexture = textureLoader.load(wallNormalSource)
const wallRoughnessTexture = textureLoader.load(wallRoughnessSource)
const wallAlphaTexture = textureLoader.load(wallAlphaSource)

/**
 * Walls
 */
import * as THREE from 'three'

export default class Walls {
    constructor(_width,_height,_depth,_x,_z){
        this.group = new THREE.Group()

        // Material

        const material1 = new THREE.MeshStandardMaterial
        (
            {
                map: wallColorTexture,
                aoMap: wallAmbientOcclusionTexture,
                displacementMap: wallDisplacementTexture,
                displacementScale: 0.1,
                roughnessMap: wallRoughnessTexture,
                alphaMap: wallAlphaTexture,
                normalMap: wallNormalTexture
            }
        )

        const wall = new THREE.Mesh(
            new THREE.BoxGeometry(_width,_height,_depth, 40 , 40 , 40 ),
            material1
        )
        wall.position.set(_x,1,_z)
        this.group.add(wall)
    }
}