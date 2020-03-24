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
    constructor(_length, _width, _x, _z){
        this.group = new THREE.Group()

        const ceilling = new THREE.Mesh(
            new THREE.PlaneGeometry(_length, _width, 40, 40),
            new THREE.MeshNormalMaterial()
        )

        ceilling.position.set(_x, 2, _z)
        ceilling.rotation.set(Math.PI * 0.5, 0, Math.PI * 0.5)

        this.group.add(ceilling)
    }
}