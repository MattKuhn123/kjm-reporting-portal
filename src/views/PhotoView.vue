<script setup lang="ts">
import InstructionItem from '../components/InstructionItem.vue'
import CameraIcon from '../components/icons/IconCamera.vue'
import StartIcon from '../components/icons/IconStart.vue'
</script>
<template>
  <form>
    <InstructionItem>
      <template #icon>
        <CameraIcon />
      </template>
      <template #heading>Photo</template>
      <div>
        <p>
          Use the camera app on your phone to take a picture of your attendance sheet. Frame the sheet so that the top of the sheet is at the top of the frame.
        </p>
        <fieldset>
          <legend>Confirm</legend>
          <input type="checkbox" name="confirm" id="confirm" v-model="confirm" />
          <label for="confirm">I've snapped my photo!</label>
        </fieldset>
      </div>
    </InstructionItem>
  
    <InstructionItem>
      <template #icon>
        <StartIcon />
      </template>
      <template #heading>Continue</template>
  
      <nav class="continuity">
        <RouterLink to="/">Back</RouterLink>
        <span v-if="!confirm"><i>Please confirm to continue</i></span>
        <RouterLink v-if="confirm" to="/upload">Continue</RouterLink>
      </nav>
    </InstructionItem>
  </form>
</template>

<style scoped>
input {
  margin-right: 10px;
}

fieldset {
  margin-top: 50px;
}

@media (min-width: 1024px) {
  .upload-photo {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      confirm: false
    }
  }
}
</script>
