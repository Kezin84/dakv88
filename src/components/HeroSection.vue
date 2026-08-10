<script setup lang="ts">
const trialLink = "https://www.kiotviet.vn/?refcode=13563";
</script>

<template>
  <section class="hero-section">
    <div class="container hero-content">
      <div class="hero-text">
        <h1>Nguyễn Võ Đình Anh</h1>
        <h2>Chuyên viên kinh doanh KiotViet</h2>
        <p class="slogan">Đồng hành cùng hàng ngàn chủ shop tối ưu quản lý, tăng doanh thu với phần mềm phổ biến nhất Việt Nam.</p>
        
        <a :href="trialLink" target="_blank" class="btn-primary-large">
          <i class="fas fa-gift"></i> ĐĂNG KÝ DÙNG THỬ MIỄN PHÍ
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  width: 100%;
  background: linear-gradient(135deg, #f0f7ff 0%, #e0ffe8 100%);
  padding: 4rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-text {
  max-width: 800px;
}

.hero-text h1 {
  font-size: 2.5rem;
  color: var(--kv-blue);
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-text h2 {
  font-size: 1.25rem;
  color: var(--text-main);
  font-weight: 600;
  margin-bottom: 1rem;
}

.slogan {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.btn-primary-large {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: var(--kv-green);
  color: var(--white);
  font-weight: 700;
  font-size: 1.2rem;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 166, 90, 0.3);
  animation: pulse 2s infinite;
}

.btn-primary-large:hover {
  background-color: var(--kv-green-hover);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 166, 90, 0.4);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 0;
  }
  
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .btn-primary-large {
    font-size: 1rem;
    padding: 1rem 1.5rem;
    width: 100%;
  }
}
</style>
