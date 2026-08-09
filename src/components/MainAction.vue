<script setup lang="ts">
// Actual KiotViet trial link
const trialLink = "https://www.kiotviet.vn/?refcode=3670";
</script>

<template>
  <div class="main-action">
    <a :href="trialLink" target="_blank" class="btn-primary">
      <span class="icon"><i class="fas fa-gift"></i></span>
      ĐĂNG KÝ DÙNG THỬ MIỄN PHÍ
    </a>
  </div>
</template>

<style scoped>
.main-action {
  width: 100%;
  display: flex;
  justify-content: center;
}

.btn-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background-color: var(--kv-green);
  color: var(--white);
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(0, 166, 90, 0.3);
  animation: pulse 2s infinite;
}

.btn-primary:hover {
  background-color: var(--kv-green-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 166, 90, 0.4);
}

.icon {
  font-size: 1.2rem;
}
</style>
