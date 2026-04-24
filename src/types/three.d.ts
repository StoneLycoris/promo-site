import type { Skill } from '@/types/skill'
import * as THREE from 'three'

export type SkillSprite = THREE.Sprite & {
  userData: {
    skill: Skill
  }
}