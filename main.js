import * as THREE from 'three';

// scene
const scene = new THREE.Scene();

// geometries
const geometries = {
  box: new THREE.BoxGeometry(1, 1, 1),
  capsule: new THREE.CapsuleGeometry(1, 1, 4, 8),
  circle: new THREE.CircleGeometry(1, 32),
  cylinder: new THREE.CylinderGeometry(1, 1, 1, 32),
  dodecahedron: new THREE.DodecahedronGeometry(1, 0),
  torus: new THREE.TorusGeometry(1, 0.4, 12, 48)
};

// materials
const materials = {
  box: new THREE.MeshBasicMaterial({ color: 0x5398c6 }),
  capsule: new THREE.MeshBasicMaterial({ color: 0xcf6648 }),
  circle: new THREE.MeshBasicMaterial({ color: 0x86d2f1 }),
  cylinder: new THREE.MeshBasicMaterial({ color: 0xf59e60 }),
  dodecahedron: new THREE.MeshBasicMaterial({ color: 0xff8e00 }),
  torus: new THREE.MeshBasicMaterial({ color: 0xe2ab8a })
};

// meshes
const meshes = {
  box: new THREE.Mesh(geometries.box, materials.box),
  capsule: new THREE.Mesh(geometries.capsule, materials.capsule),
  circle: new THREE.Mesh(geometries.circle, materials.circle),
  cylinder: new THREE.Mesh(geometries.cylinder, materials.cylinder),
  dodecahedron: new THREE.Mesh(geometries.dodecahedron, materials.dodecahedron),
  torus: new THREE.Mesh(geometries.torus, materials.torus)
};

// positions for each mesh
meshes.box.position.set(1.33, 0.83, 0.17);
meshes.capsule.position.set(0, 4.61, 2.77);
meshes.circle.position.set(0, 6.02, -6.31);
meshes.cylinder.position.set(-2.8, 1.42, 0);
meshes.dodecahedron.position.set(2.83, 2.41, 0);
meshes.torus.position.set(0, 3.00, -2.67);

// all meshes to the scene
scene.add(meshes.box);
scene.add(meshes.capsule);
scene.add(meshes.circle);
scene.add(meshes.cylinder);
scene.add(meshes.dodecahedron);
scene.add(meshes.torus);

// camera
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
camera.position.set(-9.83, 3.20, 2.91);
camera.lookAt(0, 0, 0);  // Pointing towards the origin (center of the scene)

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// rotating camera functionality
let angle = 0;
function animate() {
  requestAnimationFrame(animate);

  // slowly rotate the camera around the y-axis
  angle += 0.002; // adjust this value for faster or slower rotation
  camera.position.x = 15 * Math.sin(angle);
  camera.position.z = 15 * Math.cos(angle);
  camera.lookAt(0, 0, 0);

  
  renderer.render(scene, camera);
}

animate();
