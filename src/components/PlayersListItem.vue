<template>
  <div class="players-list-item-container">
    <section class="picture-container">
      <!-- <img :src="player.picture" /> -->
    </section>

    <section class="data-container">
      <Title tag="h4" class="player-name">{{ playerName }}</Title>

      <player-stats-resume :player="player" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import Title from './Title.vue'

import { IPlayer } from '@/models'

import PlayerStatsResume from './PlayerStatsResume.vue'

interface IProps {
  player: IPlayer
}

const props = defineProps<IProps>()

const playerName = computed(
  () => `${props.player.firstname} ${props.player.lastname}`
)
</script>

<style lang="scss" scoped>
.players-list-item-container {
  display: flex;
  align-items: center;
  background: var(--color-light);
  padding: var(--spacing-l) var(--spacing-xl) var(--spacing-l) 0;
  box-shadow: 0 0 12px -4px var(--color-dark);
  cursor: pointer;

  .picture-container {
    width: 25%;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-position: bottom;
    }
  }

  .data-container {
    width: 100%;

    .player-name {
      margin-bottom: var(--spacing-s);
      font-family: var(--font-primary);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
    }
  }
}
</style>
