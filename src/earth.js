import ThreeGlobe from 'three-globe';
import * as THREE from 'three';

export function createEarth(scene) {
    const globe = new ThreeGlobe();

    // Set images individually to avoid chaining errors
    globe.globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
    globe.bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');
    
    // If nightImageUrl fails, we use the material's emissive property for the "Night" look
    try {
        globe.nightImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg');
    } catch (e) {
        console.warn("nightImageUrl not supported in this build, using fallback.");
    }

    globe.showAtmosphere(true);
    globe.atmosphereColor('#3a228a');
    globe.atmosphereAltitude(0.15);

    // This ensures the dark side of the earth looks "Night-like"
    const globeMaterial = globe.globeMaterial();
    globeMaterial.color = new THREE.Color(0xffffff);
    globeMaterial.emissive = new THREE.Color(0x222222); // Slight glow for night side
    globeMaterial.emissiveIntensity = 0.1;

    scene.add(globe);
    return globe;
}