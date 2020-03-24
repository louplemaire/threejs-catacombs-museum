/**
 * Imports
 */
import './style/main.styl'
import * as THREE from 'three'
import Walls from './javascript/Walls.js'
import Ceilings from './javascript/Ceilings.js'
import Floors from './javascript/Floors.js'
// import { TweenLite } from 'gsap/all'

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) => {
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Objects
 */


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
camera.position.z = 8
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

/**
 * Resize
 */
window.addEventListener('resize', () =>{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Loop
 */
const loop = () => {
    window.requestAnimationFrame(loop)

    // Camera
    camera.position.x = cursor.x * 5
    camera.position.y = - cursor.y * 5

    const angle = cursor.x * Math.PI * 2

    camera.position.x = Math.cos(angle) * 3
    camera.position.z = Math.sin(angle) * 3
    camera.position.y = cursor.y * 5

    camera.lookAt(scene.position)

    // Render
    renderer.render(scene, camera)
}

loop()