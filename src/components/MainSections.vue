<script setup lang="ts">
import SocialGrid from './SocialGrid.vue';
import CommunitySection from './CommunitySection.vue';
import TestimonialSection from './TestimonialSection.vue';

const sections = [
  {
    id: 1,
    isHero: true,
    title: 'Nguyễn Võ Đình Anh',
    subtitle: 'Chuyên viên kinh doanh phần mềm KiotViet',
    content: [
      'Phần mềm sử dụng cho quy mô nhỏ & lớn ở đa dạng các ngành hàng (trong nước và ngoài nước):',
      '<i class="fas fa-check-circle check-icon"></i> <strong>Bán buôn, Bán lẻ</strong>',
      '<i class="fas fa-check-circle check-icon"></i> <strong>Ăn uống, Giải trí</strong>',
      '<i class="fas fa-check-circle check-icon"></i> <strong>Sức khỏe, Làm đẹp</strong>',
      '<i class="fas fa-check-circle check-icon"></i> <strong>Khách sạn, Nhà nghỉ</strong>'
    ],
    ctas: [
      { text: 'DÙNG THỬ MIỄN PHÍ', type: 'secondary', action: 'link' },
      { text: 'CHAT VỚI NHÂN VIÊN', type: 'primary', action: 'scroll' }
    ]
  },
  {
    id: 2,
    title: 'Giải pháp phần cứng & phần mềm',
    subtitle: 'Hoạt động hoàn hảo trên mọi thiết bị',
    content: [
      'Sử dụng mượt mà và đồng bộ dữ liệu theo <strong>thời gian thực</strong> trên tất cả các thiết bị: Máy POS chuyên dụng, <strong>Điện thoại thông minh</strong> (mọi hệ điều hành iOS/Android), và <strong>Máy tính/Laptop</strong> cá nhân.'
    ],
    ctas: [
      { text: 'CHAT VỚI NHÂN VIÊN', type: 'primary', action: 'scroll' }
    ]
  },
  {
    id: 3,
    title: 'Đồng bộ hóa đa kênh',
    subtitle: 'Website chuẩn SEO & Mạng xã hội',
    content: [
      '<i class="fas fa-check-circle check-icon"></i> Hỗ trợ tạo <strong>Website bán hàng chuẩn SEO</strong> có thể tùy chỉnh.',
      '<i class="fas fa-check-circle check-icon"></i> Kết nối đồng bộ tồn kho, đơn hàng <strong>đa sàn Thương mại điện tử</strong> (Shopee, Lazada, TikTokShop, Tiki).',
      '<i class="fas fa-check-circle check-icon"></i> Tích hợp quản lý hội thoại <strong>Mạng xã hội</strong> (Facebook, Zalo, Zalo OA, Instagram) về một màn hình duy nhất.'
    ],
    ctas: [
      { text: 'DÙNG THỬ MIỄN PHÍ', type: 'secondary', action: 'link' }
    ]
  },
  {
    id: 4,
    title: 'Hỗ trợ Thuế & Kế toán',
    subtitle: 'Chuyên nghiệp - Minh bạch',
    content: [
      '<i class="fas fa-check-circle check-icon"></i> Cung cấp bộ công cụ <strong>quản lý tài chính</strong>, hỗ trợ xuất báo cáo doanh thu, lợi nhuận, khai báo thuế một cách dễ dàng và chính xác.',
      '<i class="fas fa-gift check-icon" style="color:#ff9800"></i> <strong>ĐẶC BIỆT:</strong> Tặng kèm <strong>Chữ ký số</strong> và <strong>Hóa đơn điện tử (HDDT)</strong> khi đăng ký.'
    ],
    ctas: [
      { text: 'ĐĂNG KÝ NGAY 8K /NGÀY', type: 'danger', action: 'scroll' }
    ]
  },
  {
    id: 6,
    title: 'Cộng đồng vững mạnh',
    subtitle: 'Chia sẻ & Cùng phát triển',
    content: [
      'Tham gia vào Cộng đồng những người sử dụng KiotViet để giao lưu, học hỏi <strong>kinh nghiệm kinh doanh thực chiến</strong>, giúp đỡ nhau cùng vượt qua khó khăn và phát triển bền vững.'
    ]
  },
  {
    id: 7,
    title: 'Đến lượt bạn bứt phá!',
    subtitle: 'Thành công đã được chứng minh',
    content: [
      'Hàng trăm ngàn <strong>hộ kinh doanh vừa và nhỏ</strong> trên khắp cả nước đã áp dụng KiotViet thành công để tối ưu quy trình và bứt phá doanh thu.',
      'Bạn còn chần chừ gì mà không tham gia ngay hôm nay!!'
    ],
    ctas: [
      { text: 'CHAT VỚI NHÂN VIÊN', type: 'primary', action: 'scroll' },
      { text: 'ĐĂNG KÝ NGAY 8K /NGÀY', type: 'danger', action: 'scroll' }
    ]
  }
];

