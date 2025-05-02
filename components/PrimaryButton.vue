<template>
    <button type="button"
      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
      
    >
      {{ text }}
    </button>
  </template>
  
  <script setup>
  defineProps({
    text: String,
  });
  </script>
  