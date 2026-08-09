<script setup lang="ts">
const communities = [
  {
    title: 'Chia sẻ kiến thức kinh doanh',
    desc: 'Cộng đồng giao lưu, học hỏi',
    url: 'https://www.facebook.com/groups/176698276219215',
    id: 'share'
  },
  {
    title: 'Review & Chuyển nhượng',
    desc: 'Trao đổi phần mềm KiotViet',
    url: 'https://www.facebook.com/groups/417686529506552',
    id: 'review'
  },
  {
    title: 'Fanpage KiotViet',
    desc: 'Cập nhật tin tức mới nhất',
    url: 'https://www.facebook.com/profile.php?id=61593199430200',
    id: 'fanpage'
  },
  {
    title: 'Tư Vấn Lắp Đặt Phần Mềm KiotViet',
    desc: 'Kênh Telegram hỗ trợ trực tiếp',
    url: 'https://t.me/dakv88channel',
    id: 'telegram'
  }
];
</script>

<template>
  <section class="community-section">
    <div class="container">
      <h3 class="section-title">Cộng đồng của DAKV88</h3>
      <div class="community-list">
        <a 
          v-for="comm in communities" 
          :key="comm.title" 
          :href="comm.url" 
          target="_blank"
          class="community-card"
        >
          <div class="card-cover">
            <img :src="`/community/${comm.id}.jpg`" :alt="comm.title" />
          </div>
          <div class="card-body">
            <div class="content">
              <h4>{{ comm.title }}</h4>
              <p>{{ comm.desc }}</p>
            </div>
            <div class="join-btn">Tham gia ngay</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.community-section {
  width: 100%;
  background-color: #f0f2f5; /* Facebook-like gray background */
  padding: 4rem 0;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #1c1e21;
}

.community-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .community-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (min-width: 1024px) {
  .community-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

.community-card {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: var(--text-main);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.community-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.card-cover {
  width: 100%;
  height: 160px;
  background-color: #e4e6eb;
  overflow: hidden;
}

.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.community-card:hover .card-cover img {
  transform: scale(1.05);
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.content {
  margin-bottom: 15px;
  flex-grow: 1;
}

.content h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #050505;
  margin-bottom: 8px;
  line-height: 1.3;
}

.content p {
  font-size: 0.9rem;
  color: #65676B;
}

.join-btn {
  background-color: #1877f2;
  color: #fff;
  font-weight: 600;
  text-align: center;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.community-card:hover .join-btn {
  background-color: #166fe5;
  box-shadow: 0 4px 10px rgba(24, 119, 242, 0.3);
}
</style>
