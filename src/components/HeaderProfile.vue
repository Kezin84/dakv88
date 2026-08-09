<script setup lang="ts">
// Avatar and basic info
</script>

<template>
  <header class="profile-header">
    <div class="avatar-container">
      <img src="https://i.ibb.co/r2M7hR66/Chat-GPT-Image-09-43-12-8-thg-8-2026.png" alt="Avatar" class="avatar" />
    </div>
    <h1 class="name">Đinh Anh</h1>
    <h2 class="title">Chuyên viên tư vấn KiotViet</h2>
    <p class="slogan">Đồng hành cùng hàng ngàn chủ shop tối ưu quản lý, tăng doanh thu.</p>
  </header>
</template>

<style scoped>
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 1rem;
}

.avatar-container {
  position: relative;
  margin-bottom: 1rem;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--kv-blue);
  box-shadow: 0 4px 10px rgba(0, 80, 179, 0.2);
}

.badge-kiotviet {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--kv-green);
  color: var(--white);
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 12px;
  border: 2px solid var(--white);
  white-space: nowrap;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--kv-blue);
  margin-bottom: 0.25rem;
}

.title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.slogan {
  font-size: 0.95rem;
  color: var(--text-main);
  max-width: 90%;
}
</style>
