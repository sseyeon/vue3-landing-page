<!-- src/components/Footer.vue -->
<template>
  <footer>
    <!-- Footer 내용 정의 -->
    <div class="footer-left text-xs">
      <div class="pl-10">
        <p>고객센터 055-249-2711 | 평일 상담시간 09:00 ~ 18:00</p>
        <p>
          본 사이트의 콘텐츠는 저작권법의 보호를 받는 바 무단 전재, 복사, 배포
          등을 금합니다.
        </p>
        <p>
          Copyright &copy; BIGLEADER All Rights Reserved.
          <router-link to="/admin" class="mr-4">
            <font-awesome-icon
              :icon="['fas', 'user-lock']"
              style="color: #000"
            />
          </router-link>
        </p>
      </div>
    </div>
    <div class="footer-right pr-10">
      <a
        href="https://www.youtube.com/@big_leader"
        target="_blank"
        class="mr-4"
      >
        <font-awesome-icon
          :icon="['fab', 'youtube']"
          style="color: #e71304; font-size: 1.5rem"
        />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          style="color: #e1306c; font-size: 1.5rem"
        />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* 컴포넌트에 대한 스타일을 정의할 수 있습니다. */
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  /* margin-top: 4rem; */
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.footer-left {
  flex: 1;
}

.footer-right {
  display: flex;
  align-items: center;
}

.social-icon {
  width: 30px;
  height: 30px;
  margin-left: 10px;
}
</style>
