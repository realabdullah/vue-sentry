<script setup>
  const routes = {};

  const alertSentry = () => {
    sendAlertToSentry();
  }
</script>


<template>
  <div>
    <h1 class="text-4xl">About</h1>
    <button @click="routes.goBack()">Back</button>

    <button @click="alertSentry">Alert Sentry</button>
  </div>
</template>
