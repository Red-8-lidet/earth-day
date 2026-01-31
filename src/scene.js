import * as THREE from 'three';

export function setupScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000005);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.set(0, 0, 400);

    // Light 1: The Sun (Directional)
    const sun = new THREE.DirectionalLight(0xffffff, 3);
    sun.position.set(5, 3, 5);
    scene.add(sun);

    // Light 2: Ambient (Soft space glow)
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    // Object #3: Starfield (Unique Object Requirement)
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7 });
    const starVertices = [];
    for (let i = 0; i < 6000; i++) {
        starVertices.push((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    return { scene, camera, renderer };
}