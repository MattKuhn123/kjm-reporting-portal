<script setup lang="ts">
import FilePicker from '../components/FilePicker.vue'
import InstructionItem from '../components/InstructionItem.vue'
import UploadIcon from '../components/icons/IconUpload.vue'
import CameraIcon from '../components/icons/IconCamera.vue'
import StartIcon from '../components/icons/IconStart.vue'
</script>
<template>
  <form>
    <InstructionItem>
      <template #icon>
        <UploadIcon />
      </template>
      <template #heading>Upload</template>
      <p>
        Upload the photo into the system by clicking <b class="orange">Upload</b> button and selecting your photo.
      </p>
      <fieldset>
        <legend>Upload</legend>
        <FilePicker file-types=".jpg" @raise-file-picked="handleFilePicked"/>
      </fieldset>
    </InstructionItem>
  
    <hr />
    
    <InstructionItem>
      <template #icon>
        <StartIcon />
      </template>
      <template #heading>Continue</template>
  
      <nav>
        <RouterLink to="/photo">Back</RouterLink>
        <span v-if="!text"><i>Please upload a photo to continue</i></span>
        <RouterLink v-if="text" to="/upload">Continue</RouterLink>
        <p v-if="error" class="orange">An error occured. Please try again.</p>
      </nav>
    </InstructionItem>
  </form>
  
</template>

<style scoped>
b {
  font-weight: bolder;
}

fieldset {
  margin-top: 50px;
}
</style>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      text: "",
      error: false
    }
  },
  methods: {
    async handleFilePicked(file) {
      const key = "TODO"
      const reader = new FileReader()
      reader.onload = async (e) => {
        const data = reader.result.replace("data:image/jpeg;base64,", "")

        try {
          const response = await axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
            requests: [{ image: { content: data }, features: [ { type: "DOCUMENT_TEXT_DETECTION" } ]}]
          })

          this.text = response.data.responses[0].fullTextAnnotation.text
          this.error = false
        } catch (err) {
          this.text = ""
          this.error = err
        }
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>