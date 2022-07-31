<template>
  <div class="labelled-text-container">
    <h5 class="label">{{ label }}</h5>
    <p class="value">{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label: string
  value: string | number
}

defineProps<IProps>()
</script>

<style lang="scss" scoped>
.labelled-text-container {
  display: flex;
  flex-direction: column;

  .label {
    font-family: var(--font-secondary);
    font-weight: 700;
    color: var(--color-dark);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: var(--spacing-s);
    margin-top: var(--spacing-l);
  }

  .value {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
    color: var(--color-primary);
    letter-spacing: 1px;
  }
}
</style>
