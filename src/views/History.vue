<template>
  <div class="history">
    <div class="content">
      <h2>党史学习教育</h2>
      <div class="timeline">
        <el-timeline>
          <el-timeline-item
            v-for="(event, index) in historicalEvents"
            :key="index"
            :timestamp="event.year"
            placement="top"
            type="danger"
          >
            <h3>{{ event.title }}</h3>
            <p>{{ event.description }}</p>
          </el-timeline-item>
        </el-timeline>
      </div>
      <el-button type="primary" @click="$router.push('/')" class="back-btn">返回首页</el-button>
    </div>
  </div>
</template>

<script setup>
const historicalEvents = [
  {
    year: '1921年',
    title: '中国共产党成立',
    description: '中国共产党第一次全国代表大会在上海召开，宣告中国共产党的诞生。'
  },
  {
    year: '1949年',
    title: '中华人民共和国成立',
    description: '毛泽东主席在天安门城楼上庄严宣告中华人民共和国成立。'
  },
  {
    year: '1978年',
    title: '改革开放',
    description: '十一届三中��会召开，确立改革开放政策，开启了中国特色社会主义新征程。'
  }
]
</script>

<style scoped>
.history {
  min-height: 100vh;
  background: url('https://img.zcool.cn/community/01a1595d8e4515a8012060be92c8c9.jpg@1280w_1l_2o_100sh.jpg') no-repeat center center;
  background-size: cover;
  padding: 2rem;
}

.content {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #c92323;
  text-align: center;
  margin-bottom: 2rem;
}

.back-btn {
  display: block;
  margin: 2rem auto 0;
}
</style> 