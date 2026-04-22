import * as THREE from 'three'

export function createGlobe() {
  return new THREE.Mesh(
    new THREE.SphereGeometry(1, 64, 64),
    new THREE.MeshStandardMaterial({
      color: '#434374',
      roughness: 0.85,
      metalness: 0.05,
      emissive: 0x000000,
    })
  )
}