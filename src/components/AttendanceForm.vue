<script setup lang="ts">
import { useAttendanceStore } from '@/stores/attendance'
const store = useAttendanceStore()
</script>

<template>
  <fieldset id="info-fieldset">
    <legend>Info</legend>
    <label for="date">Date: </label>
    <input type="date" id="date" name="date" v-model="store.date"/>
    <br/>
    <label for="men, women">Participants: </label>
    <input type="radio" id="men" name="participants" value="MEN" v-model="store.participants"/>
    <label for="men">Men</label>
    <input type="radio" id="women" name="participants" value="WOMEN" v-model="store.participants"/>
    <label for="women">Women</label>
    <br/>
    <label for="church, lifeskills">Meeting Type: </label>
    <input type="radio" id="church" name="meeting-type" value="CHURCH" v-model="store.meetingType"/>
    <label for="chuch">Church</label>
    <input type="radio" id="life-skills" name="meeting-type" value="LIFESKILLS" v-model="store.meetingType"/>
    <label for="lifeskills">Lifeskills</label><br>
  </fieldset>
  <fieldset id="county-fieldset">
    <legend>County</legend>
    <input type="radio" id="kenton" name="county" value="Kenton" v-model="store.county"/>
    <label for="kenton">Kenton</label>
    <input type="radio" id="campbell" name="county" value="Campbell" v-model="store.county"/>
    <label for="campbell">Campbell</label>
    <input type="radio" id="boone" name="county" value="Boone" v-model="store.county"/>
    <label for="campbell">Boone</label>
    <input type="radio" id="grant" name="county" value="Grant" v-model="store.county"/>
    <label for="campbell">Grant</label>
    <br>
  </fieldset>
  <fieldset id="chaplains-fieldset">
    <legend>Chaplain(s) present</legend>
    <div v-for="x in store.chaplains">
      <input type="text" :value="x"/>
    </div>
  </fieldset>
  <fieldset id="headcount-fieldset">
    <legend>Headcount</legend>
    <input type="number" id="headcount" name="headcount" value="Grant" v-model="store.headcount"/>
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