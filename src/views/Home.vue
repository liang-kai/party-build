<template>
  <div class="home">
    <div class="hero">
      <h1>不忘初心 牢记使命</h1>
      <p>传承红色基因，弘扬革命精神</p>
      <div class="button-group">
        <el-button type="danger" size="large" @click="$router.push('/history')">党史学习</el-button>
        <el-button type="danger" size="large" @click="$router.push('/education')">党建教育</el-button>
        <el-button type="danger" size="large" @click="$router.push('/achievement')">建设成就</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  height: 100vh;
  background: url('https://img.zcool.cn/community/01a9445d8e4515a8012060be00429d.jpg@1280w_1l_2o_100sh.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style> 