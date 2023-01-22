<script setup>
const throwErr = () => {
  alert('Error')
}
</script>

<template>
  <div>
    <h1 class="text-4xl">Home</h1>
  </div>

  <button @click="throwErr">Throw Error</button>
</template>
