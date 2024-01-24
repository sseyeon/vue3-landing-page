<template>
  <div class="bg-white mb-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl lg:text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          빅리더의 역할
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          빅리더는 청년에게는 변화와 성장을, 참여기관 및 기업에게는 성과를,
          참여대학에게는 실적을, 지자체에게는 성공모델을 잇(IT)는 혁신 가드닝
          허브로써,<br />새로운 인재양성 및 가치창출 시스템을 구현해왔습니다.
        </p>
      </div>
      <div class="mx-auto mt-24 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
              >
                <font-awesome-icon
                  :icon="['fas', feature.icon]"
                  class="h-6 w-6 text-white"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
        <dl class="grid grid-cols-2 gap-x-8 gap-y-10 max-w-full mt-24">
          <div
            v-for="image in images"
            :key="image.imgSrc"
            class="relative pl-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              :src="image.imgSrc"
              class="w-full h-full object-cover shadow-lg rounded-full"
              alt=""
            />
          </div>
        </dl>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-10 max-w-full mt-24">
          <div
            v-for="description in descriptions"
            :key="description.name"
            class="relative pl-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500"
              >
                <font-awesome-icon
                  :icon="['fas', description.icon]"
                  class="h-6 w-6 text-white"
                />
              </div>
              {{ description.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ description.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
    
    <script setup>
const features = [
  {
    name: "청년에게는 변화와 성장을",
    description:
      "빅리더의 혁신 가드닝 Hub는 청년들에게 새로운 기회와 도전을 제공하며, 지속적인 변화와 성장을 촉진합니다.",
    icon: "user",
  },
  {
    name: "기업에게는 성과를",
    description:
      "기업은 빅리더의 혁신 가드닝 Hub를 통해 혁신적인 솔루션과 인재를 발굴하여 성과를 창출할 수 있습니다.",
    icon: "building",
  },
  {
    name: "대학과 빅리더에게는 실적과 역량을",
    description:
      "대학과 빅리더는 협력을 통해 현장에서의 실적과 전문 역량을 함께 키우며, 산학협력을 통한 지속적인 발전을 이룹니다.",
    icon: "graduation-cap",
  },
  {
    name: "지자체에는 성공 모델을",
    description:
      "빅리더의 혁신 가드닝 Hub는 지자체에게 성공적인 모델을 제공하고 지역사회의 발전에 기여합니다.",
    icon: "location-dot",
  },
]
const descriptions = [
  {
    name: "기업들과 공진화(Co-Evolution)모델을 통한 다양한 성과 창출",
    description:
      "빅리더는 9년 동안 서울시, JTBC(방송국), GS칼텍스, 국립농산물품질관리원, 한국관광공사, 국립공원공단, KOTRA 세아창원특수강, 한국수자원공사 등 약 30여개 이상 지자체, 방송국, 국가기관, 공공기관 및 기업 등과 협력하여 협업 체계를 구축, 약 70여 건의 Co-Creation Project를 진행, 다양한 성과 창출 및 공진화(Co-Evolution) 모델 구현",
    icon: "chart-line",
  },
  {
    name: "빅리더는 청년들의 사회 진출에 결정적 기여",
    description:
      "빅리더는 평상시에 학생들이 접할 수 없는 국내 최고 공공기관이나 기업들과 협업 프로젝트를 전국에서 선발된 청년들이 서로 경쟁하면서 협업 및 소통을 하며 성장하는 결코 잊혀지지 않는 인생의 터닝포인트이자 청년 사회진출에 결정적 기여",
    icon: "briefcase",
  },
]

const images = [
  {
    imgSrc: require("@/assets/images/bigleader-outcome/outcome-picture-01.jpeg"),
  },
  {
    imgSrc: require("@/assets/images/bigleader-outcome/outcome-picture-02.png"),
  },
]
</script>