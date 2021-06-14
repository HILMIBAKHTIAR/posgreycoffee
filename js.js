// B
let width = window.innerWidth;
let height = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
camera.position.z = 5;
/* Geometri Material */
const geo = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const mesh = new THREE.Mesh(geo, material);
scene.add(mesh);
/* Akhir Geometri Material */
/* Lanjutan */
window.addEventListener("resize", function () {
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
function update() {
  mesh.rotation.y += 0.01;
  mesh.rotation.x += 0.01;
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}
update();
