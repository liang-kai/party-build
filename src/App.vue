<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive :exclude="excludeComponents">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const excludeComponents = computed(() => {
  const currentRoute = route.matched[0]
  return currentRoute?.meta?.noCache ? [currentRoute.name] : []
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
</style> 