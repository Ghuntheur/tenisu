<template>
  <div class="stats-row-container">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.stats-row-container {
  display: grid;
  grid-gap: var(--spacing-l);
  grid-template-columns: repeat(3, 1fr);

  + .stats-row-container {
    margin-top: var(--spacing-l);
  }

  @include tablet {
    margin-top: var(--spacing-s);
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: var(--spacing-s) !important;
  }
}
</style>
