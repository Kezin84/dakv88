<script setup lang="ts">
const testimonials = [
  {
    name: 'Anh Trần Văn Nam',
    store: 'Chuỗi Siêu thị Mini NamMart',
    content: 'Từ ngày dùng KiotViet, việc quản lý kho và doanh thu trở nên cực kỳ nhàn nhã. Tôi không còn phải đau đầu kiểm kê mỗi tối nữa.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Chị Lê Hoài Thu',
    store: 'Shop Mỹ phẩm Auth Thu Lê',
    content: 'Đồng bộ cực nhanh với Shopee và TikTok Shop. Mình ngồi một chỗ quản lý ngàn đơn mà không sợ sót, chuyên viên hỗ trợ lại rất nhiệt tình.',
    img: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Anh Phạm Hoàng',
    store: 'Nhà hàng Hải sản Biển Xanh',
    content: 'Giao diện đặt bàn và gọi món cho quán ăn rất trực quan. Nhân viên mình chỉ mất 15 phút là quen việc. Tuyệt vời!',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=150&q=80'
  }
];

const handleScroll = () => {
  const el = document.getElementById('lien-he');
  if (el) {
    const headerOffset = 100;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <div class="review-section">
    <div class="container text-center">
      <h3 class="section-title">ĐÁNH GIÁ TỪ <span class="highlight-text">KHÁCH HÀNG</span></h3>
      <p class="section-subtitle">Cảm nhận thực tế từ những chủ cửa hàng đang sử dụng KiotViet</p>
    </div>
    <div class="review-grid">
      <div 
        class="review-card" 
        v-for="(item, index) in testimonials" 
        :key="index"
      >
        <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
        <p class="review-text">"{{ item.content }}"</p>
        <div class="review-author">
          <img :src="item.img" :alt="item.name" class="review-avatar" />
          <div class="review-info">
            <h4>{{ item.name }}</h4>
            <span>{{ item.store }}</span>
          </div>
        </div>
        <button class="btn-review-chat" @click="handleScroll">
          CHAT VỚI NHÂN VIÊN
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-section {
  width: 100%;
  padding: 2rem 0;
}

.text-center {
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

.review-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.review-card {
  background: linear-gradient(135deg, var(--kv-blue, #0050b3) 0%, #003d8a 100%);
  border: none;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 80, 179, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  text-align: left;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 45px rgba(0, 80, 179, 0.3);
}

.quote-icon {
  font-size: 2.5rem;
  color: var(--kv-green, #00ff88);
  opacity: 0.2;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}

.review-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  z-index: 1;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1.5rem;
}

.review-avatar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--kv-green, #00ff88);
}

.review-info h4 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;
}

.review-info span {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.btn-review-chat {
  display: block;
  width: 100%;
  margin-top: 1.5rem;
  background-color: #ffcc00; /* Nền Vàng */
  color: var(--kv-blue, #0050b3); /* Chữ Xanh dương */
  font-family: inherit;
  font-size: 1rem;
  font-weight: 800;
  padding: 12px 20px;
  border-radius: 50px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 204, 0, 0.3);
}

.btn-review-chat:hover {
  transform: translateY(-2px);
  background-color: #ffe033;
  box-shadow: 0 6px 20px rgba(255, 204, 0, 0.5);
}

@media (max-width: 768px) {
  .review-grid {
    grid-template-columns: 1fr;
  }
}
</style>
