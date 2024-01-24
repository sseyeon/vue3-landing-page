<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto max-w-2xl lg:text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          참여 기업/기관 담당자 인터뷰
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          프로젝트를 통해 참여자들은 단순히 개별적인 성과를 넘어서, 팀워크와
          협력을 통한 보다 큰 성취를 경험하게 됩니다. 이 과정에서 발생하는
          아이디어 교환과 문제 해결 능력의 향상은 참여자 개개인뿐만 아니라
          소속된 조직에도 긍정적인 변화를 가져오며, 이는 궁극적으로 산업 전반에
          걸쳐 혁신적인 발전을 촉진합니다.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-1 lg:gap-y-16"
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
                <component
                  :is="feature.icon"
                  class="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              {{ feature.name }}
            </dt>
            <dd
              class="mt-2 text-base leading-7 text-gray-600"
              v-html="feature.description"
            ></dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { UserIcon } from "@heroicons/vue/24/outline"

const features = [
  {
    name: "한국고용정보원 김OO 팀장",
    description:
      "우선 그 6주라는 기간 동안 이렇게까지 결과물이 잘 나올까 하면서 좀 걱정이 되기도 하고 의아스럽기도 했는데 <b>학생들이 지금 단결하고 여러 가지 협동을 진행하면서 결과물을 이끌어냈구나</b> 라는 생각이 들면서 정말 훌륭하다. 라는 느낌을 받았습니다. 그리고 <b>저희가 원하는 부분들을 정확하게 캐치</b>를 해서 그것에 대한 <b>문제 해결책들을 모색</b>해 준 부분들이 굉장히 저에게도 도움이 되었다. 이렇게 말씀드리겠습니다.",
    icon: UserIcon,
  },
  {
    name: "Kotra 남OO 부장",
    description:
      "처음에 전종식 교수님께서 프로젝트를 말씀하시면서 <b>학생들을 통해서 에너지를 많이 받는다</b>는 말씀을 하시더라고요. 저도 똑같은 느낌이었었구요. 이제 제가 기획은 할 수 있지만 뭔가 분석할 때는 팀을 꾸려 서 해야되는데 하기 어려웠던 부분에 대해서 훌륭한 두팀을 만나서 수행을 잘하게 됐고 제가 <b>기획했던 의도 보다 훨씬 더 뛰어난 산출물이 나와서 아주 만족</b>스럽습니다.",
    icon: UserIcon,
  },
  {
    name: "세아베스틸 홍OO 연구소장",
    description:
      "빅리더 과정은 전년도에 저희그룹 사에서 진행한 부분을 듣고 저희들도 관심이 있어서 진행했는데 <b>참 좋은 프로그램</b>인것 것 같아요. 첫 번째는 학생들 입장에서 요즘 많이 요구되는 AI 응용 능력을 키우고, 현업에 들어오기 전에 커리어를 쌓을 수 있는 좋은 기회다는 생각이 듭니다. 특히 다른 부분과는 달리 여기는 컴퓨터 공학이나 통계학이라든가 전공자가 아닌 경영학이라든가 인문학을 전공한 사람들까지도 그런 과정을 통해가지고 준전문가로 양성이 된다는 부분은 굉장히 좋은 프로그램이다 그런 생각이 들었습니다. 최근에 <b>참여한 학생들의 자세를 보면서 저도 상당히 고마움</b>을 많이 느꼈습니다. <b>책임감을 가지고 주어진 6주 동안에 최선을 다하는 모습</b>을 보면서 어떻게 보면 지금은 프로가 아닌데도 불구하고 <b>마치 프로같은 이상의 그런 자세</b>를 가지고 하는 부분들이 굉장히 인상적이었습니다. 특히 이번 기간에는 <b>추석 연휴</b>가 끼어 있었기 때문에 어떤 그런 프로젝트를 진행하는 부분에 걱정도 했었는데 <b>학생들이 집에도 가지 않고 또 어떤 과제에 전념하는 모습</b>을 보면서 한편으로는 안쓰럽기도 하고 대단하다는 그런 느낌을 받았습니다. 이런 의지를 가지고 있다고 하면 어느 곳에 가서 어떤 그런 직장생활을 하더라도 충분히 경쟁력 있게 할 수 있다 생각이 들고 또 저희 회사 입장에서는 또 <b>이런 친구들 학생들이 저희 회사의 관심을 가져준다면은 항상 오픈되어 있고 같이 근무할 수 있겠다</b>, 그런 생각까지 들었습니다.",
    icon: UserIcon,
  },
  {
    name: "KoData Solution 안OO 본부장",
    description:
      "본 프로젝트 같은 경우는 <b>중소기업을 위한 생성형 AI 보고서 프로젝트</b>였습니다. <b>사실 되게 생소하고 어려운 프로젝트</b>일 수 있는데, 이 <b>7주 동안에 A, B 팀 둘 다 도메인 지식 부터 올리면서 굉장히 열심히 해줬습니다. 특히 연휴 기간에도 고민하고 같이 연구한 것들이 굉장히 좋았고요.</b> 오늘 일단 중간보고를 마쳤는데 굉장히 반응들이 좋고 또 교수님들 또는 외부담당관들, <b>대표들께서도 아주 좋게 평가를 하고 있습니다.</b> 그래서 <b>굉장히 뿌듯하고 학생들이 굉장히 고생 많았다고 생각합니다.</b>",
    icon: UserIcon,
  },
]
</script>