<template>
  <div class="container">
    <h1>💖 Vue 3 + Electron</h1>
    <p>Welcome to your Vue 3 Electron application.</p>
    <div v-if="data" class="content">
      <img :src="data.image" alt="Mock Image" class="mock-image" />
      <p class="mock-text">{{ data.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const data = ref(null);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/api/mock'); // Replace with your local API endpoint
    if (response.ok) {
      data.value = await response.json();
    } else {
      console.error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style>
.container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  margin: auto;
  max-width: 38rem;
  padding: 2rem;
  text-align: center;
}

.content {
  margin-top: 2rem;
}

.mock-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.mock-text {
  font-size: 1.2rem;
  color: #333;
}
</style> 