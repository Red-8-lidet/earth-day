import * as THREE from 'three';

export function setupScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000005);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    document.body.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 4000);
    camera.position.set(0, 0, 400);

    // Object #1: The Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 6000; i++) {
        starVertices.push((Math.random() - 0.5) * 3000, (Math.random() - 0.5) * 3000, (Math.random() - 0.5) * 3000);
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.7 }));
    scene.add(stars);

    // Object #2: The Sun Mesh (to represent the light source)
    const sunMesh = new THREE.Mesh(
        new THREE.SphereGeometry(15, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0xffdd44 })
    );
    sunMesh.position.set(300, 100, 100);
    scene.add(sunMesh);

    // Lights
    const sunLight = new THREE.DirectionalLight(0xffffff, 3);
    sunLight.position.copy(sunMesh.position);
    scene.add(sunLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    return { scene, camera, renderer, sunLight, ambient };
}