<template>
  <div class="drawer-container" :class="{ opened }">
    <Transition name="slide">
      <div v-if="opened" class="main-content">
        <slot name="close">
          <div class="close" @click="close">
            <img :src="closeImage" />
          </div>
        </slot>

        <div class="content-container">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import closeImage from '@/assets/close.png'

interface IProps {
  ref?: string
  duration?: number
}

interface IEmits {
  (e: 'onClose'): void
}

const props = withDefaults(defineProps<IProps>(), {
  ref: '',
  duration: 500
})

const emit = defineEmits<IEmits>()

const opened = ref(false)
const timeDuration = ref(`${props.duration}ms`)

const open = () => {
  opened.value = true
}

const close = () => {
  opened.value = false
  emit('onClose')
}

defineExpose({
  open,
  close
})
</script>

<style lang="scss" scoped>
.main-content {
  display: grid;
  grid-template-rows: auto 1fr;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99;

  &.slide-enter-active,
  &.slide-leave-active {
    transition: bottom v-bind(timeDuration) ease;
  }

  &.slide-enter-from,
  &.slide-leave-to {
    bottom: -100%;
  }

  .close {
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: var(--spacing-l) 0;

    img {
      width: var(--spacing-l);
      filter: invert(100%);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .content-container {
    padding: 0 var(--spacing-3xl);

    @include tablet {
      padding: 0;
    }
  }
}
</style>
