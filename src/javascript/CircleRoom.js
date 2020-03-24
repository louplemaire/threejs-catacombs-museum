/**
 * CircleRoom
 */
import * as THREE from 'three'

export default class CircleRoom {
    constructor(_radius, _x, _z){
        this.group = new THREE.Group()

        const circleRoom = new THREE.Mesh(
            new THREE.SphereGeometry(_radius, 32, 32, 5.55, 1.5, 0.27, 2.6),
            new THREE.MeshNormalMaterial({
                side: THREE.DoubleSide
            })
        )

        circleRoom.position.set(_x, 1, _z)
        circleRoom.rotation.set(Math.PI * 0.5, 0, 0)

        const circleRoomOposite = circleRoom.clone()
        circleRoomOposite.position.x = 0.25
        circleRoomOposite.rotation.y = Math.PI

        this.group.add(circleRoom, circleRoomOposite)
    }
}