const trialLink = "https://www.kiotviet.vn/?refcode=3670";

const handleCtaClick = (action: string) => {
  if (action === 'link') {
    window.open(trialLink, '_blank');
  } else if (action === 'scroll') {
    const el = document.getElementById('lien-he');
    if (el) {
      // Using scrollTo with exact calculation to bypass AOS/Transform bugs
      const headerOffset = 100; 
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
           top: offsetPosition,
           behavior: "smooth"
      });
    }
  }
};
</script>

<template>
  <div class="main-sections-wrapper">
    <section 
      v-for="(sec, index) in sections" 
      :key="sec.id"
      :class="['feature-section', { 'hero-section': sec.isHero }]"
    >
      <div :class="['container feature-layout', { 'reverse-layout': index % 2 !== 0 }]">
        <!-- TEXT COLUMN -->
        <div :class="sec.isHero ? 'hero-text-content' : 'text-content'">
          <h2 class="sec-title" data-aos="fade-up">{{ sec.title }}</h2>
          <h3 class="sec-subtitle" v-if="sec.subtitle" data-aos="fade-up" data-aos-delay="100">{{ sec.subtitle }}</h3>
          
          <!-- MOBILE IMAGE (Hidden on Desktop) -->
          <div class="image-content mobile-image" data-aos="fade-up" data-aos-delay="150">
            <div class="img-wrapper">
              <img :src="`/sections/sec-${sec.id}.jpg`" :alt="sec.title" :class="['feature-image', { 'hero-image': sec.isHero }]" loading="lazy" />
            </div>
          </div>
          
          <div class="sec-desc">
            <p 
              v-for="(p, i) in sec.content" 
              :key="i" 
              :class="{'list-item': p.includes('check-icon')}"
              data-aos="fade-up" 
              :data-aos-delay="200 + (i * 100)"
              v-html="p"
            >
            </p>
          </div>

          <div 
            v-if="sec.ctas && sec.ctas.length > 0" 
            class="cta-group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button 
              v-for="(cta, idx) in sec.ctas" 
              :key="idx"
              :class="{
                'btn-cta': cta.type === 'primary',
                'btn-cta-secondary': cta.type === 'secondary',
                'btn-cta-danger': cta.type === 'danger'
              }"
              @click="handleCtaClick(cta.action)"
            >
              {{ cta.text }}
            </button>
          </div>
        </div>
        
        <!-- DESKTOP IMAGE COLUMN (Hidden on Mobile) -->
        <div class="image-content desktop-image" data-aos="fade-up" data-aos-delay="200">
          <div class="img-wrapper">
            <img :src="`/sections/sec-${sec.id}.jpg`" :alt="sec.title" :class="['feature-image', { 'hero-image': sec.isHero }]" loading="lazy" />
          </div>
        </div>
      </div>
      
      <!-- NESTED BLOCKS -->
      <div class="container nested-wrapper" v-if="sec.id === 6">
        <div class="nested-component" data-aos="fade-up" data-aos-delay="200">
          <CommunitySection />
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL SECTION -->
    <section class="feature-section">
      <div class="container">
        <div class="nested-component" data-aos="fade-up">
          <TestimonialSection />
        </div>
      </div>
    </section>

    <!-- SOCIAL GRID SECTION -->
    <section class="feature-section bottom-section">
      <div class="container">
        <!-- Stable anchor point unaffected by AOS transforms -->
        <div id="lien-he" style="width: 100%; height: 1px; visibility: hidden;"></div>
        
        <div class="nested-component" data-aos="fade-up">
          <SocialGrid />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.main-sections-wrapper {
  background-color: var(--white);
  padding-bottom: 2rem;
}

.feature-section {
  padding: 4rem 0;
  border-bottom: 1px solid rgba(0, 80, 179, 0.05);
  position: relative;
}

.feature-section:nth-child(3n + 1) {
  background-color: #f2fcf5; /* Xanh lá cây nhẹ */
}

