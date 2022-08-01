<template>
  <div class="main-page">
    <main>
      <section class="main-content">
        <search-input class="input" v-model="searchValue" />

        <players-list
          :data="filteredPlayers"
          @on-player-click="handlePlayerClick"
        />
      </section>
    </main>

    <drawer ref="drawer" @on-close="handleClose">
      <player-details v-if="selectedPlayer" :player="selectedPlayer" />
    </drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import SearchInput from '@/components/SearchInput.vue'
import PlayersList from '@/components/PlayersList.vue'
import Drawer from '@/components/Drawer.vue'
import PlayerDetails from '@/components/PlayerDetails.vue'

import { IPlayer } from '@/models'

import { players } from '@/mocks/data.json'

const searchValue = ref('')
const allPlayers = ref<IPlayer[]>(players as IPlayer[])
const selectedPlayer = ref<IPlayer | null>()
const drawer = ref<InstanceType<typeof Drawer> | null>(null)

const filteredPlayers = computed(() =>
  searchValue.value
    ? allPlayers.value.filter(
        (item) =>
          item.firstname
            .toLowerCase()
            .includes(searchValue.value.toLowerCase()) ||
          item.lastname.toLowerCase().includes(searchValue.value.toLowerCase())
      )
    : allPlayers.value
)

const handlePlayerClick = (player: IPlayer) => {
  selectedPlayer.value = player
  drawer.value?.open()
}

const handleClose = () => {
  selectedPlayer.value = null
}
</script>

<style lang="scss" scoped>
.main-page {
  min-height: 100vh;
  background: linear-gradient(
    0deg,
    var(--color-secondary) 0%,
    var(--color-primary) 100%
  );
  background-attachment: fixed;
  z-index: 2;

  &::after {
    content: '';
    background-image: url('@/assets/ball-and-shadows.png');
    position: fixed;
    bottom: -4px;
    right: -4px;
    height: 46vw;
    width: 46vw;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;

    @include tablet {
      height: 60vh;
      width: 60vh;
    }
  }

  main {
    position: relative;
    .main-content {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: var(--spacing-xxl) var(--spacing-3xl);
      width: 44%;
      min-width: 700px;
      z-index: 2;

      @include tablet {
        width: 100%;
        min-width: initial;
        padding: var(--spacing-l);
      }

      @include mobile {
        padding: var(--spacing-l) var(--spacing-s);
      }

      > .input {
        margin-bottom: var(--spacing-xl);
      }
    }
  }
}
</style>
