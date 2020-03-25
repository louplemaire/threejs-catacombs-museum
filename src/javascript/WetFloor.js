import * as THREE from 'three'

/* 
 * Textures
*/

import WetFloorColorSource from '../textures/wet_floor/color.jpg'
import WetFloorAmbientOcclusionSource from '../textures/wet_floor/ambientOcclusion.jpg'
import WetFloorDisplacementSource from '../textures/wet_floor/displacement.png'
import WetFloorNormalSource from '../textures/wet_floor/normal.jpg'
import WetFloorRoughnessSource from '../textures/wet_floor/roughness.jpg'
import WetFloorAlphaSource from '../textures/wet_floor/alphaMap.jpg'

const textureLoader = new THREE.TextureLoader()

const WetFloorColorTexture = textureLoader.load(WetFloorColorSource)
WetFloorColorTexture.repeat.x = 4
WetFloorColorTexture.repeat.y = 1
WetFloorColorTexture.wrapS = THREE.RepeatWrapping
WetFloorColorTexture.wrapT = THREE.RepeatWrapping

const WetFloorAmbientOcclusionTexture = textureLoader.load(WetFloorAmbientOcclusionSource)
const WetFloorDisplacementTexture = textureLoader.load(WetFloorDisplacementSource)
const WetFloorNormalTexture = textureLoader.load(WetFloorNormalSource)
const WetFloorRoughnessTexture = textureLoader.load(WetFloorRoughnessSource)
const WetFloorAlphaTexture = textureLoader.load(WetFloorAlphaSource)

/**
 * wetFloors
 */
export default class WetFloors {
    constructor(_lenght, _width){
        this.group = new THREE.Group()

        const WetFloor = new THREE.Mesh(
            new THREE.PlaneGeometry(_lenght, _width, 40, 40),
            new THREE.MeshStandardMaterial(
                {
                    map: WetFloorColorTexture,
                    aoMap: WetFloorAmbientOcclusionTexture,
                    displacementMap: WetFloorDisplacementTexture,
                    displacementScale: .2,
                    roughnessMap: WetFloorRoughnessTexture,
                    alphaMap: WetFloorAlphaTexture,
                    normalMap: WetFloorNormalTexture
                }
            )
        )

        //Temporary
        WetFloor.position.z = -6

        WetFloor.rotation.set( -Math.PI * 0.5 , 0, Math.PI * 0.5)
        this.group.position.set(0, - .1, 0)
        this.group.add(WetFloor)
    }
}