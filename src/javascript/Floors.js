import * as THREE from 'three'

/* 
 * Textures
*/

import floorColorSource from '../textures/floor/color.jpg'
import floorAmbientOcclusionSource from '../textures/floor/ambientOcclusion.jpg'
import floorDisplacementSource from '../textures/floor/displacement.jpg'
import floorNormalSource from '../textures/floor/normal.jpg'
import floorRoughnessSource from '../textures/floor/roughness.jpg'
import floorAlphaSource from '../textures/floor/alphaMap.jpg'

const textureLoader = new THREE.TextureLoader()

const floorColorTexture = textureLoader.load(floorColorSource)
floorColorTexture.repeat.x = 4
floorColorTexture.repeat.y = 1
floorColorTexture.wrapS = THREE.RepeatWrapping
floorColorTexture.wrapT = THREE.RepeatWrapping

const floorAmbientOcclusionTexture = textureLoader.load(floorAmbientOcclusionSource)
const floorDisplacementTexture = textureLoader.load(floorDisplacementSource)
const floorNormalTexture = textureLoader.load(floorNormalSource)
const floorRoughnessTexture = textureLoader.load(floorRoughnessSource)
const floorAlphaTexture = textureLoader.load(floorAlphaSource)

/**
 * Floors
 */
export default class Floors {
    constructor(_lenght, _width){
        this.group = new THREE.Group()

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(_lenght, _width, 40, 40),
            new THREE.MeshStandardMaterial(
                {
                    map: floorColorTexture,
                    aoMap: floorAmbientOcclusionTexture,
                    displacementMap: floorDisplacementTexture,
                    displacementScale: 2,
                    roughnessMap: floorRoughnessTexture,
                    alphaMap: floorAlphaTexture,
                    normalMap: floorNormalTexture
                }
            )
        )

        //Temporary
        floor.position.z = -6

        floor.rotation.set( -Math.PI * 0.5 , 0, Math.PI * 0.5)
        this.group.position.set(0, -1.4, 0)
        this.group.add(floor)
    }
}