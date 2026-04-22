import * as THREE from 'three'
import type { SkillPin } from '@/types/skillPin'

import { updateHover } from '@/lib/TechSphere/pinPhysics/updateHover'
import { updateVisibility } from '@/lib/TechSphere/pinPhysics/updateVisibility'
import { updateTransform } from '@/lib/TechSphere/pinPhysics/updateTransform'
import { updateVisuals } from '@/lib/TechSphere/pinPhysics/visuals/updateVisuals'

export function updatePinPhysics(
  pin: SkillPin,
  camera: THREE.Camera,
  time: number
) {
  updateHover(pin)
  updateVisibility(pin, camera)
  updateTransform(pin, time)
  updateVisuals(pin, camera)
}