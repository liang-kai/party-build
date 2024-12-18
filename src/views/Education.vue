<template>
  <div class="education">
    <div class="content">
      <h2>党建教育</h2>
      <div class="course-grid">
        <el-card v-for="course in courses" :key="course.id" class="course-card">
          <img :src="course.image" class="course-image" />
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
          <div class="card-footer">
            <el-button type="danger" @click="startLearning(course)">开始学习</el-button>
            <span class="study-count">{{ course.studyCount }}人已学习</span>
          </div>
        </el-card>
      </div>
      <el-button type="primary" @click="$router.push('/')" class="back-btn">返回首页</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const courses = ref([
  {
    id: 1,
    title: '习近平新时代中国特色社会主义思想',
    description: '深入学习贯彻习近平新时代中国特色社会主义思想，坚持和发展中国特色社会主义。',
    image: 'https://img.zcool.cn/community/01c2685d8e4515a8012060be1dd913.jpg@1280w_1l_2o_100sh.jpg',
    studyCount: 2345
  },
  {
    id: 2,
    title: '党的二十大精神解读',
    description: '全面学习贯彻党的二十大精神，以中国式现代化全面推进中华民族伟大复兴。',
    image: 'https://img.zcool.cn/community/0152685d8e4515a8012060bea5a3fa.jpg@1280w_1l_2o_100sh.jpg',
    studyCount: 1890
  },
  {
    id: 3,
    title: '党史学习教育',
    description: '学习百年党史，汲取奋进力量，深刻把握党的历史发展规律和大势。',
    image: 'https://img.zcool.cn/community/01c26a5d8e4515a8012060be231e41.jpg@1280w_1l_2o_100sh.jpg',
    studyCount: 2156
  }
])

const startLearning = (course) => {
  ElMessage({
    message: `开始学习: ${course.title}`,
    type: 'success'
  })
}
</script>

<style scoped>
.education {
  min-height: 100vh;
  background: url('https://img.zcool.cn/community/019f1e5d8e4515a8012060bef7a001.jpg@1280w_1l_2o_100sh.jpg') no-repeat center center;
  background-size: cover;
  padding: 2rem;
}

.content {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #c92323;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.course-card {
  transition: transform 0.3s ease;
}

.course-card:hover {
  transform: translateY(-5px);
}

.course-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
}

h3 {
  color: #333;
  margin: 1rem 0;
}

p {
  color: #666;
  margin-bottom: 1rem;
  min-height: 3em;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.study-count {
  color: #999;
  font-size: 0.9rem;
}

.back-btn {
  display: block;
  margin: 2rem auto 0;
}
</style> 