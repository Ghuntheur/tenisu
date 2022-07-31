<template>
  <component :is="tag" class="title-container"><slot /></component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
  tag?: HTMLHeadingElement['tagName']
  font?: 'primary' | 'secondary'
  color?: 'primary' | 'secondary' | 'light' | 'dark'
}

const props = withDefaults(defineProps<IProps>(), {
  tag: 'h6',
  font: 'primary'
})

const fontFamily = computed(() => `var(--font-${props.font})`)
const color = computed(() => `var(--color-${props.color}, var(--color-dark))`)
</script>

<style lang="scss" scoped>
.title-container {
  font-weight: var(--font-weight-bold);
  font-family: v-bind(fontFamily);
  color: v-bind(color);

  @at-root {
    h1#{&} {
      font-size: var(--font-size-h1);
    }

    h2#{&} {
      font-size: var(--font-size-h2);
    }

    h3#{&} {
      font-size: var(--font-size-h3);
    }

    h4#{&} {
      font-size: var(--font-size-h4);
    }

    h5#{&} {
      font-size: var(--font-size-h5);
    }

    h6#{&} {
      font-size: var(--font-size-h6);
    }
  }
}
</style>
