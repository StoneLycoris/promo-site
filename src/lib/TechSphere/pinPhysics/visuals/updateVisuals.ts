import * as THREE from 'three'
import type { SkillPin } from '@/types/skillPin'

import { updateStick } from '@/lib/TechSphere/pinPhysics/visuals/updateStick'
import { updateHead } from '@/lib/TechSphere/pinPhysics/visuals/updateHead'
import { updateLabel } from '@/lib/TechSphere/pinPhysics/visuals/updateLabel'

export function updateVisuals(
  pin: SkillPin,
  camera: THREE.Camera
) {
  updateStick(pin)
  updateHead(pin)
  updateLabel(pin, camera)
}