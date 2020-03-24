/**
 * Ceillings
 */
import * as THREE from 'three'

export default class Ceillings {
    constructor(_length){
        this.group = new THREE.Group()

        const ceilling = new THREE.Mesh(
            new THREE.PlaneGeometry(_length, 2, 2),
            new THREE.MeshNormalMaterial()
        )

        ceilling.position.set(0, 2, 0)
        ceilling.rotation.set(Math.PI * 0.5 , 0, Math.PI)

        this.group.add(ceilling)
    }
}