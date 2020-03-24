import * as THREE from 'three'

/**
 * Floors
 */
export default class Floors {
    constructor(floorLenght){
        this.group = new THREE.Group()

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(floorLenght, 2, 40, 40),
            new THREE.MeshNormalMaterial
        )
        
        floor.rotation.set( -Math.PI * 0.5 , 0, Math.PI * 0.5)

        this.group.add(floor)
    }
}