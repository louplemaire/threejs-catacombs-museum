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
    constructor(){
        this.group = new THREE.Group()

        // Material

        const material1 = new THREE.MeshStandardMaterial()

        const firstSegment = new THREE.Group()
        firstSegment.position.set(0,0,-6)
        this.group.add(firstSegment)

        const box1 = new THREE.Mesh(
            new THREE.BoxGeometry(8,2,10),
            material1
        )
        box1.position.set(5,0,1)
        firstSegment.add(box1)

        const box2 = new THREE.Mesh(
            new THREE.BoxGeometry(2,2,12),
            material1
        )
        box2.position.set(-1,0,0)
        firstSegment.add(box2)

        const box3 = new THREE.Mesh(
            new THREE.BoxGeometry(10,2,3),
            material1
        )
        box3.position.set(4,0,-7.5)
        firstSegment.add(box3)

        const secondSegment = new THREE.Group()
        secondSegment.position.set(13,0,-11)
        this.group.add(secondSegment)

        const box4 = new THREE.Mesh(
            new THREE.BoxGeometry(8,2,1),
            material1
        )
        box4.position.set(0,0,-4)
        secondSegment.add(box4)

        const box5 = new THREE.Mesh(
            new THREE.BoxGeometry(8,2,1),
            material1
        )
        box5.position.set(0,0,4)
        secondSegment.add(box5)

        const box6 = new THREE.Mesh(
            new THREE.BoxGeometry(12,2,3),
            material1
        )
        box6.position.set(10,0,2.5)
        secondSegment.add(box6)

        const box7 = new THREE.Mesh(
            new THREE.BoxGeometry(10,2,6),
            material1
        )
        box7.position.set(9,0,-4)
        secondSegment.add(box7)

        const box8 = new THREE.Mesh(
            new THREE.BoxGeometry(2,2,8),
            material1
        )
        box8.position.set(17,0,-2.5)
        secondSegment.add(box8)
    }
}