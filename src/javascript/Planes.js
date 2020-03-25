import * as THREE from 'three'

/* 
 * Textures
*/

import brickWallsColorSource from '../textures/brick_walls/color.jpg'
import brickWallsAmbientOcclusionSource from '../textures/brick_walls/ambientOcclusion.jpg'
import brickWallsDisplacementSource from '../textures/brick_walls/displacement.jpg'
import brickWallsNormalSource from '../textures/brick_walls/normal.jpg'
import brickWallsRoughnessSource from '../textures/brick_walls/roughness.jpg'
import brickWallsAlphaSource from '../textures/brick_walls/alpha.jpg'

const textureLoader = new THREE.TextureLoader()

const brickWallsColorTexture = textureLoader.load(brickWallsColorSource)
const brickWallsAmbientOcclusionTexture = textureLoader.load(brickWallsAmbientOcclusionSource)
const brickWallsDisplacementTexture = textureLoader.load(brickWallsDisplacementSource)
const brickWallsNormalTexture = textureLoader.load(brickWallsNormalSource)
const brickWallsRoughnessTexture = textureLoader.load(brickWallsRoughnessSource)
const brickWallsAlphaTexture = textureLoader.load(brickWallsAlphaSource)

const brickWallTexture = 
{
    map: brickWallsColorTexture,
    aoMap: brickWallsAmbientOcclusionTexture,
    displacementMap: brickWallsDisplacementTexture,
    displacementScale: 0,
    roughnessMap: brickWallsRoughnessTexture,
    alphaMap: brickWallsAlphaTexture,
    normalMap: brickWallsNormalTexture
}

export default class Planes {
    constructor(){
        this.group = new THREE.Group()

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(5,5),
            new THREE.MeshStandardMaterial(brickWallTexture)
        )
        plane.position.set(50,0,50)
        plane.rotation.set(Math.PI*0.5,0,0)
        this.group.add(plane)
    }
}


