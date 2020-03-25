import * as THREE from 'three'


/* 
 * FlashLight
*/

export default class FlashLight
{
    constructor(_x, _y, _z)
    {
        this.group = new THREE.Group()

        const pointLight = new THREE.PointLight(0xffffff, 1, 5)
        pointLight.position.set(_x, _y, _z)
        pointLight.rotation.z = Math.PI 

        this.group.add(pointLight)
    }
}