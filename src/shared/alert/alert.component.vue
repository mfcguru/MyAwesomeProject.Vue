<template>
  <div>
    <div v-if="success" class="alert alert-success text-center">
      <p>Success!</p>
    </div>
    <div v-else-if="error && error.response" class="alert alert-danger text-center">
      <p>{{ error.response.data }}</p>
    </div>
    <div v-else-if="message && message.length > 0" class="alert alert-danger text-center">
      <p>{{ message }}</p>
    </div>
    <div v-else class="alert alert-danger text-center">
      <p>Connection error!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: {
    success: Boolean,
    message: String,
    error: null,
  }
};
</script>

<style scoped>
</style>
