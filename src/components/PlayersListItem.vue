<template>
  <div class="players-list-item-container">
    <section class="picture-container">
      <!-- <img :src="player.picture" /> -->
    </section>

    <section class="data-container">
      <h2 class="player-name">{{ playerName }}</h2>

      <div class="stats-container">
        <labelled-text label="Rank" :value="`#${playerData.rank}`" />
        <labelled-text
          label="Points"
          :value="separateNumbers(playerData.points)"
        />
        <labelled-text
          label="Country"
          :value="COUNTRY_NAMES[player.country.code]"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import LabelledText from './LabelledText.vue'

import { IPlayer, IPlayerData } from '@/models'
import { COUNTRY_NAMES } from '@/constants'

import { separateNumbers } from '@/helpers'

interface IProps {
  player: IPlayer
}

const props = defineProps<IProps>()

const playerData = ref<IPlayerData>(props.player.data)
const playerName = computed(
  () => `${props.player.firstname} ${props.player.lastname}`
)
</script>

<style lang="scss" scoped>
.players-list-item-container {
  display: flex;
  align-items: center;
  background: var(--color-light);
  padding: var(--spacing-l);
  box-shadow: 0 0 12px -4px var(--color-dark);
  cursor: pointer;

  + .players-list-item-container {
    margin-top: var(--spacing-l);
  }

  .picture-container {
    // height: spacing(30);
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
      font-size: var(--font-size-h4);
    }

    .stats-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
