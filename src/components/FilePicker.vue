<script setup>
defineProps({
  fileTypes: String
})
</script>

<template>
  <button type="button" class="padded-12-16" @click="simulateClick">
    Upload
  </button>
  <input ref="fileInput" :accept="fileTypes" name="file" type="file" @change="handleInputChange" hidden/>
</template>

<script>
export default {
  emits: ['raise-file-picked'],
  methods: {
    simulateClick() {
      this.$refs.fileInput.click()
    },
    handleInputChange(event) {
      if (event.target.files) {
        this.$emit('raise-file-picked', event.target.files[0])
      }
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
  background-color: white;
  border: 2px var(--color-primary) solid;
  border-radius: 2px;
}
</style>