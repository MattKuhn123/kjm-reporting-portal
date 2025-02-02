<script setup lang="ts">
import InstructionItem from '../components/InstructionItem.vue'
import AttendanceForm from '../components/AttendanceForm.vue'
import ReviewIcon from '../components/icons/IconReview.vue'
import StartIcon from '../components/icons/IconStart.vue'
</script>

<template>
  <form>
    <InstructionItem>
      <template #icon>
        <ReviewIcon />
      </template>
      <template #heading>Review</template>
      
      Ensure the data we collected is accurate.

      <AttendanceForm />
      <fieldset id="confirm-fieldset">
        <legend>Confirm</legend>
        <input type="checkbox" id="confirm" name="confirm" v-model="confirm"/>
        <label for="confirm">Looks good!</label>
      </fieldset>
    </InstructionItem>

    <InstructionItem>
      <template #icon>
        <StartIcon />
      </template>
      <template #heading>Continue</template>
  
      <nav class="continuity">
        <RouterLink to="/upload">Back</RouterLink>
        <span v-if="!confirm"><i>Please review</i></span>
        <RouterLink v-if="confirm" to="/complete">Continue</RouterLink>
      </nav>
    </InstructionItem>

  </form>
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
  export default {
    data() {
      return {
        confirm: false,
      }
    }
  }
</script>