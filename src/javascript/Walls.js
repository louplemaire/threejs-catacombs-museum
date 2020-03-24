/* 
 * Textures
*/

import wallColorSource from '../textures/walls/color.jpg'
import wallAmbientOcclusionSource from '../textures/walls/ambientOcclusion.jpg'
import wallDisplacementSource from '../textures/walls/displacement.jpg'
import wallNormalSource from '../textures/walls/normal.jpg'
import wallRoughnessSource from '../textures/walls/roughness.jpg'
import wallAlphaSource from '../textures/walls/alphaMap.jpg'


/**
 * Walls
 */
import * as THREE from 'three'

export default class Walls {
    constructor(width,height,depth,x,y,z){
        this.group = new THREE.Group()

        // Material

        const material1 = new THREE.MeshStandardMaterial()

        const walls = new THREE.Mesh(
            new THREE.BoxGeometry(width,height,depth),
            material1
        )
        walls.position.set(x,y,z)
        this.group.add(walls)

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