.feature-section:nth-child(3n + 2) {
  background-color: #f4fafe; /* Xanh dương nhẹ */
}

.feature-section:nth-child(3n) {
  background-color: #ffffff; /* Trắng */
}

:deep(.community-section) {
  background-color: transparent !important;
  padding: 0 !important;
}

:deep(.social-section) {
  background-color: transparent !important;
  padding: 0 !important;
}

.bottom-section {
  border-top: 1px solid rgba(0, 80, 179, 0.05);
  border-bottom: none;
}

/* SECTION CONTAINER */
.feature-layout {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.feature-layout.reverse-layout {
  flex-direction: row-reverse;
}


/* TEXT COLUMN */
.text-content, .hero-text-content {
  flex: 1.1;
  text-align: left;
}

.hero-text-content .sec-title {
  font-size: 3.5rem;
  letter-spacing: -1.5px;
}

.sec-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--kv-blue);
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.sec-subtitle {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--kv-green);
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.sec-desc p {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 1.2rem;
}

:deep(.sec-desc p strong) {
  color: #1a202c;
  font-weight: 700;
}

.sec-desc p.list-item {
  display: block;
  margin-bottom: 1rem;
  color: #2d3748;
  padding-left: 1.8rem;
  text-indent: -1.8rem;
}

:deep(.check-icon) {
  color: var(--kv-green);
  font-size: 1.1rem;
  margin-right: 8px;
}

/* BUTTONS */
.cta-group {
  display: flex;
  gap: 15px;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.btn-cta {
  display: inline-block;
  background: linear-gradient(135deg, var(--kv-green) 0%, #00b09b 100%);
  color: #fff;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 15px 35px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(0, 166, 90, 0.3);
  transition: all 0.3s ease;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0, 166, 90, 0.4);
}

.btn-cta-danger {
  display: inline-block;
  background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
  color: #fff;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 15px 35px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(255, 75, 43, 0.3);
  transition: all 0.3s ease;
}

.btn-cta-danger:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(255, 75, 43, 0.4);
}

.btn-cta-secondary {
  display: inline-block;
  background: transparent;
  color: var(--kv-green);
  border: 2px solid var(--kv-green);
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 13px 33px; /* slightly less due to border */
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-cta-secondary:hover {
  background: rgba(0, 176, 155, 0.08);
  transform: translateY(-3px);
}

/* IMAGE COLUMN */
.image-content {
  flex: 0.9;
  display: flex;
  justify-content: center;
}

.img-wrapper {
  width: 100%;
  max-width: 550px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 80, 179, 0.1);
  transition: transform 0.5s ease;
}

.img-wrapper:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 50px rgba(0, 80, 179, 0.15);
}

/* Specifically for Hero Image */
.hero-image {
  max-width: 650px;
  box-shadow: 0 20px 40px rgba(0, 80, 179, 0.15);
}

.feature-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* NESTED WRAPPER */
.nested-wrapper {
  margin-top: 4rem;
}

.nested-component {
  width: 100%;
}

.mobile-image {
  display: none;
}

.desktop-image {
  display: flex;
}

/* Mobile Responsive */
@media (max-width: 992px) {
  .feature-section {
    padding: 2.5rem 0;
  }

  .feature-layout,
  .feature-layout.reverse-layout {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .desktop-image {
    display: none;
  }
  
  .mobile-image {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    width: 100%;
  }
  
  .text-content, .hero-text-content {
    text-align: center;
    width: 100%;
    flex: none;
  }

  .image-content {
    width: 100%;
    flex: none;
  }

  .img-wrapper {
    max-width: 100%;
  }

  .feature-image,
  .hero-image {
    max-width: 100%;
    width: 100%;
  }
  
  .sec-title {
    font-size: 1.8rem;
    word-break: keep-all;
  }

  .hero-text-content .sec-title {
    font-size: 2.2rem;
  }

  .sec-subtitle {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .sec-desc p {
    font-size: 1rem;
    text-align: left;
  }

  .sec-desc p.list-item {
    text-align: left;
    display: block;
    padding-left: 2rem;
    text-indent: 0;
  }

  .sec-desc p.list-item :deep(.check-icon) {
    margin-left: -1.8rem;
  }
  
  .cta-group {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .btn-cta,
  .btn-cta-secondary,
  .btn-cta-danger {
    font-size: 0.95rem;
    padding: 12px 28px;
    width: 100%;
    max-width: 320px;
    text-align: center;
  }
}
</style>

