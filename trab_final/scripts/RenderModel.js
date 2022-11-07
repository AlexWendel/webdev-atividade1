let scene, camera, renderer;

THREE.Cache.enabled = true;


function getWidth(){
  if(window.innerWidth > 768){
    return window.innerWidth/2
  }
  return window.innerWidth * 0.9
}

window.addEventListener('resize', function(){
  renderer.setSize(getWidth(), window.innerHeight/ 2);
})

function init() {

  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
  renderer.setClearColor( 0x000000, 0 );
  scene.background = new THREE.Color();

  camera = new THREE.PerspectiveCamera(50, 1.8813131313131313, 1, 5000);

  camera.position.x = 3;
  camera.position.y = 3;
  camera.position.z = 5;

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 4;
  controls.maxDistance = 5;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.5;
  controls.target.set(0,0,0);

  hlight = new THREE.AmbientLight (0x404040, 7);
  hlight.castShadow = true;
  scene.add(hlight);

  renderer.setSize(getWidth(), window.innerHeight/ 2);
  document.getElementById("render3d").appendChild(renderer.domElement);

  let loader = new THREE.GLTFLoader();
  loader.load('/trab_final/3d/scene.gltf', function(gltf){
    urna = gltf.scene.children[0];
    urna.scale.set(10,10,10);
    urna.position.set(0,0,0);
  //   urna.rotation.set(-90/180 * Math.PI, 0, 0);
    
    scene.add(gltf.scene);
    animate();
  });
}

function animate() {
  renderer.render(scene,camera);
  controls.update();
  requestAnimationFrame(animate);
}
init();