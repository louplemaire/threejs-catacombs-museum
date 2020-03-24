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
        secondSegment.position.set(8,0,-11)
        this.group.add(secondSegment)

        const box4 = new THREE.Mesh(
            new THREE.BoxGeometry(8,2,1),
            material1
        )
        box4.position.set(4,0,-4)
        secondSegment.add(box4)
    }
}