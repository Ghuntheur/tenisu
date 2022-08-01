<template>
  <div class="players-list-item-container">
    <section class="picture-container">
      <img :src="player.picture" />
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
  --picture-size: 34%;

  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: var(--color-light);
  padding-right: var(--spacing-l);
  box-shadow: 0 0 12px -4px var(--color-dark);
  cursor: pointer;

  @include mobile {
    padding: var(--spacing-l);
  }

  .picture-container {
    width: var(--picture-size);
    height: 150px;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;

    @include mobile {
      position: absolute;
      right: 0;
      bottom: 0;
      height: 200px;

      img {
        object-position: 0px top !important;
      }
    }

    img {
      height: 100%;
      width: 120%;
      object-fit: cover;
      object-position: -20px top;
    }
  }

  .data-container {
    width: calc(100% - var(--picture-size));

    @include mobile {
      width: 100%;
    }

    .player-name {
      margin-bottom: var(--spacing-s);
      font-family: var(--font-primary);
      font-weight: var(--font-weight-bold);
      color: var(--color-primary);
    }
  }
}
</style>
