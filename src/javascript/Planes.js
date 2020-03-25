import * as THREE from 'three'

/* 
 * Textures
*/

const textureLoader = new THREE.TextureLoader()

export default class Planes {
    constructor(_x,_z){
        this.group = new THREE.Group()
        
        // Material

        // const material1 = new THREE.MeshStandardMaterial
        // (
        //     {
        //         map: brickWallsColorTexture,
        //         aoMap: brickWallsAmbientOcclusionTexture,
        //         displacementMap: brickWallsDisplacementTexture,
        //         displacementScale: 0,
        //         roughnessMap: brickWallsRoughnessTexture,
        //         alphaMap: brickWallsAlphaTexture,
        //         normalMap: brickWallsNormalTexture
        //     }
        // )

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(2,2),
            new THREE.MeshStandardMaterial()
        )
        plane.position.set(_x,1,_z)
        plane.rotation.set(0,0,0)
        this.group.add(plane)
    }
}


