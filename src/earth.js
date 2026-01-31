import ThreeGlobe from 'three-globe';
import * as THREE from 'three';

export function createEarth(scene) {
    const globe = new ThreeGlobe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .nightImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .showAtmosphere(true)
        .atmosphereColor('#3a228a')
        .atmosphereAltitude(0.15);

    scene.add(globe);
    return globe;
}