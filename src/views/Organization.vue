<template>
  <div class="organization">
    <div class="content">
      <h2>组织建设</h2>
      
      <!-- 组织架构图 -->
      <div class="org-structure">
        <el-card class="structure-card">
          <template #header>
            <div class="card-header">
              <h3>组织架构</h3>
            </div>
          </template>
          <el-tree
            :data="orgStructure"
            :props="defaultProps"
            :expand-on-click-node="false"
            default-expand-all
            node-key="id"
          >
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <span>{{ node.label }}</span>
                <span class="member-count" v-if="data.memberCount">
                  ({{ data.memberCount }}人)
                </span>
              </span>
            </template>
          </el-tree>
        </el-card>
      </div>

      <!-- 党建活动 -->
      <div class="activities">
        <h3 class="section-title">近期活动</h3>
        <el-row :gutter="20">
          <el-col :span="8" v-for="activity in activities" :key="activity.id">
            <el-card class="activity-card" :body-style="{ padding: '0px' }">
              <img :src="activity.image" class="activity-image">
              <div class="activity-info">
                <h4>{{ activity.title }}</h4>
                <p class="activity-time">
                  <el-icon><Calendar /></el-icon>
                  {{ activity.time }}
                </p>
                <p class="activity-desc">{{ activity.description }}</p>
                <el-button type="danger" @click="showActivityDetail(activity)">
                  查看详情
                </el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 党员风采 -->
      <div class="members">
        <h3 class="section-title">优秀党员</h3>
        <el-carousel :interval="4000" type="card" height="400px">
          <el-carousel-item v-for="member in excellentMembers" :key="member.id">
            <el-card class="member-card">
              <img :src="member.avatar" class="member-avatar">
              <h4>{{ member.name }}</h4>
              <p class="member-title">{{ member.title }}</p>
              <p class="member-desc">{{ member.description }}</p>
            </el-card>
          </el-carousel-item>
        </el-carousel>
      </div>

      <el-button type="primary" @click="$router.push('/')" class="back-btn">返回首页</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const orgStructure = [
  {
    id: 1,
    label: '党委',
    memberCount: 15,
    children: [
      {
        id: 2,
        label: '组织部',
        memberCount: 8
      },
      {
        id: 3,
        label: '宣传部',
        memberCount: 6
      },
      {
        id: 4,
        label: '纪检部',
        memberCount: 5
      }
    ]
  }
]

const defaultProps = {
  children: 'children',
  label: 'label'
}

const activities = ref([
  {
    id: 1,
    title: '主题党日活动',
    time: '2024-03-15',
    description: '开展"不忘初心、牢记使命"主题党日活动，深入学习贯彻习近平新时代中国特色社会主义思想。',
    image: 'https://img.zcool.cn/community/01f26a5d8e4515a8012060be92a0da.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 2,
    title: '党史学习教育',
    time: '2024-03-20',
    description: '组织党员干部参观革命历史纪念馆，重温入党誓词，传承红色基因。',
    image: 'https://img.zcool.cn/community/0152695d8e4515a8012060bef30901.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 3,
    title: '志愿服务活动',
    time: '2024-03-25',
    description: '组织党员开展"我为群众办实事"实践活动，深入社区服务群众。',
    image: 'https://img.zcool.cn/community/01f2695d8e4515a8012060bef01385.jpg@1280w_1l_2o_100sh.jpg'
  }
])

const excellentMembers = ref([
  {
    id: 1,
    name: '张志强',
    title: '优秀共产党员',
    description: '扎根基层20年，始终践行全心全意为人民服务的宗旨，多次获得省市表彰。',
    avatar: 'https://img.zcool.cn/community/01c2685d8e4515a8012060be1dd913.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 2,
    name: '李明',
    title: '先进工作者',
    description: '在疫情防控工作中表现突出，带领团队攻坚克难，展现了共产党员的担当。',
    avatar: 'https://img.zcool.cn/community/0152685d8e4515a8012060bea5a3fa.jpg@1280w_1l_2o_100sh.jpg'
  },
  {
    id: 3,
    name: '王红',
    title: '优秀党务工作者',
    description: '创新党建工作方法，推动党建与业务深度融合，提升基层党组织战斗力。',
    avatar: 'https://img.zcool.cn/community/01c26a5d8e4515a8012060be231e41.jpg@1280w_1l_2o_100sh.jpg'
  }
])

const showActivityDetail = (activity) => {
  ElMessage({
    message: `��在查看：${activity.title}`,
    type: 'success'
  })
}
</script>

<style scoped>
.organization {
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

.section-title {
  color: #c92323;
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
}

.org-structure {
  margin-bottom: 2rem;
}

.structure-card {
  margin-bottom: 2rem;
}

.custom-tree-node {
  display: flex;
  align-items: center;
  gap: 8px;
}

.member-count {
  color: #909399;
  font-size: 0.9em;
}

.activities {
  margin: 2rem 0;
}

.activity-card {
  margin-bottom: 1rem;
  transition: transform 0.3s;
}

.activity-card:hover {
  transform: translateY(-5px);
}

.activity-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.activity-info {
  padding: 1rem;
}

.activity-time {
  color: #909399;
  font-size: 0.9em;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 4px;
}

.activity-desc {
  color: #606266;
  margin: 1rem 0;
  min-height: 3em;
}

.members {
  margin: 2rem 0;
}

.member-card {
  height: 100%;
  text-align: center;
  padding: 1rem;
}

.member-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 1rem auto;
  object-fit: cover;
}

.member-title {
  color: #c92323;
  margin: 0.5rem 0;
}

.member-desc {
  color: #606266;
  margin: 1rem 0;
  line-height: 1.6;
}

.back-btn {
  display: block;
  margin: 2rem auto 0;
}
</style> 