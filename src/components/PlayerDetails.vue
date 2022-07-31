<template>
  <div class="player-details-container">
    <img :src="player.picture" :alt="player.lastname" class="player-picture" />

    <div class="header">
      <div class="player-name">
        <Title tag="h2" class="firstname" color="light">{{
          player.firstname
        }}</Title>

        <Title tag="h1" class="lastname" color="primary">{{
          player.lastname
        }}</Title>
      </div>

      <div class="country-container">
        <img :src="player.country.picture" :alt="player.country.code" />
        <Title tag="h3" class="code">{{ player.country.code }}</Title>
      </div>
    </div>

    <div class="stats">
      <div class="values-container">
        <player-stats-resume :player="player" />

        <stats-row>
          <labelled-text
            label="birthday"
            :value="birthday.format('DD / MM / YYYY')"
          />
          <labelled-text label="age" :value="age" />
        </stats-row>

        <stats-row>
          <labelled-text label="weight" :value="`${playerData.weight} kg`" />
          <labelled-text label="height" :value="`${playerData.height} cm`" />
        </stats-row>
      </div>

      <player-career :titles="playerData.titles" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

import LabelledText from './LabelledText.vue'
import PlayerStatsResume from './PlayerStatsResume.vue'
import PlayerCareer from './PlayerCareer.vue'
import StatsRow from './StatsRow.vue'
import Title from './Title.vue'

import { IPlayer, IPlayerData } from '@/models'

dayjs.extend(customParseFormat)

interface IProps {
  player: IPlayer
}

const props = defineProps<IProps>()

const playerData = ref<IPlayerData>(props.player.data)

const birthday = ref(dayjs(playerData.value.birthday, 'DD-MM-YYYY'))
const age = ref(dayjs().diff(birthday.value, 'y'))
</script>

<style lang="scss" scoped>
.player-details-container {
  position: relative;
  height: 100%;
  background: var(--color-light);
  padding: var(--spacing-xxl);
  padding-left: calc(var(--spacing-xxl) * 3);

  .player-picture {
    position: absolute;
    height: 90%;
    left: 0;
    bottom: 0;
    transform: translateX(-30%);
  }

  .header {
    display: flex;
    justify-content: space-between;

    .player-name {
      display: flex;
      flex-direction: column;
      .firstname {
        text-shadow: 2px 2px 0 var(--color-primary),
          -2px -2px 0 var(--color-primary), 2px -2px 0 var(--color-primary),
          -2px 2px 0 var(--color-primary), 2px 2px 0 var(--color-primary);

        // not working well
        // -webkit-text-stroke: 4px var(--color-primary);
      }
    }

    .country-container {
      width: 160px;

      img {
        width: 100%;
        box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.15);
      }

      .code {
        margin-top: var(--spacing-m);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--spacing-m);
      }
    }
  }
}
</style>
