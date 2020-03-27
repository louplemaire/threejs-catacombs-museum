/**
 * Imports
 */
import './style/main.styl'
import * as THREE from 'three'
import Skull from './javascript/Skull.js'
import Bones from './javascript/Bones.js'
import Pillars  from './javascript/Pillars.js'
import Walls from './javascript/Walls.js'
import Ceilings from './javascript/Ceilings.js'
import WetFloors from './javascript/WetFloor.js'
import FlashLight from './javascript/FlashLight.js'
import Planes from './javascript/Planes.js'
import Graffiti from './javascript/Graffiti.js'
import Lader from './javascript/Lader.js'
import CircleRoom from './javascript/CircleRoom.js'
import { TimelineLite } from 'gsap/all'
import walkSound from './audios/walk-sound.mp3'
import ambientSound from './audios/ambient-sound.mp3'
import ambientMusic from './audios/music.mp3'
import paperSound from './audios/paper.mp3'
import SoundOn from './images/volumeOn.svg'
import SoundOff from './images/volumeOff.svg'

/**
 * Images
 */
// Sewer
import sewerImage from './images/sewer.png'

const sewerImageContainer = document.querySelector('.js-sewer-image')
const $sewerImage = new Image()
$sewerImage.src = sewerImage
sewerImageContainer.appendChild($sewerImage)
$sewerImage.setAttribute('alt', 'Sewer image')

// Smoke
import smokeImage from './images/smoke.png'

const smokeImageContainer = document.querySelector('.js-smoke-image')
const $smokeImage = new Image()
$smokeImage.src = smokeImage
smokeImageContainer.appendChild($smokeImage)
$smokeImage.setAttribute('alt', 'Smoke image')

// Parchment
import parchmentImage from './images/parchment.png'

const $parchmentImage = new Image()
$parchmentImage.src = parchmentImage
$parchmentImage.setAttribute('alt', 'Parchment image')

// Bunker
import bunkerImage from './images/bunker.jpg'

const bunkerImageContainer = document.querySelector('.js-bunker-image')
const $bunkerImage = new Image()
$bunkerImage.src = bunkerImage
bunkerImageContainer.appendChild($bunkerImage)
$bunkerImage.setAttribute('alt', 'bunker image')

// tags
import tagsImage from './images/tags.jpg'

const tagsImageContainer = document.querySelector('.js-tags-image')
const $tagsImage = new Image()
$tagsImage.src = tagsImage
tagsImageContainer.appendChild($tagsImage)
$tagsImage.setAttribute('alt', 'tags image')

// bonesSkullDescription
import bonesSkullDescriptionImage from './images/bonesSkullDescription.jpg'

const bonesSkullDescriptionImageContainer = document.querySelector('.js-bonesSkullDescription-image')
const $bonesSkullDescriptionImage = new Image()
$bonesSkullDescriptionImage.src = bonesSkullDescriptionImage
bonesSkullDescriptionImageContainer.appendChild($bonesSkullDescriptionImage)
$bonesSkullDescriptionImage.setAttribute('alt', 'bonesSkullDescription image')

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
//Add walls
//First segment
const firstSegment = new THREE.Group()
firstSegment.position.set(0,0,-6)
scene.add(firstSegment)

const wall0 = new Walls(2,2,2,0,6)
firstSegment.add(wall0.group)

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

//Circle Room
const circleRoomGroup = new THREE.Group()
circleRoomGroup.position.set(15,0,-11)
secondSegment.add(circleRoomGroup)
const circleRoom = new CircleRoom(4,0,0)
circleRoomGroup.add(circleRoom.group)

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

//Add Graffiti
const graffWall1 = new Graffiti(1.5,-5.95,0)
firstSegment.add(graffWall1.fourGroup)

const graffWall2 = new Graffiti(8,0.95,Math.PI)
secondSegment.add(graffWall2.thirdGroup)

const graffWall3 = new Graffiti(12.95,0,-Math.PI*0.5)
thirdSegment.add(graffWall3.secondGroup)

const graffWall4 = new Graffiti(2,9.95,Math.PI)
fourthSegment.add(graffWall4.firstGroup)

/**
 * Models
 */
//Bones and skull
// Group 1 BonesSkull
const bonesSkullG1 = new THREE.Group()
bonesSkullG1.position.set(0,0,0.5)
secondSegment.add(bonesSkullG1)

const bonesG1_1 = new Bones(2,0,2,Math.PI*0.5,0,0,0.0015)
bonesSkullG1.add(bonesG1_1.group)

