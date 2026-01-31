import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { setupScene } from './scene.js';
import { createEarth } from './earth.js';
import { createExtraObjects } from './objects.js';
import { initInteraction } from './interaction.js';

const { scene, camera, renderer, sunLight, ambient } = setupScene();
const globe = createEarth(scene);
const { moon, satellite } = createExtraObjects(scene);

initInteraction(camera, scene, sunLight, ambient);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

let time = 0;
function animate() {
    requestAnimationFrame(animate);
    time += 0.01;

    // Earth Rotation
    globe.rotation.y += 0.001;

    // Moon Orbit (Object #4)
    moon.position.x = 200 * Math.cos(time * 0.5);
    moon.position.z = 200 * Math.sin(time * 0.5);

    // Satellite Orbit (Object #5)
    satellite.position.x = 120 * Math.cos(time * 2);
    satellite.position.y = 120 * Math.sin(time * 2);

    controls.update();
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});