<script setup>
import * as Sentry from "@sentry/vue";

const paost = {
  id: "099",
  title: "Bulablalabu",
  body: "just some random texts as our article body...."
};

// sending whole object
// Sentry.setContext("Post", post);

// In cases where you don't want to pass an entire object but just a few properties
Sentry.setContext("Post", {
  id: "099",
  title: "Bulablalabu", // setting title property changes the context heading in sentry to this
  postTitle: "our text...." // we can do this instead
})

// Or setting a single string using setTag
Sentry.setTag("aString", "stringValue");

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
