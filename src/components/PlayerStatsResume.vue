<template>
  <stats-row class="player-stats-resume">
    <labelled-text label="Rank" :value="`#${playerData.rank}`" />
    <labelled-text label="Points" :value="separateNumbers(playerData.points)" />
    <labelled-text
      label="Country"
      :value="COUNTRY_NAMES[player.country.code]"
    />
  </stats-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import LabelledText from './LabelledText.vue'

import { IPlayer, IPlayerData } from '@/models'
import { separateNumbers } from '@/helpers'
import { COUNTRY_NAMES } from '@/constants'
import StatsRow from './StatsRow.vue'

interface IProps {
  player: IPlayer
}

const props = defineProps<IProps>()

const playerData = ref<IPlayerData>(props.player.data)
</script>
