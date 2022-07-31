<template>
  <div class="main-page">
    <section class="main-content">
      <search-input class="input" v-model="searchValue" />

      <players-list
        :data="filteredPlayers"
        @on-player-click="handlePlayerClick"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import SearchInput from '@/components/SearchInput.vue'
import PlayersList from '@/components/PlayersList.vue'

import { IPlayer } from '@/models'

import { players } from '@/mocks/data.json'
import { computed } from '@vue/reactivity'

const searchValue = ref('')
const allPlayers = ref<IPlayer[]>(players as IPlayer[])

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
  console.log(player)
}
</script>

<style lang="scss" scoped>
.main-page {
  min-height: 100%;
  background: linear-gradient(
    0deg,
    var(--color-secondary) 0%,
    var(--color-primary) 100%
  );
  background-attachment: fixed;

  .main-content {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-xxl);
    width: 40%;

    > .input {
      margin-bottom: var(--spacing-l);
    }
  }
}
</style>
