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

        ceilling.position.y = 2
        ceilling.rotation.set( Math.PI * 0.5 , 0, Math.PI * 0.5)

        this.group.add(ceilling)
    }
}