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
wallColorTexture.repeat.x = 4
wallColorTexture.repeat.y = 1
wallColorTexture.wrapS = THREE.RepeatWrapping
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

        const material1 = new THREE.MeshStandardMaterial(
            {
                map: wallColorTexture,
                aoMap: wallAmbientOcclusionTexture,
                displacementMap: wallDisplacementTexture,
                displacementScale: 0.2,
                roughnessMap: wallRoughnessTexture,
                alphaMap: wallAlphaTexture,
                normalMap: wallNormalTexture
            }
        )

        const wall = new THREE.Mesh(
            new THREE.BoxGeometry(_width,_height,_depth, 10, 10, 10),
            material1
        )
        wall.position.set(_x,1,_z)
        this.group.add(wall)

        // const thirdSegment = new THREE.Group()
        // thirdSegment.position.set(28, 1, -25)
        // this.group.add(thirdSegment)

        // const centerPilar = new THREE.Mesh(
        //     new THREE.CylinderGeometry(1,1,2,64),
        //     material1
        // )
        // thirdSegment.add(centerPilar)

        // const arcLeft = new THREE.Mesh(
        //     new THREE.CylinderGeometry(5,5,2,64,12),
        //     material1
        // )
        // arcLeft.position.set(0,0,0)
        // arcLeft.rotation.set(0,Math.PI * 0.5,0)
        // arcLeft.side = THREE.DoubleSide
        // thirdSegment.add(arcLeft)

        // const arc2 = new THREE.Mesh(
        //     new THREE.CylinderGeometry(7,7,2,64,12,true,3,3),
        //     material1
        // )
        // arc2.position.set(1.5,0,3)
        // arc2.rotation.set(0,Math.PI,0)
        // arc2.side = THREE.DoubleSide
        // thirdSegment.add(arc2)

    }
}