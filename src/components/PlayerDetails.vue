<template>
  <div class="player-details-container">
    <div
      class="picture-container"
      :class="player.shortname.replace(/\./g, '').toLowerCase()"
    >
      <img
        :src="player.picture"
        :alt="player.lastname"
        class="player-picture"
      />
    </div>

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
  height: 90%;
  background: var(--color-light);
  padding: var(--spacing-xxl);
  padding-left: calc(var(--spacing-3xl) * 2);

  @include tablet {
    padding: var(--spacing-l);
    overflow-y: auto;
  }

  .picture-container {
    position: absolute;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 2;
    transform: translateX(-27%);

    &.vwil {
      transform: translateX(-47%);
    }

    @include tablet {
      height: 68%;
      position: fixed;
      left: 60%;
      transform: translateX(0);
      max-width: 280px;
    }

    @include mobile {
      display: none;
    }

    img {
      height: 100%;
      filter: drop-shadow(2px 0 8px rgba(0, 0, 0, 0.6));
    }
  }

  .header {
    display: flex;
    justify-content: space-between;

    @include mobile {
      flex-direction: column-reverse;
    }

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
      width: 10%;
      min-width: 80px;

      @include mobile {
        align-self: flex-end;
        margin-bottom: var(--spacing-s);
      }

      img {
        width: 100%;
      }

      .code {
        margin-top: var(--spacing-m);
        font-weight: var(--font-weight-normal);
        letter-spacing: var(--spacing-m);
        font-size: clamp(var(--font-size-labor), 1.4vw, var(--font-size-h4));
      }
    }
  }

  .stats {
    display: flex;
    justify-content: space-between;
    margin-left: calc(1.5 * var(--spacing-3xl));

    @include tablet {
      margin-left: 0;
    }

    @include small-desktop {
      display: flex;
      flex-direction: column;
    }

    .values-container {
      margin-right: var(--spacing-xl);

      @include mobile {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-s);
        margin-right: 0;
      }
    }
  }
}
</style>
