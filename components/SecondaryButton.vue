<template>
    <button type="button" class="text-blue-500 hover:text-blue-700 text-sm cursor-pointer bg" >
      {{ text }}
    </button>
  </template>
  
  <script setup>
  defineProps({
    text: String,
  });
  </script>
  