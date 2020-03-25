/**
 * Imports
 */
import './style/main.styl'
import * as THREE from 'three'
import Walls from './javascript/Walls.js'
import Ceilings from './javascript/Ceilings.js'
import Floors from './javascript/Floors.js'
import WetFloors from './javascript/WetFloor.js'
import FlashLight from './javascript/FlashLight.js'
import Planes from './javascript/Planes.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import CircleRoom from './javascript/CircleRoom'
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
const wetFloor = new WetFloors(12, 2, 0)
scene.add(wetFloor.group)

//Add ceiling
const ceiling = new Ceilings(12, 2, 0, -6)
scene.add(ceiling.group)

//Add plane
// const plane = new Planes()
// scene.add(plane.group)

//Add walls

//First segment
const firstSegment = new THREE.Group()
firstSegment.position.set(0,0,-6)
scene.add(firstSegment)

const wall1 = new Walls(8,2,10,5,1)
firstSegment.add(wall1.group)

const wall2 = new Walls(2,2,12,-2,0)
firstSegment.add(wall2.group)

const wall3 = new Walls(10,2,3,4,-7.5)
firstSegment.add(wall3.group)

//Second Segment
const secondSegment = new THREE.Group()
secondSegment.position.set(13,0,-11)
scene.add(secondSegment)

const wall4 = new Walls(8,2,1,0,-4.5)
secondSegment.add(wall4.group)

const wall5 = new Walls(8,2,1,0,4.5)
secondSegment.add(wall5.group)

const wall6 = new Walls(12,2,3,10,2.5)
secondSegment.add(wall6.group)

const wall7 = new Walls(10,2,6,9,-4)
secondSegment.add(wall7.group)

const wall8 = new Walls(2,2,8,17,-3)
secondSegment.add(wall8.group)

//Third Segment
const thirdSegment = new THREE.Group()
thirdSegment.position.set(28,0,-31)
scene.add(thirdSegment)

const wall9 = new Walls(2,2,10,-2,0)
thirdSegment.add(wall9.group)

const wall10 = new Walls(2,2,1,0,-5.5)
thirdSegment.add(wall10.group)

const wall11 = new Walls(12,2,2,7,-4)
thirdSegment.add(wall11.group)

const wall12 = new Walls(8,2,6,5,2)
thirdSegment.add(wall12.group)

const wall13 = new Walls(2,2,4,10,1)
thirdSegment.add(wall13.group)

const wall14 = new Walls(2,2,6,14,0)
thirdSegment.add(wall14.group)

//Fourth Segment
const fourthSegment = new THREE.Group()
fourthSegment.position.set(40,0,-20)
scene.add(fourthSegment)

const wall15 = new Walls(1,2,10,-3.5,-1)
fourthSegment.add(wall15.group)

const wall16 = new Walls(1,2,12,3.5,-2)
fourthSegment.add(wall16.group)

const wall17 = new Walls(2,2,6,-2,7)
fourthSegment.add(wall17.group)

const wall18 = new Walls(8,2,4,5,6)
fourthSegment.add(wall18.group)

const wall19 = new Walls(10,2,2,4,11)
fourthSegment.add(wall19.group)

const wall20 = new Walls(1,2,2,9.5,9)
fourthSegment.add(wall20.group)

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 30)
camera.position.set(0,2,5)
scene.add(camera)

/**
 * Lights
 */

const ambientLight = new THREE.AmbientLight(0xffffff, .1)
scene.add(ambientLight)


const flashLight = new FlashLight(0, 0, 0)
scene.add(flashLight.group)
// const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3)
// directionalLight.position.set(0,1,1)
// scene.add(directionalLight)


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
    
    //Update flashLight coord
    flashLight.group.position.set(camera.position.x, camera.position.y, camera.position.z)

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

const link = document.querySelector(".linking")
const landingPage = document.querySelector(".landing")
console.log(link)

link.addEventListener('click', () =>
{
    landingPage.style.opacity = 0
    landingPage.classList.add('isVisible')
})