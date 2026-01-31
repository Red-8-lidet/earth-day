import * as THREE from 'three';

export function initInteraction(camera, scene) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
        // Calculate mouse position in normalized device coordinates
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        // Check for intersections with the globe
        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
            console.log("Earth Clicked!", intersects[0].point);
            // You can add a popup or UI change here
            alert("Location Selected!");
        }
    });
}