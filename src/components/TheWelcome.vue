<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import CameraIcon from './icons/IconCamera.vue'
import UploadIcon from './icons/IconUpload.vue'
import ReviewIcon from './icons/IconReview.vue'
import CompleteIcon from './icons/IconComplete.vue'
import EditIcon from './icons/IconEdit.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <CameraIcon />
    </template>
    <template #heading>Photo</template>

    Take a picture of your attendance sheet.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <UploadIcon />
    </template>
    <template #heading>Upload</template>

    Upload the picture, here, to the system.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ReviewIcon />
    </template>
    <template #heading>Review</template>
    
    Ensure the data we extracted is accurate.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EditIcon />
    </template>
    <template #heading>Edit</template>

    Edit if necessary.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CompleteIcon />
    </template>
    <template #heading>Complete</template>

    Approve & complete!
  </WelcomeItem>
</template>
