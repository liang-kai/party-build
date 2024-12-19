<template>
  <div class="home" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="hero">
      <div class="title-section">
        <h1>{{ mainTitle }}</h1>
        <p>{{ subTitle }}</p>
      </div>
      <div class="button-group">
        <el-button 
          v-for="(btn, index) in buttons" 
          :key="index"
          type="danger" 
          size="large" 
          class="nav-button"
          @click="$router.push(btn.route)"
        >
          {{ btn.text }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const backgroundImage = ref('')
const mainTitle = ref('')
const subTitle = ref('')

const buttons = [
  { text: '党史学习', route: '/history' },
  { text: '党建教育', route: '/education' },
  { text: '组织建设', route: '/organization' },
  { text: '建设成就', route: '/achievement' }
]

const axiosInstance = axios.create({
  baseURL: 'http://localhost/prod-api',
})

const fetchHomeData = async () => {
  try {
    // 获取背景图片
    const bgResponse = await axiosInstance.get('/show/picture', {
      params: { picKey: 'home_background' },
      skipInterceptor: true
    })
    backgroundImage.value = bgResponse.data.url // 假设接口返回的图片URL在data.url中

    // 获取主标题
    const mainTitleResponse = await axiosInstance.get('/show/text', {
      params: { textKey: 'home_main_title' },
      skipInterceptor: true
    })
    mainTitle.value = mainTitleResponse.data.text // 假设接口返回的文本在data.text中

    // 获取副标题
    const subTitleResponse = await axiosInstance.get('/show/text', {
      params: { textKey: 'home_sub_title' },
      skipInterceptor: true
    })
    subTitle.value = subTitleResponse.data.text
  } catch (error) {
    console.error('Error fetching home data:', error)
    // 设置默认值
    backgroundImage.value = 'https://img.zcool.cn/community/01a9445d8e4515a8012060be00429d.jpg@1280w_1l_2o_100sh.jpg'
    mainTitle.value = '不忘初心 牢记使命'
    subTitle.value = '传承红色基因，弘扬革命精神'
  }
}

onMounted(() => {
  fetchHomeData()
})
</script>

<style scoped>
.home {
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
}

.hero {
  background: rgba(0, 0, 0, 0.5);
  padding: 4rem 6rem;
  border-radius: 20px;
  width: 80%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.title-section {
  margin-bottom: 2rem;
}

h1 {
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: 0.2em;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

p {
  font-size: 2rem;
  margin-bottom: 3rem;
  letter-spacing: 0.1em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.button-group {
  display: flex;
  gap: 3rem;
  justify-content: center;
}

.nav-button {
  padding: 1.5rem 3rem;
  font-size: 1.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.nav-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* 适配不同屏幕尺寸 */
@media (min-width: 2560px) {
  h1 {
    font-size: 6rem;
  }
  
  p {
    font-size: 2.5rem;
  }
  
  .nav-button {
    padding: 2rem 4rem;
    font-size: 2rem;
  }
}

@media (max-width: 1440px) {
  h1 {
    font-size: 3.5rem;
  }
  
  p {
    font-size: 1.5rem;
  }
  
  .nav-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
  
  .button-group {
    gap: 2rem;
  }
}
</style> 