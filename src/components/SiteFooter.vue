<script setup lang="ts">
import { ref } from 'vue';

const trialLink = "https://www.kiotviet.vn/?refcode=3670";

const socialLinks = ref([
  { name: 'Zalo', info: '0933.511.334', id: 'zalo', extraRound: true, link: 'https://zalo.me/0933511334' },
  { name: 'Facebook', info: 'Dinh Anh Kiot V', id: 'facebook', extraRound: true, link: 'https://www.facebook.com/dinhanhkiotviet8888/' },
  { name: 'Telegram', info: '@dakv88', id: 'telegram', extraRound: true, link: 'https://t.me/dakv88' },
  { name: 'Instagram', info: '@dakv88', id: 'instagram', link: 'https://instagram.com/dakv88' },
  { name: 'Threads', info: '@dakv88', id: 'threads', link: 'https://www.threads.net/@dakv88' },
  { name: 'X', info: '@dakv88', id: 'x', link: 'https://x.com/dakv88' },
  { name: 'Signal', info: '@dakv.88', id: 'signal', link: 'https://signal.me/#p/+84933511334' },
  { name: 'TikTok', info: '@dakv88', id: 'tiktok', link: 'https://www.tiktok.com/@dakv88' },
  { name: 'WeChat', info: '@dinhanh_kiotviet8888', id: 'wechat' },
  { name: 'LINE', info: '@dinhanh_kiotviet8888', id: 'line', link: 'https://line.me/R/ti/p/~dinhanh_kiotviet8888' },
  { name: 'KakaoTalk', info: '@dakv88', id: 'kakaotalk' },
  { name: 'WhatsApp', info: '0933.511.334', id: 'whatsapp', link: 'https://wa.me/84933511334' },
  { name: 'Viber', info: '0933.511.334', id: 'viber', link: 'viber://add?number=84933511334' },
  { name: 'Lotus', info: '@dakv88', id: 'lotus' },
]);
</script>

<template>
  <footer class="site-footer">
    <!-- Footer chính: 2 cột -->
    <div class="footer-main">
      <div class="container footer-grid">
        <!-- Cột trái: Thông tin -->
        <div class="footer-info">
          <!-- Profile Card -->
          <div class="footer-profile-card">
            <div class="footer-logo">
              <img src="/logo-dakv88.png" alt="DAKV88" class="footer-logo-dakv" />
              <img src="/logo-kiotviet.png" alt="KiotViet" class="footer-logo-kv" />
            </div>
            <h4 class="footer-name">Nguyễn Võ Đình Anh (DAKV88)</h4>
            <p class="footer-title">Chuyên viên kinh doanh CTCP KIOTVIET</p>
          </div>

          <div class="footer-contact">
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span><strong>Địa chỉ:</strong> Tòa nhà WASECO, số 10 Phổ Quang, phường 2, quận Tân Bình, TP.Hồ Chí Minh</span>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span><strong>Email:</strong> <a href="mailto:anh.nvd@gmail.com">anh.nvd@gmail.com</a></span>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-phone-alt"></i>
              <span><strong>SĐT:</strong> <a href="tel:0933511334">0933.511.334</a></span>
            </div>
            
            <div class="contact-item">
              <i class="far fa-clock"></i>
              <span><strong>Thời gian làm việc:</strong> 24/24</span>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-globe"></i>
              <span><strong>Hỗ trợ:</strong> Tư vấn lắp đặt toàn quốc - nước ngoài</span>
            </div>

          </div>
        </div>

        <!-- Cột phải: Bản đồ và Kết nối -->
        <div class="footer-right-col">
          <div class="footer-map">
            <iframe 
              src="https://maps.google.com/maps?q=WASECO%20Building,%2010%20Ph%E1%BB%95%20Quang,%20T%C3%A2n%20B%C3%ACnh,%20TP.HCM&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style="border:0; border-radius: 12px;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div class="footer-social-mini">
            <p>Kết nối với chúng tôi:</p>
            <div class="mini-social-row">
              <a 
                v-for="social in socialLinks" 
                :key="social.id" 
                :href="social.link || '#'" 
                :target="social.link ? '_blank' : ''"
                :title="social.name"
                class="mini-social-icon"
              >
                <img :src="`/social/${social.id}-icon.png`" :alt="social.name" :class="{'extra-round': social.extraRound}" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer bottom -->
    <div class="footer-bottom">
      <div class="container footer-bottom-content">
        <p class="copyright">© 2026 Nguyễn Võ Đình Anh - Chuyên viên kinh doanh KiotViet</p>
        <p class="disclaimer">Sự thành công của bạn là mục tiêu của tôi.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: var(--kv-blue);
  color: var(--white);
}

/* Footer chính 2 cột */
.footer-main {
  padding: 3rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Cột trái */
.footer-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-profile-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  backdrop-filter: blur(5px);
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 15px;
}

.footer-logo-dakv {
  height: 50px;
  object-fit: contain;
}

.footer-logo-kv {
  height: 40px;
  object-fit: contain;
  background-color: white;
  padding: 6px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  line-height: 1.5;
  padding: 4px 0;
}

.contact-item strong {
  color: #ffd700;
  font-weight: 600;
}

.contact-item i {
  color: #ffd700;
  font-size: 1.1rem;
  margin-top: 3px;
  width: 20px;
  text-align: center;
}

.contact-item a {
  color: var(--white);
  transition: color 0.2s;
  text-decoration: none;
}

.contact-item a:hover {
  color: #f6d365;
}

.footer-name {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--white);
  margin-top: 1.5rem;
  margin-bottom: 0.4rem;
  line-height: 1.3;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #00ff88;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0;
}

.footer-right-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}



.footer-social-mini {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
}

.footer-social-mini p {
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 1.1rem;
  color: #f6d365;
}

.mini-social-row {
  display: grid;
  grid-template-columns: repeat(7, 36px);
  gap: 12px;
  justify-content: start;
}

.mini-social-icon {
  display: block;
  width: 36px;
  height: 36px;
  transition: transform 0.2s;
}

.mini-social-icon:hover {
  transform: translateY(-3px);
}

.mini-social-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background-color: #fff; /* In case of transparent logos */
}

.mini-social-icon img.extra-round {
  border-radius: 50%;
}

/* Cột phải: Bản đồ */
.footer-map {
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

/* Footer bottom */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-weight: 600;
  font-size: 0.9rem;
}

.disclaimer {
  font-size: 0.85rem;
  opacity: 0.7;
}

/* Mobile */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-map {
    height: 250px;
  }

  .footer-cta-banner h2 {
    font-size: 1.5rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>
