import * as THREE from 'three';

export function createExtraObjects(scene) {
    // Object #4: The Moon
    const moon = new THREE.Mesh(
        new THREE.SphereGeometry(6, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x888888 })
    );
    scene.add(moon);

    // Object #5: A Satellite (Box representation)
    const satellite = new THREE.Mesh(
        new THREE.BoxGeometry(2, 2, 4),
        new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    );
    scene.add(satellite);

    return { moon, satellite };
}