import type { Skill } from '@/types/skills'
import * as THREE from 'three'

export type SkillSprite = THREE.Sprite & {
  userData: {
    skill: Skill
  }
}