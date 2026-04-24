<template>
  <a
    :href="contact.href"
    target="_blank"
    rel="noopener noreferrer"
    class="contact-card"
    @mousemove="handleMouseMove"
  >
    <div class="contact-card__inner">
      <div class="contact-card__top">
        <div class="contact-card__left">
        <img
            :src="contact.icon"
            :alt="contact.label"
            class="contact-card__icon"
        />
        <span class="contact-card__label">
          {{ contact.label }}
        </span>

        </div>

        <button
          class="contact-card__copy"
          @click.stop.prevent="handleCopy"
        >
          <span v-if="!copied">Copy</span>
          <span v-else class="contact-card__copied">Copied!</span>
        </button>
      </div>

      <span class="contact-card__value">
        {{ contact.value }}
      </span>
    </div>
  </a>
</template>

<script setup lang="ts">
import { useCopyToClipboard } from '@/composables/useCopyToClipboard'
import type { Contact } from '@/types/contact'

const props = defineProps<{
  contact: Contact
}>()

const { copied, copy } = useCopyToClipboard()

function handleCopy() {
  copy(props.contact.value)
}

function handleMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  target.style.setProperty('--x', `${x}px`)
  target.style.setProperty('--y', `${y}px`)
}
</script>

<style scoped lang="scss">
.contact-card {
  display: block;
  text-decoration: none;

  border-radius: 18px;

  background: rgba(18, 20, 28, 0.55);
  backdrop-filter: blur(14px);

  border: 1px solid rgba(255, 255, 255, 0.06);

  padding: 18px 20px;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;

    background: radial-gradient(
      400px circle at var(--x, 50%) var(--y, 50%),
      rgba(170, 59, 255, 0.15),
      transparent 40%
    );

    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(255, 255, 255, 0.12);

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

    &::before {
      opacity: 1;
    }

    .contact-card__copy {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__left {
  display: flex;
  align-items: center;
  gap: 8px;
}

&__icon {
  width: 18px;
  height: 18px;
  opacity: 0.7;

  transition: opacity 0.2s ease, transform 0.2s ease;
}

&:hover &__icon {
  opacity: 1;
  transform: translateY(-1px);
}

  &__label {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  &__value {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
  }

  &__copy {
    font-size: 12px;
    padding: 4px 10px;

    border-radius: 999px;

    border: 1px solid rgba(255, 255, 255, 0.08);

    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.6);

    cursor: pointer;

    opacity: 0;
    transform: translateY(4px);

    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: rgba(255, 255, 255, 0.9);
    }
  }

  &__copied {
    color: #42ffb3;
  }
}
</style>