const bonesG1_2 = new Bones(2.01,0.02,2.1,0,Math.PI*0.2,Math.PI*0.55,0.0015)
bonesSkullG1.add(bonesG1_2.group)

const bonesG1_3 = new Bones(-2,0,-2.4,Math.PI*0.5,0,0,0.0015)
bonesSkullG1.add(bonesG1_3.group)

const bonesG1_4 = new Bones(-2.01,0.02,-2.5,0,Math.PI*0.2,Math.PI*0.55,0.0015)
bonesSkullG1.add(bonesG1_4.group)

const skull1 = new Skull(2.25,0,-1.9,Math.PI,Math.PI*0.35,0,0.01)
bonesSkullG1.add(skull1.group)

const skull2 = new Skull(1.78,0,1.9,Math.PI,Math.PI*0.65,0,0.01)
bonesSkullG1.add(skull2.group)

//Group 2 BonesSkull
const bonesSkullG2 = new THREE.Group()
bonesSkullG2.position.set(0,0,5)
thirdSegment.add(bonesSkullG2)

const bonesG2_1 = new Bones(2,0.04,2,Math.PI*0.5,0,-Math.PI*0.6,0.003)
bonesSkullG2.add(bonesG2_1.group)

const skull3 = new Skull(2.2,0,2.5,Math.PI,Math.PI*0.8,0,0.04)
circleRoomGroup.add(skull3.group)

//Group 3 BonesSkull
const bonesSkullG3 = new THREE.Group()
bonesSkullG3.position.set(0,0.05,-2)
fourthSegment.add(bonesSkullG3)

const bonesG3_1 = new Bones(2,0.04,4,Math.PI*0.5,0,-Math.PI*0.6,0.002)
bonesSkullG3.add(bonesG3_1.group)

const bonesG3_2 = new Bones(2,0.04,1,Math.PI*0.5,0,-Math.PI*0.6,0.002)
bonesSkullG3.add(bonesG3_2.group)

const bonesG3_3 = new Bones(2,0.04,-2,Math.PI*0.5,0,-Math.PI*0.6,0.002)
bonesSkullG3.add(bonesG3_3.group)

const bonesG3_4 = new Bones(-2,0.04,4,Math.PI*0.5,0,-Math.PI*0.6,0.002)
bonesSkullG3.add(bonesG3_4.group)

const bonesG3_5 = new Bones(-2,0.04,1,Math.PI*0.5,0,-Math.PI*0.6,0.002)
bonesSkullG3.add(bonesG3_5.group)

const bonesG3_6 = new Bones(-2,0.04,-2,Math.PI*0.5,0,-Math.PI*0.6,0.002)
bonesSkullG3.add(bonesG3_6.group)

const skull4 = new Skull(0.8,0,-13.8,Math.PI,Math.PI*0.2,0,0.01)
fourthSegment.add(skull4.group)

//Ladders
const ladderEntry = new Lader(0.1,0,4.7,Math.PI*0.5,0,0)
firstSegment.add(ladderEntry.group)

const ladderExit = new Lader(8.5,0,9.1,Math.PI*0.5,-Math.PI*0.5, Math.PI*0.5)
fourthSegment.add(ladderExit.group)

//Pillars
const pillar0 = new Pillars(1,1,-12,1)
secondSegment.add(pillar0.group)

const pillar1 = new Pillars(1,1,-4,-1)
secondSegment.add(pillar1.group)

const pillar2 = new Pillars(1,1,-4,1)
secondSegment.add(pillar2.group)

const pillar3 = new Pillars(1,1,4,-1)
secondSegment.add(pillar3.group)

const pillar4 = new Pillars(1,1,4,1)
secondSegment.add(pillar4.group)

const pillar5 = new Pillars(1,1,14,-1)
secondSegment.add(pillar5.group)

const pillar6 = new Pillars(2.2,2.2,1,4)
circleRoomGroup.add(pillar6.group)

const pillar7 = new Pillars(2.2,2.2,-1,4)
circleRoomGroup.add(pillar7.group)

const pillar8 = new Pillars(2.2,2.2,1,-4)
circleRoomGroup.add(pillar8.group)

const pillar9 = new Pillars(2.2,2.2,-1,-4)
circleRoomGroup.add(pillar9.group)

const pillar10 = new Pillars(1,1,1,-1)
thirdSegment.add(pillar10.group)

const pillar11 = new Pillars(1,1,1,-3)
thirdSegment.add(pillar11.group)

const pillar12 = new Pillars(1,1,11,-1)
thirdSegment.add(pillar12.group)

const pillar13 = new Pillars(1,1,1,-8)
fourthSegment.add(pillar13.group)

