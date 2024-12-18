<template>
  <div class="achievement">
    <div class="content">
      <h2>建设成就</h2>
      
      <!-- 数据概览卡片 -->
      <div class="statistics-cards">
        <el-card v-for="stat in statistics" :key="stat.id" class="stat-card">
          <el-statistic :title="stat.title" :value="stat.value" :precision="stat.precision">
            <template #suffix>
              <span class="suffix">{{ stat.suffix }}</span>
            </template>
          </el-statistic>
          <div class="trend">
            <span :class="['trend-value', stat.trend > 0 ? 'up' : 'down']">
              {{ stat.trend > 0 ? '+' : '' }}{{ stat.trend }}%
            </span>
            <span class="trend-label">较上年</span>
          </div>
        </el-card>
      </div>

      <!-- 成就展示 -->
      <div class="achievements-list">
        <el-timeline>
          <el-timeline-item
            v-for="item in achievements"
            :key="item.id"
            :timestamp="item.year"
            placement="top"
            type="danger"
          >
            <el-card class="achievement-card">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <el-image 
                :src="item.image" 
                fit="cover"
                class="achievement-image"
                :preview-src-list="[item.image]"
              />
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>

      <el-button type="primary" @click="$router.push('/')" class="back-btn">返回首页</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const statistics = ref([
  {
    id: 1,
    title: '党员总数',
    value: 9514,
    suffix: '万人',
    precision: 0,
    trend: 2.8
  },
  {
    id: 2,
    title: '基层党组织',
    value: 485.2,
    suffix: '万个',
    precision: 1,
    trend: 3.2
  },
  {
    id: 3,
    title: '党建活动参与度',
    value: 98.6,
    suffix: '%',
    precision: 1,
    trend: 4.5
  },
  {
    id: 4,
    title: '群众满意度',
    value: 96.8,
    suffix: '%',
    precision: 1,
    trend: 2.3
  }
])

const achievements = ref([
  {
    id: 1,
    year: '2023年',
    title: '全面推进乡村振兴',
    description: '持续巩固拓展脱贫攻坚成果，全面推进乡村振兴，农村居民人均可支配收入稳步增长。',
    image: 'https://img.zcool.cn/community/01f26a5d8e4515a8012060be92a0da.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 2,
    year: '2022年',
    title: '共同富裕示范区建设',
    description: '扎实推进共同富裕示范区建设，城乡居民收入比持续缩小，基本公共服务均等化水平明显提高。',
    image: 'https://img.zcool.cn/community/0152695d8e4515a8012060bef30901.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 3,
    year: '2021年',
    title: '全面建成小康社会',
    description: '如期打赢脱贫攻坚战，完成新时代脱贫攻坚目标任务，全面建成小康社会。',
    image: 'https://img.zcool.cn/community/01f2695d8e4515a8012060bef01385.jpg@1280w_1l_2o_100sh.jpg'
  }
])
</script>

<style scoped>
.achievement {
  min-height: 100vh;
  background: url('https://img.zcool.cn/community/01526a5d8e4515a8012060be92c8c9.jpg@1280w_1l_2o_100sh.jpg') no-repeat center center;
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

.statistics-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-card {
  text-align: center;
  padding: 1rem;
}

.trend {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.trend-value {
  font-weight: bold;
  margin-right: 0.5rem;
}

.trend-value.up {
  color: #67c23a;
}

.trend-value.down {
  color: #f56c6c;
}

.trend-label {
  color: #909399;
}

.achievements-list {
  margin: 2rem 0;
}

.achievement-card {
  margin-bottom: 1rem;
}

.achievement-card h3 {
  color: #c92323;
  margin-bottom: 1rem;
}

.achievement-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-top: 1rem;
}

.back-btn {
  display: block;
  margin: 2rem auto 0;
}

.suffix {
  margin-left: 4px;
  font-size: 0.9em;
  color: #606266;
}
</style> 