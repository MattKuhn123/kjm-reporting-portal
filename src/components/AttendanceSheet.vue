<script setup lang="ts">
  import { useAttendanceStore } from '@/stores/attendance'
  const store = useAttendanceStore()
</script>

<template>
  <fieldset id="info-fieldset">
    <legend>Info</legend>
    <p>
      Date: {{ store.date }}
    </p>
    <p>
      Participants: {{ store.participants }}
    </p>
    <p>
      Meeting Type: {{ store.meetingType }}
    </p>
  </fieldset>
  <fieldset id="county-fieldset">
    <legend>County</legend>
    <p>
      {{ store.county }}
    </p>
  </fieldset>
  <fieldset id="chaplains-fieldset">
    <legend>Chaplain(s) present</legend>
    <ul>
      <li v-for="x in store.chaplains">
        {{ x }}
      </li>
    </ul>
  </fieldset>
  <fieldset id="headcount-fieldset">
    <legend>Headcount</legend>
    {{ store.headcount }}
  </fieldset>
</template>

<style scoped>
  label {
    margin-right: 10px;
    font-weight: bolder;
  }

  input {
    margin-right: 3px;
  }
</style>

<script lang="ts">
</script>