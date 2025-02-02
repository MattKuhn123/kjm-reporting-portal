<script setup lang="ts">
import InstructionItem from '../components/InstructionItem.vue'
import AttendanceSheet from '../components/AttendanceSheet.vue'
import CompleteIcon from '../components/icons/IconComplete.vue'
import StartIcon from '../components/icons/IconStart.vue'
</script>
<template>
  <form>
    <InstructionItem>
      <template #icon>
        <CompleteIcon />
      </template>
      <template #heading>Complete</template>
      Last check to make sure everything is correct!
      <AttendanceSheet />
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
        <RouterLink to="/review">Back</RouterLink>
        <span v-if="!confirm"><i>Please confirm to continue</i></span>
        <RouterLink v-if="confirm" to="/">Continue</RouterLink>
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
