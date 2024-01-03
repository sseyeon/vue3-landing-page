<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          다양한 참여자들에게 제공되는 가치
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          빅리더는 혁신과 협력을 기반으로 한 가치 창출을 통해 다양한
          이해관계자들에게 긍정적인 영향을 미치고, 미래를 새롭게 이끌어가는
          역할을 수행합니다.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
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
    icon: "chart-line",
  },
  {
    name: "기업에게는 성장을",
    description:
      "기업은 빅리더의 혁신 가드닝 Hub를 통해 혁신적인 솔루션과 인재를 발굴하여 성과를 창출할 수 있습니다.",
    icon: "chart-bar",
  },
  {
    name: "대학과 빅리더에게는 실적과 역량을",
    description:
      "대학과 빅리더는 협력을 통해 현장에서의 실적과 전문 역량을 함께 키우며, 산학협력을 통한 지속적인 발전을 이룹니다.",
    icon: "chart-pie",
  },
  {
    name: "지자체에는 성공 모델을",
    description:
      "빅리더의 혁신 가드닝 Hub는 지자체에게 성공적인 모델을 제공하고 지역사회의 발전에 기여합니다.",
    icon: "chart-area",
  },
]
</script>