/**
 * CircleRoom
 */
import * as THREE from 'three'

// import wallColorSource from '../textures/walls/color.jpg'
// import wallAmbientOcclusionSource from '../textures/walls/ambientOcclusion.jpg'
// import wallDisplacementSource from '../textures/walls/displacement.jpg'
// import wallNormalSource from '../textures/walls/normal.jpg'
// import wallRoughnessSource from '../textures/walls/roughness.jpg'
// import wallAlphaSource from '../textures/walls/alphaMap.jpg'

const textureLoader = new THREE.TextureLoader()

// const wallColorTexture = textureLoader.load(wallColorSource)
// wallColorTexture.repeat.x = 8
// wallColorTexture.repeat.y = 2
// wallColorTexture.wrapS = THREE.RepeatWrapping
// wallColorTexture.wrapT = THREE.RepeatWrapping

// const wallAmbientOcclusionTexture = textureLoader.load(wallAmbientOcclusionSource)
// const wallDisplacementTexture = textureLoader.load(wallDisplacementSource)
// const wallNormalTexture = textureLoader.load(wallNormalSource)
// const wallRoughnessTexture = textureLoader.load(wallRoughnessSource)
// const wallAlphaTexture = textureLoader.load(wallAlphaSource)

export default class CircleRoom {
    constructor(_radius, _x, _z){
        this.group = new THREE.Group()

        const circleRoom = new THREE.Mesh(
            new THREE.SphereGeometry(_radius, 32, 32, 5.55, 1.5, 0.27, 2.6),
            new THREE.MeshStandardMaterial()
        )
        circleRoom.position.set(_x, 1, _z)
        circleRoom.rotation.set(Math.PI * 0.5, 0, 0)

        const circleRoomOposite = circleRoom.clone()
        circleRoomOposite.position.x = circleRoom.position.x + 0.1
        circleRoomOposite.rotation.y = Math.PI

        this.group.add(circleRoom, circleRoomOposite)
    }
}