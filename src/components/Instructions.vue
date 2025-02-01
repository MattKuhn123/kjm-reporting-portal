<script setup lang="ts">
import InstructionItem from './InstructionItem.vue'
import CameraIcon from './icons/IconCamera.vue'
import UploadIcon from './icons/IconUpload.vue'
import ReviewIcon from './icons/IconReview.vue'
import CompleteIcon from './icons/IconComplete.vue'
import EditIcon from './icons/IconEdit.vue'
</script>

<template>
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
</template>
