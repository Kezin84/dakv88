<script setup lang="ts">
import { ref } from 'vue';

const socialLinks = ref([
  { name: 'Zalo', info: '0933.511.334', id: 'zalo', color: '#0068FF', extraRound: true, link: 'https://zalo.me/0933511334' },
  { name: 'Facebook', info: 'Dinh Anh Kiot V', id: 'facebook', color: '#1877F2', extraRound: true, link: 'https://www.facebook.com/dinhanhkiotviet8888/' },
  { name: 'Telegram', info: '@dakv88', id: 'telegram', color: '#0088cc', extraRound: true, link: 'https://t.me/dakv88' },
  { name: 'Instagram', info: '@dakv88', id: 'instagram', color: '#E1306C', link: 'https://instagram.com/dakv88' },
  { name: 'Threads', info: '@dakv88', id: 'threads', color: '#000000', link: 'https://www.threads.net/@dakv88' },
  { name: 'X', info: '@dakv88', id: 'x', color: '#000000', link: 'https://x.com/dakv88' },
  { name: 'Signal', info: '@dakv.88', id: 'signal', color: '#3A76F0', link: 'https://signal.me/#p/+84933511334' },
  { name: 'TikTok', info: '@dakv88', id: 'tiktok', color: '#010101', link: 'https://www.tiktok.com/@dakv88' },
  { name: 'WeChat', info: '@dinhanh_kiotviet8888', id: 'wechat', color: '#07C160' },
  { name: 'LINE', info: '@dinhanh_kiotviet8888', id: 'line', color: '#00C300', link: 'https://line.me/R/ti/p/~dinhanh_kiotviet8888' },
  { name: 'KakaoTalk', info: '@dakv88', id: 'kakaotalk', color: '#FEE500' },
  { name: 'WhatsApp', info: '0933.511.334', id: 'whatsapp', color: '#25D366', link: 'https://wa.me/84933511334' },
  { name: 'Viber', info: '0933.511.334', id: 'viber', color: '#7360F2', link: 'viber://add?number=84933511334' },
  { name: 'Lotus', info: '@dakv88', id: 'lotus', color: '#00A65A' },
]);

const selectedSocial = ref<any>(null);
const copyStatus = ref('Copy');

const copyInfo = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.value = 'Đã copy!';
    setTimeout(() => {
      copyStatus.value = 'Copy';
    }, 2000);
  } catch (err) {
    console.error('Failed to copy', err);
  }
};

const openModal = (social: any) => {
  selectedSocial.value = social;
  document.body.style.overflow = 'hidden'; // prevent scrolling on background
};

const closeModal = () => {
  selectedSocial.value = null;
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <section id="ket-noi" class="social-section">
    <div class="container">
      <h3 class="section-title">KẾT NỐI VỚI <span class="highlight-text">ĐÌNH ANH</span></h3>
      <p class="section-subtitle">Sẵn sàng hỗ trợ và đồng hành cùng sự phát triển của bạn 24/7</p>
      <div class="social-grid">
        <button 
          v-for="social in socialLinks" 
          :key="social.id" 
          :class="['social-item', { 'extra-round': social.extraRound }]"
          @click="openModal(social)"
          :title="social.name"
        >
          <img :src="`/social/${social.id}-icon.png`" :alt="social.name" class="social-icon-img" />
        </button>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="selectedSocial" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal">&times;</button>
          
          <div class="modal-header">
            <div class="modal-icon-wrapper">
              <img :src="`/social/${selectedSocial.id}-icon.png`" :alt="selectedSocial.name" class="modal-icon" />
            </div>
            <h4 :style="{ color: selectedSocial.color }">{{ selectedSocial.name }}</h4>
          </div>
          
          <div class="modal-body">
            <p class="social-info-label">Thông tin liên hệ:</p>
            
            <div class="info-action-row">
              <a 
                v-if="selectedSocial.link" 
                :href="selectedSocial.link" 
                target="_blank" 
                class="social-info clickable-info" 
                :style="{ color: selectedSocial.color }"
                title="Nhấn để mở liên kết"
              >
                <strong>{{ selectedSocial.info }}</strong>
                <i class="fas fa-external-link-alt link-icon"></i>
              </a>
              <p 
                v-else
                class="social-info" 
                :style="{ color: selectedSocial.color }"
              >
                <strong>{{ selectedSocial.info }}</strong>
              </p>
              
              <button 
                class="btn-copy" 
                @click="copyInfo(selectedSocial.info)" 
                :style="copyStatus === 'Đã copy!' 
                  ? { backgroundColor: '#fff', color: selectedSocial.color, borderColor: selectedSocial.color } 
                  : { backgroundColor: selectedSocial.color, color: '#fff', borderColor: selectedSocial.color }"
              >
                <i :class="copyStatus === 'Đã copy!' ? 'fas fa-check' : 'far fa-copy'"></i>
                <span class="copy-text">{{ copyStatus }}</span>
              </button>
            </div>
            
            <div class="qr-container">
              <img :src="`/social/${selectedSocial.id}-qr.png`" alt="QR Code" class="qr-image" />
            </div>
            
            <p class="scan-hint">Quét mã QR để kết nối ngay</p>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.social-section {
  padding: 0;
  background: transparent;
  text-align: center;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 900;
  color: #333;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.highlight-text {
  background: linear-gradient(135deg, var(--kv-blue, #0050b3) 0%, var(--kv-green, #00b09b) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 1.15rem;
  color: #666;
  margin-bottom: 3.5rem;
  font-weight: 500;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 25px;
  max-width: 950px;
  margin: 0 auto;
}

.social-item {
  background: #fff;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 0;
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 5px 15px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 100px;
}

.social-item.extra-round {
  border-radius: 50%;
}

.social-item:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 15px 35px rgba(0, 176, 155, 0.2);
  border-color: var(--kv-green, #00b09b);
}

.social-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 992px) {
  .social-grid {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .social-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .social-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
}
</style>

<style>
/* Modal Styles (Global because of Teleport) */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background-color: #fff;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  position: relative;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  animation: slideUp 0.3s ease;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #f0f0f0;
  border: none;
  font-size: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  transition: all 0.2s;
}

.close-btn:hover {
  background: #e0e0e0;
  color: #333;
}

.modal-header {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5rem;
}

.modal-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.modal-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-header h4 {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
}

.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-info-label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
}

.social-info {
  font-size: 1.3rem;
  margin: 0;
}

.clickable-info {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: opacity 0.2s;
}

.clickable-info:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.link-icon {
  font-size: 0.9rem;
  opacity: 0.7;
}

.info-action-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 1.5rem;
}

.btn-copy {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid transparent;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-copy:hover {
  opacity: 0.85;
  transform: translateY(-1px);
}

.qr-container {
  width: 250px;
  height: 250px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
  border: 4px solid #fff;
}

.qr-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scan-hint {
  font-size: 0.95rem;
  color: #888;
  font-style: italic;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