const pillar14 = new Pillars(1,1,-1,-8)
fourthSegment.add(pillar14.group)

const pillar15 = new Pillars(1,1,-1,4)
fourthSegment.add(pillar15.group)

const pillar16 = new Pillars(1,1,1,4)
fourthSegment.add(pillar16.group)

const pillar17 = new Pillars(1,1,1,8)
fourthSegment.add(pillar17.group)

//Add floor
const wetFloor1 = new WetFloors(12, 12,3,0)
firstSegment.add(wetFloor1.group)

const wetFloor2 = new WetFloors(20,24,8,-5)
secondSegment.add(wetFloor2.group)

const wetFloor3 = new WetFloors(10,18,6,0)
thirdSegment.add(wetFloor3.group)

const wetFloor4 = new WetFloors(18,14,3,3)
fourthSegment.add(wetFloor4.group)

//Add ceiling
const ceiling1 = new Ceilings(12, 12,3,0)
firstSegment.add(ceiling1.group)

const ceiling2 = new Ceilings(20,24,8,-5)
secondSegment.add(ceiling2.group)

const ceiling3 = new Ceilings(10,18,6,0)
thirdSegment.add(ceiling3.group)

const ceiling4 = new Ceilings(18,14,3,3)
fourthSegment.add(ceiling4.group)

//Add plane
const bunkerWall = new Planes(28,-35.5)
scene.add(bunkerWall.group)

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 30)
camera.position.set(0,1.5,-2)
camera.rotation.y = Math.PI
scene.add(camera)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, .1)
scene.add(ambientLight)

const flashLight = new FlashLight(0, 0, 0)
scene.add(flashLight.group)

/**
 * Sounds
 */
const walk = new Audio(walkSound)
walk.volume = 0.6

const sound = new Audio(ambientSound)
sound.volume = 1

const music = new Audio(ambientMusic)
music.volume = 0.2

const paper = new Audio(paperSound)
paper.volume = 0.5

//Mute button
const muteButton = document.createElement('div')
muteButton.classList.add('mute-button')
const volumeImg = new Image()
volumeImg.src = SoundOn
volumeImg.setAttribute('alt', 'sound on')
muteButton.appendChild(volumeImg)

/**
 * Raycaster
 */
const raycaster = new THREE.Raycaster()

/**
 * Buttons
 */
// Block the scroll
let canScroll = false
// Block open popups
let canOpen = false
// Block the camera rotation
let popupIsClose = false

// Start buton
const startButton = document.querySelector(".js-start-button")
const landingPage = document.querySelector(".landing")
const popups = document.querySelectorAll('.js-popup-information')

startButton.addEventListener('click', () => {
    // Start
    landingPage.style.opacity = 0
    landingPage.classList.add('is-visible')

    // Play sound
    sound.play()
    sound.loop = true

    music.play()
    music.loop = true

    paper.currentTime = 0
    paper.play()

    // Open welcome popup
    popups[0].classList.remove('is-visible')

    // Active the scroll
    canScroll = true

    // Active open popups
    canOpen = true

    document.querySelector('body').appendChild(muteButton)
})

// Mute sound
muteButton.addEventListener('click', () => {
    if(music.volume === 0){
        walk.volume = 0.6
        sound.volume = 1
        music.volume = 0.2
        paper.volume = 0.5

        volumeImg.src = SoundOn
        volumeImg.setAttribute('alt', 'sound on')
    } else{
        walk.volume = 0
        sound.volume = 0
        music.volume = 0
        paper.volume = 0

        volumeImg.src = SoundOff
        volumeImg.setAttribute('alt', 'sound off')
    }
})

// Open cultural popup
let hoverGraffiti = false
let hoverBunkerWall = false
let hoverBones = false

document.addEventListener('click', () =>{
    if(canOpen){
        if(hoverGraffiti){
            popups[3].classList.remove('is-visible')

            paper.currentTime = 0
            paper.play()

            popupIsClose = false
        }

        if(hoverBunkerWall){
            popups[2].classList.remove('is-visible')

            paper.currentTime = 0
            paper.play()

            popupIsClose = false
        }

        if(hoverBones){
            popups[1].classList.remove('is-visible')

            paper.currentTime = 0
            paper.play()

            popupIsClose = false
        }
    }
})

// Close cultural popup
window.addEventListener('keydown', (_event) => {
    popups.forEach(_popup => {
        _popup.classList.add('is-visible')

        paper.currentTime = 0
        paper.play()
    })
    popupIsClose = true
})

/**
 * Scroll
 **/
const tl = new TimelineLite()
tl.pause()

