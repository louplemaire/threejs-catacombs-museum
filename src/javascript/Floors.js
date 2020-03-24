/**
 * Floors
 */
import * as THREE from 'three'

export default class Floors {
    constructor(){
        this.group = new THREE.Group()

        const floor = new THREE.Mesh()

        this.group.add(floor)
    }
}