import * as THREE from 'three'

/* 
 * Textures
*/

import floorColorSource from '../textures/floor/color.jpg'
import floorAmbientOcclusionSource from '../textures/floor/ambientOcclusion.jpg'
import floorDisplacementSource from '../textures/floor/displacement.jpg'
import floorNormalSource from '../textures/floor/normal.jpg'
import floorRoughnessSource from '../textures/floor/roughness.jpg'
import floorAlphaSource from '../textures/floor/alphaMap.jpg'

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