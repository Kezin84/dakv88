<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const showScrollTop = ref(false);

const scrollToKetNoi = () => {
  const el = document.getElementById('lien-he');
  if (el) {
    const headerOffset = 100;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 400;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="floating-actions">
    <!-- Scroll to top -->
    <button 
      class="fab fab-top" 
      :class="{ 'fab-visible': showScrollTop }"
      @click="scrollToTop" 
      title="Lên đầu trang"
    >
      <i class="fas fa-chevron-up"></i>
    </button>

    <!-- Chat ngay -->
    <div class="fab-wrapper">
      <span class="pulse-ring pulse-chat"></span>
      <span class="pulse-ring pulse-chat ring-2"></span>
      <button class="fab fab-chat" @click="scrollToKetNoi" title="Chat ngay">
        <img src="https://i.ibb.co/4nLLMgPb/16566057.png" alt="Chat" class="fab-img" />
      </button>
    </div>

    <!-- Gọi điện -->
    <div class="fab-wrapper">
      <span class="pulse-ring pulse-call"></span>
      <span class="pulse-ring pulse-call ring-2"></span>
      <a class="fab fab-call" href="tel:0933511334" title="Gọi ngay: 0933511334">
        <img src="https://i.ibb.co/MD7Vps5W/icon-1968244-640.webp" alt="Gọi điện" class="fab-img" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.floating-actions {
  position: fixed;
  right: 22px;
  bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  z-index: 999;
}

/* ===== Wrapper ===== */
.fab-wrapper {
  position: relative;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== Pulse rings ===== */
.pulse-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(76, 175, 80, 0.3);
  pointer-events: none;
  animation: pulse-expand 2.4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

.pulse-ring.ring-2 {
  animation-delay: 1.2s;
}

@keyframes pulse-expand {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(2.1);
    opacity: 0;
  }
}

/* ===== FAB button ===== */
.fab {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  background: transparent;
  box-shadow: 0 0 12px rgba(76, 175, 80, 0.35);
  text-decoration: none;
  transition: transform 0.3s cubic-bezier(.4,0,.2,1),
              box-shadow 0.3s cubic-bezier(.4,0,.2,1);
  animation: fab-breathe 2.4s ease-in-out infinite;
}

@keyframes fab-breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.06); }
}

.fab:hover {
  animation: none;
  transform: scale(1.12);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.22);
}

.fab:active {
  transform: scale(0.96);
}

/* ===== Icon image ===== */
.fab-img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

/* ===== Pause pulse on hover ===== */
.fab-wrapper:hover .pulse-ring {
  animation-play-state: paused;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* ===== Scroll to top ===== */
.fab-top {
  width: 44px;
  height: 44px;
  background: var(--kv-blue, #0050b3);
  color: #fff;
  font-size: 1rem;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  pointer-events: none;
  transition: all 0.35s cubic-bezier(.4,0,.2,1);
  animation: none;
  box-shadow: 0 0 12px rgba(76, 175, 80, 0.4);
}

.fab-top.fab-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.fab-top:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 80, 179, 0.4);
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .floating-actions {
    right: 14px;
    bottom: 18px;
    gap: 14px;
  }

  .fab-wrapper {
    width: 50px;
    height: 50px;
  }

  .fab-chat,
  .fab-call {
    width: 50px;
    height: 50px;
  }

  .fab-img {
    width: 50px;
    height: 50px;
  }

  .fab-top {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
  }
}
</style>
