import * as THREE from 'three'


export default class TorchLight
{
    constructor(_x, _y, _z)
    {
        this.group = new THREE.Group()

        const light = new THREE.PointLight(0xff793f, 1, 2)
        light.position.set(_x, _y, _z)
        // const lightHelper = new THREE.PointLightHelper(light)
        this.group.add(light)
    }
}