import * as THREE from 'three'

/* 
 * Textures
*/

import ceillingColorSource from '../textures/ceiling/color.jpg'
import ceillingAmbientOcclusionSource from '../textures/ceiling/ambientOcclusion.jpg'
import ceillingDisplacementSource from '../textures/ceiling/displacement.jpg'
import ceillingNormalSource from '../textures/ceiling/normal.jpg'
import ceillingRoughnessSource from '../textures/ceiling/roughness.jpg'
import ceillingAlphaSource from '../textures/ceiling/alphaMap.jpg'


/**
 * Ceillings
 */

export default class Ceillings {
    constructor(_length, _width){
        this.group = new THREE.Group()

        const ceilling = new THREE.Mesh(
            new THREE.PlaneGeometry(_length, _width, 40, 40),
            new THREE.MeshNormalMaterial()
        )

        ceilling.position.set(0, 2, 0)
        ceilling.rotation.set( Math.PI * 0.5 , 0, Math.PI * 0.5)

        this.group.add(ceilling)
    }
}