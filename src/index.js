import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import './scss/style.scss'

// import myModel from './models/scene.gltf';
// import myModel2 from './models/scene.glb';
import myModel3 from './models/donut.glb';
import './models/scene.bin'
import './images/Material.001_baseColor.png'
import './images/Material.001_metallicRoughness.png'
import './images/Material.001_normal.png'



const canvas = document.querySelector('#webgl')
const scene = new THREE.Scene();
const loader = new GLTFLoader();

let root;

loader.load(myModel3, function (glb) {

    // console.log(glb);

    root = glb;

    if (window.innerWidth < 744) {
        root.scene.scale.set(9, 9, 9)

    } else {
        root.scene.scale.set(15, 15, 15)

    }

    scene.add(root.scene);

}, function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}, function (error) {

    console.error(error);

});

const light = new THREE.DirectionalLight(0xFFFFFF, 1.2)
light.position.set(1, 12, 15)
scene.add(light)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 1.5, 2);
camera.lookAt(scene.position);
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})
renderer.setClearColor(0xABD5F4, 1)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true








function animate() {
    requestAnimationFrame(animate)


    if (root) {
        root.scene.rotation.y += 0.01;
    }

    renderer.render(scene, camera)

}

animate()