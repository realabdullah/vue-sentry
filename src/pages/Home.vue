<script setup>
const throwErr = () => {
  throw new Error('This is an intentionally thrown error')
}
</script>

<template>
  <div>
    <h1 class="text-4xl">Home</h1>
  </div>

  <button @click="throwErr">Throw Error</button>
</template>
