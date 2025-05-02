<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader class="sticky top-0 z-50"></AppHeader>
        <main class="flex-grow p-2 ">
            <slot />
        </main>
        <AppFooter class="mt-auto"></AppFooter>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

onMounted(() => {
  const token = localStorage.getItem('token');
  const router = useRouter();

  if(token) {
    push.info("Ви вже авторизовані")
    router.push('/home');
  } else {
    
  }

});
</script>