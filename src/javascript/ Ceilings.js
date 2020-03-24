/**
 * Ceillings
 */
import * as THREE from 'three'

export default class Ceillings {
    constructor(){
        this.group = new THREE.Group()

        const ceilling = new THREE.Mesh()

        this.group.add(ceilling)
    }
}