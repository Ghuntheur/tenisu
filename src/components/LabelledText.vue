<template>
  <div class="labelled-text-container">
    <Title tag="h6" class="label" font="secondary">{{ label }}</Title>

    <slot>
      <p v-if="value" class="value">{{ value }}</p>
    </slot>
  </div>
</template>

<script setup lang="ts">
import Title from './Title.vue'

interface IProps {
  label: string
  value?: string | number
}

defineProps<IProps>()
</script>

<style lang="scss" scoped>
.labelled-text-container {
  display: flex;
  flex-direction: column;

  .label {
    color: var(--color-dark);
    text-transform: uppercase;
    margin-bottom: var(--spacing-s);
    margin-top: var(--spacing-l);
    letter-spacing: 2px;

    @include mobile {
      margin-top: var(--spacing-m);
    }
  }

  .value {
    font-family: var(--font-primary);
    color: var(--color-primary);
    font-weight: var(--font-weight-bold);
    letter-spacing: 1px;
  }
}
</style>
