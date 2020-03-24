/**
 * Imports
 */
import './style/main.styl'
import * as THREE from 'three'
import Walls from './javascript/Walls.js'
import Ceilings from './javascript/Ceilings.js'
import Floors from './javascript/Floors.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
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
//Add floor
const floor = new Floors(10)
scene.add(floor.group)

//Add ceiling
const ceiling = new Ceilings()
scene.add(ceiling.group)

//Add walls
const walls = new Walls()
scene.add(walls.group)

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 30)
camera.position.set(0,1,8)
scene.add(camera)

/**
 * Lights
 */

const ambientLight = new THREE.AmbientLight(0x65aaac, 0.2)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3)
directionalLight.position.set(0,1,1)
scene.add(directionalLight)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

/* 
    Orbits Controls
*/
const cameraControls = new OrbitControls(camera, renderer.domElement)
cameraControls.zoomSpeed = 0.3
cameraControls.enableDamping = true

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
    // camera.position.x = cursor.x * 5
    // camera.position.y = - cursor.y * 5

    // const angle = cursor.x * Math.PI * 2

    // camera.position.x = Math.cos(angle) * 3
    // camera.position.z = Math.sin(angle) * 3
    // camera.position.y = cursor.y * 5

    // camera.lookAt(scene.position)

    cameraControls.update()


    // Render
    renderer.render(scene, camera)
}

loop()

/**
 * Movement
 */

const movement = () => 
{
    window.addEventListener('keydown', (e) =>
    {
        if (e.keyCode == 90) // w
        {
            camera.position.z -= 0.2
        }
        if (e.keyCode == 81) // q
        {
            camera.position.x -= 0.2
        }
        if (e.keyCode == 83) // s
        {
            camera.position.z += 0.2
        }
        if (e.keyCode == 68) // d
        {
            camera.position.x += 0.2
        }
        if (e.keyCode == 65) // a
        {
            camera.rotation.y += Math.PI*0.05
        }
        if (e.keyCode == 69) // e
        {
            camera.rotation.y -= Math.PI*0.05
        }
    })
}
movement()