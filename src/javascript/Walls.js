/**
 * Walls
 */
import * as THREE from 'three'

export default class Walls {
    constructor(){
        this.group = new THREE.Group()

        const wall = new THREE.Mesh()

        this.group.add(wall)
    }
}