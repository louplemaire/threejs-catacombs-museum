/* 
 * Textures
*/

// import pillarColorSource from '../textures/pillars/color.jpg'
// import pillarAmbientOcclusionSource from '../textures/pillars/ambientOcclusion.jpg'
// import pillarDisplacementSource from '../textures/pillars/displacement.jpg'
// import pillarNormalSource from '../textures/pillars/normal.jpg'
// import pillarRoughnessSource from '../textures/pillars/roughness.jpg'
// import pillarAlphaSource from '../textures/pillars/alphaMap.jpg'

const textureLoader = new THREE.TextureLoader()

// const pillarColorTexture = textureLoader.load(pillarColorSource)
// // pillarColorTexture.repeat.x = 8
// // pillarColorTexture.repeat.y = 2
// // pillarColorTexture.wrapS = THREE.RepeatWrapping
// // pillarColorTexture.wrapT = THREE.RepeatWrapping

// const pillarAmbientOcclusionTexture = textureLoader.load(pillarAmbientOcclusionSource)
// const pillarDisplacementTexture = textureLoader.load(pillarDisplacementSource)
// const pillarNormalTexture = textureLoader.load(pillarNormalSource)
// const pillarRoughnessTexture = textureLoader.load(pillarRoughnessSource)
// const pillarAlphaTexture = textureLoader.load(pillarAlphaSource)

/**
 * Pillars
 */
import * as THREE from 'three'

export default class Pillars {
    constructor(_radiusTop,_radiusBottom,_x,_z){
        this.group = new THREE.Group()

        // Material

        const material1 = new THREE.MeshStandardMaterial
        (
            // {
            //     map: pillarColorTexture,
            //     aoMap: pillarAmbientOcclusionTexture,
            //     displacementMap: pillarDisplacementTexture,
            //     displacementScale: 0.1,
            //     roughnessMap: pillarRoughnessTexture,
            //     roughness: 0.5,
            //     alphaMap: pillarAlphaTexture,
            //     normalMap: pillarNormalTexture
            // }
        )

        const pillar = new THREE.Mesh(
            new THREE.CylinderGeometry(_radiusTop*0.1,_radiusBottom*0.1, 2.2 , 40 , 40 ),
            material1
        )
        pillar.position.set(_x,1,_z)
        pillar.rotation.set(0,0,0)
        this.group.add(pillar)
    }
}