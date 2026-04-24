import * as THREE from 'three'
import type { Skill } from '@/types/skill'

export function createSpriteLabel(skill: Skill): THREE.Sprite {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')!

  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  const width = 380
  const height = 110

  canvas.width = width * dpr
  canvas.height = height * dpr

  context.scale(dpr, dpr)

  const r = 18

  context.fillStyle = 'rgba(18, 20, 28, 0.58)'
  roundRect(context, 0, 0, width, height, r)
  context.fill()

  context.strokeStyle = 'rgba(255,255,255,0.05)'
  context.lineWidth = 1
  roundRect(context, 0.5, 0.5, width - 1, height - 1, r)
  context.stroke()

  context.fillStyle = skill.color ?? 'rgba(170, 59, 255, 0.7)'
  context.beginPath()
  context.arc(26, height / 2, 6, 0, Math.PI * 2)
  context.fill()

  context.strokeStyle = skill.color ?? 'rgba(170, 59, 255, 0.25)'
  context.lineWidth = 2
  context.beginPath()
  context.arc(26, height / 2, 10, 0, Math.PI * 2)
  context.stroke()

  context.fillStyle = 'rgba(255,255,255,0.9)'
  context.font = '600 40px system-ui'
  context.textAlign = 'left'
  context.textBaseline = 'middle'
  context.fillText(skill.name, 52, height / 2)

  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.generateMipmaps = false

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    opacity: 0.95,
  })

  const sprite = new THREE.Sprite(material)
  sprite.scale.set(0.42, 0.12, 1)

  return sprite
}

function roundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  context.beginPath()
  context.moveTo(x + r, y)
  context.lineTo(x + w - r, y)
  context.quadraticCurveTo(x + w, y, x + w, y + r)
  context.lineTo(x + w, y + h - r)
  context.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  context.lineTo(x + r, y + h)
  context.quadraticCurveTo(x, y + h, x, y + h - r)
  context.lineTo(x, y + r)
  context.quadraticCurveTo(x, y, x + r, y)
  context.closePath()
}