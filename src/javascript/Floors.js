import * as THREE from 'three'

/**
 * Floors
 */
export default class Floors {
    constructor(_lenght){
        this.group = new THREE.Group()

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(_lenght, 2, 40, 40),
            new THREE.MeshNormalMaterial
        )

        floor.position.set(0, -1, 0)
        floor.rotation.set( -Math.PI * 0.5 , 0, Math.PI * 0.5)

        this.group.add(floor)
    }
}