<template>
  <div class="player-career-container">
    <labelled-text label="career titles">
      <div
        class="year-titles"
        v-for="[year, yearTitles] in Object.entries(titles).sort(
          (a, b) => +b[0] - +a[0]
        )"
        :key="year"
      >
        <Title color="primary" font="secondary" class="year">
          {{ year }} - <span>{{ yearTitles.length }}</span>
        </Title>

        <p v-for="title in yearTitles" class="title">{{ title }}</p>
      </div>
    </labelled-text>
  </div>
</template>

<script setup lang="ts">
import LabelledText from './LabelledText.vue'

import { PlayerTitles } from '@/models'
import Title from './Title.vue'

interface IProps {
  titles: PlayerTitles
}

defineProps<IProps>()
</script>

<style lang="scss" scoped>
.player-career-container {
  .year-titles {
    .year {
      margin-bottom: var(--spacing-s);
      span {
        font-weight: var(--font-weight-normal);
      }
    }

    .title {
      color: var(--color-primary);
    }

    + .year-titles {
      margin-top: var(--spacing-m);
    }
  }
}
</style>
