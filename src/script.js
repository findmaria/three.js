import * as THREE from 'three'; 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
//canvas
const canvas = document.getElementById('webgl');

//Axes Helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

//altura, largura, profundidade do cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);

//adicionar cor ao obj
const material = new THREE.MeshBasicMaterial({ color: 'pink'});
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(0.5, 0.5, 0.5); 
// mesh.scale.y = 0.25;
// mesh.rotation.x = 0.25* Math.PI
// mesh.rotation.y = 0.25* Math.PI
// adicionando o objeto na cena
scene.add(mesh);

//cursor
const cursor = {x: 0, y: 0}
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - 0.05;
    cursor.y = e.clientY / sizes.height - 0.05;
    console.log(cursor.x, cursor.y);
})

//camera para mostrar a cena
const sizes = {width: 800, height: 600};
//graus (75 por padrão, mas pode ser mudado)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera); 

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//renderizador
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

const clock  = new THREE.Clock();

const tick = () => {
    //clock
    const elapsedTime = clock.getElapsedTime();
    //update objects
    // mesh.position.y = Math.sin(elapsedTime);
    // mesh.position.x = Math.cos(elapsedTime);
    // mesh.rotation.y = elapsedTime * Math.PI * 2;

    //update controls
    controls.update();
    //camera
    // camera.position.x = cursor.x * 5;
    // camera.position.y = cursor.y * 5;
    // camera.lookAt(mesh.position);

    //render
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();
