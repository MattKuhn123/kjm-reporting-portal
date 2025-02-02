<script setup lang="ts">
import CameraIcon from '../components/icons/IconCamera.vue'
import CompleteIcon from '../components/icons/IconComplete.vue'
import EditIcon from '../components/icons/IconEdit.vue'
import InstructionItem from '../components/InstructionItem.vue'
import ReviewIcon from '../components/icons/IconReview.vue'
import StartIcon from '../components/icons/IconStart.vue'
import UploadIcon from '../components/icons/IconUpload.vue'
</script>

<template>
  <nav>
    <InstructionItem>
      <template #icon>
        <CameraIcon />
      </template>
      <template #heading>Photo</template>

      Take a picture of your attendance sheet.
    </InstructionItem>

    <InstructionItem>
      <template #icon>
        <UploadIcon />
      </template>
      <template #heading>Upload</template>

      Upload the picture, here, to the system.
    </InstructionItem>

    <InstructionItem>
      <template #icon>
        <ReviewIcon />
      </template>
      <template #heading>Review</template>
      
      Ensure the data we extracted is accurate.
    </InstructionItem>

    <InstructionItem>
      <template #icon>
        <EditIcon />
      </template>
      <template #heading>Edit</template>

      Edit if necessary.
    </InstructionItem>

    <InstructionItem>
      <template #icon>
        <CompleteIcon />
      </template>
      <template #heading>Complete</template>

      Approve & complete!
    </InstructionItem>
    
    <hr />

    <InstructionItem>
      <template #icon>
        <StartIcon />
      </template>
      <template #heading>Start</template>

      <nav>
        <RouterLink to="/photo">Get Started!</RouterLink>
      </nav>
    </InstructionItem>
  </nav>
</template>