tl.to(camera.position, 2, {z: - 8, ease: 'Power3.easeInOut'})
.to(camera.position, 2, {z: - 11, ease: 'Power3.easeInOut'})
.to(camera.position, 2, {x: 10, ease: 'Power3.easeInOut'})
.to(camera.position, 2, {x: 28, ease: 'Power3.easeInOut'})
.to(camera.position, 2, {z: - 20, ease: 'Power3.easeInOut'})
.to(camera.position, 2, {z: - 33, ease: 'Power3.easeInOut'})
.to(camera.position, 2, {x: 40, ease: 'Power3.easeInOut'})
.to(camera.position, 2, {z: - 26, ease: 'Power3.easeInOut'})
.to(camera.position, 2, {z: - 11, ease: 'Power3.easeInOut'})
.to(camera.position, 2, {x: 46, ease: 'Power3.easeInOut'})

window.addEventListener('wheel', (_event) => {
    if(canScroll){
        // Accept the scroll
        setTimeout(function(){
            canScroll = true
        }, 2000)

        // If we scroll down
        if(_event.deltaY > 0){
            tl.play()
            walk.currentTime = 0
            walk.play()

            // Block the scroll
            canScroll = false

            // Block animation
            setTimeout(function() {
                tl.pause()
                walk.pause()
            }, 2000)
        }

        // If we scroll up
        if(_event.deltaY < 0){
            tl.reverse()
            walk.currentTime = 0
            walk.play()
            
            // Block the scroll
            canScroll = false

            // Block animation
            setTimeout(function() {
                tl.pause()
                walk.pause()
            }, 2000)
        }
    }
})

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
window.addEventListener('resize', () => {
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
    if(popupIsClose){
        const angle = cursor.x * Math.PI * 2
        camera.rotation.y = - angle * 2
    }

    //Update flashLight coord
    flashLight.group.position.set(camera.position.x, camera.position.y, camera.position.z)

    // Cursor raycasting
    // Graffiti
    if(Graffiti){
        const raycasterCursor = new THREE.Vector2(cursor.x * 2, - cursor.y * 2)
        raycaster.setFromCamera(raycasterCursor, camera)

        const graff1Intersects = raycaster.intersectObject(graffWall1.fourGroup, true)
        const graff2Intersects = raycaster.intersectObject(graffWall2.thirdGroup, true)
        const graff3Intersects = raycaster.intersectObject(graffWall3.secondGroup, true)
        const graff4Intersects = raycaster.intersectObject(graffWall4.firstGroup, true)
        if(graff1Intersects.length){
            hoverGraffiti = true
        } else if(graff2Intersects.length){
            hoverGraffiti = true
        } else if(graff3Intersects.length){
            hoverGraffiti = true
        } else if(graff4Intersects.length){
            hoverGraffiti = true
        } else{
            hoverGraffiti = false
        }
    }

    // Bunker wall
    if(bunkerWall){
        const raycasterCursor = new THREE.Vector2(cursor.x * 2, - cursor.y * 2)
        raycaster.setFromCamera(raycasterCursor, camera)

        const bunkerWallIntersects = raycaster.intersectObject(bunkerWall.group, true)
        if(bunkerWallIntersects.length){
            hoverBunkerWall = true
        } else{
            hoverBunkerWall = false
        }
    }
    
    // Bones
    if(bonesSkullG1){
        const raycasterCursor = new THREE.Vector2(cursor.x * 2, - cursor.y * 2)
        raycaster.setFromCamera(raycasterCursor, camera)

        const bones1Intersects = raycaster.intersectObject(bonesSkullG1, true)
        const bones2Intersects = raycaster.intersectObject(bonesSkullG2, true)
        const bones3Intersects = raycaster.intersectObject(bonesSkullG3, true)
        if(bones1Intersects.length){
            hoverBones = true
        } else if(bones2Intersects.length){
            hoverBones = true
        } else if(bones3Intersects.length){
            hoverBones = true
        } else{
            hoverBones = false
        }
    }

    // Render
    renderer.render(scene, camera)
}

loop()

window.addEventListener('load', () =>
{
    document.querySelector('.loading img').style.animation = 'none'
    document.querySelector('.loading h1').style.animation = 'loadOpacity 5s'

    document.querySelector('.loading h1').addEventListener('animationend', () =>
    {
        document.querySelector('.loading h1').style.opacity = '1'
        document.querySelector('.loading').style.animation = 'loadHome 1s'
    })

    window.setTimeout( () =>
    {
        document.querySelector('.loading').style.display = 'none'
    },6000)
})