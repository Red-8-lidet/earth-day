import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { setupScene } from './scene.js';
import { createEarth } from './earth.js';
import { initInteraction } from './Interaction.js';

const { scene, camera, renderer } = setupScene();
const globe = createEarth(scene);
initInteraction(camera, scene);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.001; // Earth rotation
    controls.update();
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});