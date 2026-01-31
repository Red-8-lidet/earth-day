import * as THREE from 'three';

export function initInteraction(camera, scene, sunLight, ambient) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Button Logic
    document.getElementById('dayBtn').addEventListener('click', () => {
        sunLight.intensity = 3;
        ambient.intensity = 0.3;
    });

    document.getElementById('nightBtn').addEventListener('click', () => {
        sunLight.intensity = 0.05;
        ambient.intensity = 0.01;
    });

    // Raycasting
    window.addEventListener('click', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        if (intersects.length > 0) { console.log("Intersected:", intersects[0].object); }
    });
}