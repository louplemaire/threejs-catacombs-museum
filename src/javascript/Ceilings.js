/**
 * Ceillings
 */
import * as THREE from 'three'

export default class Ceillings {
    constructor(ceillingLength){
        this.group = new THREE.Group()

        const ceilling = new THREE.Mesh(
            new THREE.PlaneGeometry(ceillingLength, 2, 2),
            new THREE.MeshNormalMaterial()
        )

        ceilling.rotation.x = Math.PI * 0.5

        this.group.add(ceilling)
    }
}