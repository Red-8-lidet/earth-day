import ThreeGlobe from 'three-globe';
import * as THREE from 'three';

export function createEarth(scene) {
    const globe = new ThreeGlobe();

    // Set images individually
    globe.globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
    globe.bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');
    
    // Use the specific method for night view
    // Note: If this still errors, your library version is too old; we will use the material fallback
    try {
        globe.nightImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg');
    } catch (e) {
        console.warn("nightImageUrl method not found, using material fallback.");
    }

    globe.showAtmosphere(true);
    globe.atmosphereColor('#3a228a');
    globe.atmosphereAltitude(0.15);

    // Add to scene
    scene.add(globe);

    // Set the initial material properties for the "Day/Night" effect
    const globeMaterial = globe.globeMaterial();
    globeMaterial.color = new THREE.Color(0xffffff);
    globeMaterial.emissive = new THREE.Color(0x222222); 
    globeMaterial.emissiveIntensity = 0.1;

    return globe;
}