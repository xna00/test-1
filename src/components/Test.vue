<template>
  <div>{{ counter }}</div>
  <button @click="increment">+1</button>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const counter = ref(0);
const increment = () => counter.value++;
</script>