import * as THREE from 'three'

export function createLights(scene: THREE.Scene) {
  const ambient = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambient)

  const directional = new THREE.DirectionalLight(0xffffff, 0.9)
  directional.position.set(4, 3, 5)
  scene.add(directional)
}