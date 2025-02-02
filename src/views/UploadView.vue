<script setup lang="ts">
import FilePicker from '../components/FilePicker.vue'
import InstructionItem from '../components/InstructionItem.vue'
import UploadIcon from '../components/icons/IconUpload.vue'
import StartIcon from '../components/icons/IconStart.vue'
import { storeToRefs } from 'pinia'
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
  
    <InstructionItem>
      <template #icon>
        <StartIcon />
      </template>
      <template #heading>Continue</template>
  
      <nav class="continuity">
        <span v-if="loading"><i>Loading, please wait</i></span>
        <RouterLink to="/photo">Back</RouterLink>
        <span v-if="!text"><i>Please upload a photo to continue</i></span>
        <RouterLink v-if="text" to="/review">Continue</RouterLink>
        <p v-if="error" class="orange">An error occured. Please try again. <br> {{ error }}</p>
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

import { useAttendanceStore } from '@/stores/attendance'
const store = useAttendanceStore()

export default {
  data() {
    return {
      text: "",
      loading: false,
      error: false,
    }
  },
  methods: {
    async handleFilePicked(file) {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const data = reader.result.replace("data:image/jpeg;base64,", "")
        
        try {
          // const key = ""
          // const response = await axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${key}`, {
          //   requests: [{ image: { content: data }, features: [ { type: "DOCUMENT_TEXT_DETECTION" } ]}]
          // })

          this.text = "something"
          // this.text = response.data.responses[0].fullTextAnnotation.text
          // console.log(response)

          // TODO!!! Maybe the most important thing
          store.date = new Date().toISOString().slice(0, 10);
          store.participants = "WOMEN"
          store.meetingType = "LIFESKILLS"
          store.county = "Grant"
          store.chaplains = ["Bobby Lee", "Matt Kuhn"]
          store.headcount = 10
          this.error = false
        } catch (err) {
          this.text = ""
          this.error = err
        } finally {
          this.loading = false
        }
      }

      reader.onError = (e) => {
        this.error = err
        this.loading = false
      }

      reader.readAsDataURL(file)
      this.loading = true
    }
  }
}
</script>