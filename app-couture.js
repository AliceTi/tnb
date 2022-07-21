const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set(1, 0, 0)
controls.update()

const geometry = new THREE.SphereGeometry(50, 32, 16)
const textureLoader = new THREE.TextureLoader()
const texture = textureLoader.load('https://raw.githubusercontent.com/AliceTi/tnb/main/assets/img/etage02/etage02_atelier_couture.JPG')
const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide
})
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)



function animate() {
	requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate()