import * as THREE from 'three'
import WetFloorColorSource from '../textures/wet_floor/color.jpg'
import WetFloorAmbientOcclusionSource from '../textures/wet_floor/ambientOcclusion.jpg'
import WetFloorDisplacementSource from '../textures/wet_floor/displacement.png'
import WetFloorNormalSource from '../textures/wet_floor/normal.jpg'
import WetFloorRoughnessSource from '../textures/wet_floor/roughness.jpg'
import WetFloorAlphaSource from '../textures/wet_floor/alphaMap.jpg'

const textureLoader = new THREE.TextureLoader()

const WetFloorColorTexture = textureLoader.load(WetFloorColorSource)
WetFloorColorTexture.repeat.x = 10
WetFloorColorTexture.repeat.y = 10
WetFloorColorTexture.wrapS = THREE.RepeatWrapping
WetFloorColorTexture.wrapT = THREE.RepeatWrapping

const WetFloorAmbientOcclusionTexture = textureLoader.load(WetFloorAmbientOcclusionSource)
const WetFloorDisplacementTexture = textureLoader.load(WetFloorDisplacementSource)
const WetFloorNormalTexture = textureLoader.load(WetFloorNormalSource)
const WetFloorRoughnessTexture = textureLoader.load(WetFloorRoughnessSource)
const WetFloorAlphaTexture = textureLoader.load(WetFloorAlphaSource)

export default class WetFloors {
    constructor(_lenght, _width, _x, _z){
        this.group = new THREE.Group()

        const wetFloor = new THREE.Mesh(
            new THREE.PlaneGeometry(_lenght, _width, 20, 20),
            new THREE.MeshStandardMaterial({
                map: WetFloorColorTexture,
                aoMap: WetFloorAmbientOcclusionTexture,
                displacementMap: WetFloorDisplacementTexture,
                displacementScale: .2,
                roughnessMap: WetFloorRoughnessTexture,
                alphaMap: WetFloorAlphaTexture,
                normalMap: WetFloorNormalTexture
            })
        )

        wetFloor.rotation.set( -Math.PI * 0.5 , 0, Math.PI * 0.5)
        wetFloor.position.set(_x, - .1, _z)
        this.group.add(wetFloor)
    }
}