<template>
  <div class="players-list-container">
    <players-list-item
      v-for="player in data"
      :key="player.id"
      :player="player"
      @click="handleClick(player)"
    />
  </div>
</template>

<script setup lang="ts">
import PlayersListItem from './PlayersListItem.vue'

import { IPlayer } from '@/models'

interface IProps {
  data: IPlayer[]
}

interface IEmits {
  (e: 'onPlayerClick', player: IPlayer): void
}

defineProps<IProps>()
const emit = defineEmits<IEmits>()

const handleClick = (player: IPlayer) => {
  emit('onPlayerClick', player)
}
</script>

<style lang="scss" scoped>
.players-list-container {
}
</style>
