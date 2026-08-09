<script setup lang="ts">
const scrollToContact = () => {
  const el = document.getElementById('lien-he');
  if (el) {
    const headerOffset = 100;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <div class="logo-group">
        <img src="/logo-dakv88.png" alt="DAKV88 Logo" class="logo-dakv" />
        <img src="/logo-kiotviet.png" alt="KiotViet Logo" class="logo-kiotviet" />
      </div>
      
      <div class="header-actions">
        <a href="tel:0933511334" class="hotline hidden-mobile">
          <i class="fas fa-phone-alt"></i> 0933.511.334
        </a>
        <a href="#lien-he" class="btn-trial" @click.prevent="scrollToContact">
          Tư vấn ngay
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  background-color: var(--white);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  z-index: 100;
  padding: 8px 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  width: 100%;
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-dakv {
  height: 50px; 
  object-fit: contain;
}

.logo-kiotviet {
  height: 50px; 
  object-fit: contain;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.hotline {
  font-weight: 600;
  color: var(--kv-blue);
  font-size: 1rem;
}

.hotline i {
  margin-right: 5px;
}

.btn-trial {
  background-color: var(--kv-green);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.btn-trial:hover {
  background-color: var(--kv-green-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 166, 90, 0.3);
}

@media (max-width: 768px) {
  .hidden-mobile {
    display: none;
  }
}
</style>
