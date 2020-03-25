import * as THREE from 'three'

/* 
 * Import Graff texture
*/

import firstGraff from '../textures/graffiti/firstGraff.jpg'
import secondGraff from '../textures/graffiti/secondGraff.jpg'
import thirdGraff from '../textures/graffiti/thirdGraff.jpg'
import fourGraff from '../textures/graffiti/fourGraff.jpg'

//Wall texture
import wallAmbientOcclusionSource from '../textures/walls/ambientOcclusion.jpg'
import wallDisplacementSource from '../textures/walls/displacement.jpg'
import wallNormalSource from '../textures/walls/normal.jpg'
import wallRoughnessSource from '../textures/walls/roughness.jpg'
import wallAlphaSource from '../textures/walls/alphaMap.jpg'

const textureLoader = new THREE.TextureLoader()

const firstGraffColor = textureLoader.load(firstGraff)
const secondGraffColor = textureLoader.load(secondGraff)
const thirdGraffColor = textureLoader.load(thirdGraff)
const fourGraffColor = textureLoader.load(fourGraff)

const wallAmbientOcclusionTexture = textureLoader.load(wallAmbientOcclusionSource)
const wallDisplacementTexture = textureLoader.load(wallDisplacementSource)
const wallNormalTexture = textureLoader.load(wallNormalSource)
const wallRoughnessTexture = textureLoader.load(wallRoughnessSource)
const wallAlphaTexture = textureLoader.load(wallAlphaSource)

export default class FirstGraff
{
    constructor()
    {
        this.firstGroup = new THREE.Group()

        const firstGraffMaterial = new THREE.MeshStandardMaterial
        (
            {
                map: firstGraffColor,
                aoMap: wallAmbientOcclusionTexture,
                displacementMap: wallDisplacementTexture,
                displacementScale: 0.2,
                roughnessMap: wallRoughnessTexture,
                alphaMap: wallAlphaTexture,
                normalMap: wallNormalTexture
            }
        )

        const firstWallGraff = new THREE.Mesh
        (
            new THREE.PlaneGeometry(5, 2, 40, 40),
            firstGraffMaterial    
        )

        this.firstGroup.add(firstWallGraff)

        //Second
        this.secondGroup = new THREE.Group()

        const secondGraffMaterial = new THREE.MeshStandardMaterial
        (
            {
                map: secondGraffColor,
                aoMap: wallAmbientOcclusionTexture,
                displacementMap: wallDisplacementTexture,
                displacementScale: 0.2,
                roughnessMap: wallRoughnessTexture,
                alphaMap: wallAlphaTexture,
                normalMap: wallNormalTexture
            }
        )

        const secondWallGraff = new THREE.Mesh
        (
            new THREE.PlaneGeometry(5, 2, 40, 40),
            secondGraffMaterial    
        )

        this.secondGroup.add(secondWallGraff)


        //Third
        this.thirdGroup = new THREE.Group()

        const thirdGraffMaterial = new THREE.MeshStandardMaterial
        (
            {
                map: thirdGraffColor,
                aoMap: wallAmbientOcclusionTexture,
                displacementMap: wallDisplacementTexture,
                displacementScale: 0.2,
                roughnessMap: wallRoughnessTexture,
                alphaMap: wallAlphaTexture,
                normalMap: wallNormalTexture
            }
        )

        const thirdWallGraff = new THREE.Mesh
        (
            new THREE.PlaneGeometry(5, 2, 40, 40),
            thirdGraffMaterial    
        )

        this.thirdGroup.add(thirdWallGraff)

        //Four
        this.fourGroup = new THREE.Group()

        const fourGraffMaterial = new THREE.MeshStandardMaterial
        (
            {
                map: fourGraffColor,
                aoMap: wallAmbientOcclusionTexture,
                displacementMap: wallDisplacementTexture,
                displacementScale: 0.2,
                roughnessMap: wallRoughnessTexture,
                alphaMap: wallAlphaTexture,
                normalMap: wallNormalTexture
            }
        )

        const fourWallGraff = new THREE.Mesh
        (
            new THREE.PlaneGeometry(5, 2, 40, 40),
            fourGraffMaterial    
        )

        this.fourGroup.add(fourWallGraff)
    }
}
