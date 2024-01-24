<!-- src/views/About.vue -->
<template>
  <div>
    <Header />
    <TitleComponent titleText="Introduce" subText="" />
    <div
      class="mt-4 mb-8 z-10"
      :class="{
        'sticky top-[77px]  bg-white opacity-75 justify-center w-full':
          isActive,
      }"
    >
      <!-- <div class="flex justify-center space-x-4">
        <button
          @click="changeCategory('sec01')"
          :class="{ 'text-blue-500 ': activeCategory === 'sec01' }"
        >
          추진배경
        </button>
        <button
          @click="changeCategory('sec02')"
          :class="{ 'text-blue-500 ': activeCategory === 'sec02' }"
        >
          핵심추진전략
        </button>
        <button
          @click="changeCategory('sec03')"
          :class="{ 'text-blue-500 ': activeCategory === 'sec03' }"
        >
          혁신가드닝
        </button>
        <button
          @click="changeCategory('sec04')"
          :class="{
            'text-blue-500 ': activeCategory === 'sec04',
          }"
        >
          성과
        </button>
      </div> -->
    </div>
    <div class="mt-20">
      <section ref="sec01" id="#sec01">
        <div
          class="relative h-[75vh] mt-20 sm:w-3/4 lg:w-9/12 mx-auto flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="@/assets/images/logon_bl.png" class="mt-20" />
          <p class="text-center text-2xl mt-4 mb-40 font-semibold">
            선한 영향력과 혁신으로 <br />세상을 이롭게 합니다.
          </p>
        </div>
        <div
          class="relative lg:h-[75vh] mt-20 sm:w-3/4 lg:w-9/12 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mb-24"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <img
                class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full rounded-full"
                src="@/assets/images/grape.png"
                alt=""
              />
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-bold">포도나무 비전</h1>
              <p
                class="text-xl my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-blue-300"
                />
                Innovation Tree for Making Social Good

                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-blue-300"
                />
              </p>
              <p
                class="text-gray-600 my-4 text-center text-lg lg:text-left sm:w-3/4 lg:w-full"
              >
                빅리더는 <br />
                새로운 가치 창출 및 사회적 선을 위한 선순환의 혁신 성장을
                이루어가고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-24">
          <AboutValue />
        </div>
      </section>
      <section
        ref="sec02"
        id="#sec02"
        class="mt-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <!-- Feature #1 -->
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-12">
          <div
            class="container lg:h-[75vh] flex flex-col lg:flex-row-reverse items-center justify-center gap-x-16 mb-24"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <img
                class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="@/assets/images/bigleader-growth.png"
                alt=""
              />
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-semibold">
                빅리더의 선순환 가치창출 시스템
              </h1>
              <p
                class="text-xl my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-blue-300"
                />
                Money Ball 이론
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-blue-300"
                />
              </p>
              <p
                class="text-gray-600 my-4 text-lg leading-8 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                이제까지 완전히 다른 새로운 접근 방식(<b>Money Ball 방식</b
                >)으로 진행 <br />
                <span class="text-orange-500">*</span> Money Ball 방식은
                저비용으로 높은 효율을 창출하는 방식 『머니볼: 불공정한 게임을
                승리로 이끄는 과학』으로 추진
                <br />
                <span class="text-orange-500">*</span> Real Learning, Real
                Impact 방식으로 X+AI 학위/비학위 과정 진행
              </p>
            </div>
          </div>
        </div>
        <!-- Feature #2 -->
      </section>
      <section>
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-48">
          <div class="bg-white">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div
                class="mx-auto max-w-2xl lg:text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  빅리더 X + AI Chef 단
                </p>

                <p class="mt-6 text-lg leading-8 text-gray-600">
                  빅리더의 선순환 가치창출 시스템은 <br />여러 참여자로 구성된
                  AI Chef 단이 함께 만들어갑니다.
                </p>
                <img
                  src="@/assets/images/bigleader-ai-chef.png"
                  class="rounded-lg mt-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref="sec03" id="#sec03">
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-48">
          <div
            class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-16"
          >
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1
                class="text-3xl font-bold"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                빅리더의 혁신 가드닝 HUB
              </h1>
              <p
                class="text-xl my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-blue-300"
                />
                ABCD-MBC 모델
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-blue-300"
                />
              </p>

              <div
                class="text-gray-600 text-lg my-4 leading-8 text-center lg:text-left sm:w-3/4 lg:w-full"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                빅리더의 혁신 가드닝 HUB은 <b>ABCD-MBC</b> 모델을 통해 사회
                문제를 해결하고, 인재 양성에 기여하는 중심적인 역할을 합니다.<br /><br />
                <img
                  src="@/assets/images/bigleader-guiding-01.png"
                  class="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="relative mt-28 sm:w-3/4 lg:w-9/12 mx-auto mb-24">
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
                  가장 중요한 4가지 포인트
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  빅리더가 학생들의 내적 동기를 위해 빅리더가 고민하고 추구하는
                  가장 중요한 4가지 포인트는 <br />자신감(Competence),
                  자주성(Autonomy), 연결성(Relatedness), 희망 성장 사다리
                  입니다.
                </p>
              </div>
              <div
                class="mx-auto mt-24 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
              >
                <dl
                  class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
                >
                  <div
                    class="relative pl-16"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                      <div
                        class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'user']"
                          class="h-6 w-6 text-white"
                        />
                      </div>
                      자신감(Competence)
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                      빅리더가 문제를 해결하는 과정을 도와줌으로써 학생 스스로
                      문제를 해결할 수 있다는 자신감을 얻도록 하는 것 (성취감이
                      중요)
                    </dd>
                  </div>

                  <div
                    class="relative pl-16"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                      <div
                        class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'user']"
                          class="h-6 w-6 text-white"
                        />
                      </div>
                      자주성(Autonomy)
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                      학생 개개인이 자기 주도적으로 원하는 방식으로 팀을
                      이루어서 서로에게 알려주면서 학습을 하고 Portfolio를
                      만들어 가는 것
                    </dd>
                  </div>
                  <div
                    class="relative pl-16"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                      <div
                        class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'user']"
                          class="h-6 w-6 text-white"
                        />
                      </div>
                      연결성(Relatedness)
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                      지금 배우는 것들이 어떤 문제를 해결하기 위한 것인지, 이
                      문제에 대해 얼마나 많은 사람들이 관심을 가지고 있고,
                      해결하기 위해 노력하고 있는지, 그 문제를 해결함으로써 어떤
                      효과를 기대할 수 있는지 등에 대해서 학생들이 지속적으로 알
                      수 있도록 하는 것
                    </dd>
                  </div>
                  <div
                    class="relative pl-16"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <dt class="text-base font-semibold leading-7 text-gray-900">
                      <div
                        class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'user']"
                          class="h-6 w-6 text-white"
                        />
                      </div>
                      희망 성장 사다리
                    </dt>
                    <dd class="mt-2 text-base leading-7 text-gray-600">
                      학생들에게 새로운 출구를 만들어 주고 희망적으로 성장할 수
                      있도록 사다리를 만들고 막힌 길을 뚫어주는 것. 새로운 것을
                      만들고 현장에 적용함으로써 새로운 가치를 창출한다.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref="sec01" id="#sec01">
        <div
          class="relative lg:h-[75vh] mt-20 sm:w-3/4 lg:w-9/12 mx-auto flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="@/assets/images/logon_bl.png" class="mt-20" />
          <p class="text-center text-2xl mt-4 mb-40 font-semibold">
            지역특화 AI 혁신생태계 조성을 위한<br />
            새로운 인재 양성 시스템의 구현
          </p>
        </div>
      </section>
      <section>
        <div
          class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-56"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mb-24"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <img
                class="w-2/6 h-2/6 sm:w-3/4 sm:h-3/4 rounded-full"
                src="@/assets/images/Jongsik_Jeon.png"
                alt=""
              />
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-bold">새로운 인재 양성 시스템 구현</h1>
              <p
                class="text-xl my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-blue-300"
                />
                지식 중심(Contents-wide)이 아닌,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;경험 중심(Experience-wide)으로<br />
                &nbsp;&nbsp;&nbsp;&nbsp;패러다임을 바꿔야 한다.
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-blue-300"
                />
              </p>
              <p
                class="text-gray-600 my-4 text-center text-lg lg:text-left sm:w-3/4 lg:w-full"
              >
                빅리더의 경쟁력은 경험 중심의 교육에서 나온다.<br />경험을
                통해서 학생 스스로 배우고 성장하도록 돕는 것이 <br />빅리더의
                역할이다.
              </p>
            </div>
          </div>
          <div
            class="container mx-auto mt-24 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
          >
            <div class="grid grid-cols-1 gap-x-8 gap-y-10 max-w-full mt-24">
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500"
                  >
                    <font-awesome-icon
                      :icon="['fas', '1']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  프로젝트 시스템 구현 및 성공 모델
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  빅리더는 청년들이 적극적으로 참여할 수 있는 양질의 프로젝트
                  시스템 구현 및 유니크한 Real Learning, Real impact의 새로운
                  성공 모델을 구현해 왔습니다.
                </dd>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-500"
                  >
                    <font-awesome-icon
                      :icon="['fas', '2']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  AI 융합 혁신 서비스 및 Co-Creation 프로젝트
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  빅리더는 AI 융합 혁신서비스 구현에 관심 있는 기관들과 기업들과
                  협업하여 양질의 Co-Creation 프로젝트를 선기획하고, 이를 위한
                  프로젝트 멘토 풀을 확보하고 현장에 적용할 수 있는 서비스의 PoC
                  (Proof of Concept) 구현해 왔습니다.
                </dd>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500"
                  >
                    <font-awesome-icon
                      :icon="['fas', '3']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  혁신 공유지(Innovation Commons) 조성 및 Control Tower 역할
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  빅리더는 PoC를 기반으로 현장에 활용하는 가치창출 사업에
                  적용하는 새로운 프로세스의 도입을 통해 혁신 공유지(Innovation
                  Commons) 조성을 위한 Control Tower로서의 새롭고도 강력한
                  역할을 하고 있습니다.
                </dd>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-gray-500"
                  >
                    <font-awesome-icon
                      :icon="['fas', '4']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  데이터 및 AI 산업의 혁신 공유지 및 지역특화 AI 혁신 생태계
                  조성
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  빅리더는 데이터 혁신인재 양성 현장 활용중심의 혁신서비스 개발
                  → 정주기반의 혁신 서비스 가드닝 (Innovation Gardening) →
                  데이터 및 AI 산업의 혁신 공유지 활성화 → 혁신 D.N.A. 생태계
                  조성 등 선순환으로 이어지는 연대∙협력∙상생을 기반으로 한 분수
                  효과의 새로운 데이터 및 AI 산업 혁신공유지(Innovation
                  Commons)와 혁신 D.N.A 생태계 조성을 하는데 기여하고 있습니다.
                </dd>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="relative mt-28 sm:w-3/4 lg:w-9/12 mx-auto mb-48">
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
                  완전히 Unique한 빅리더의 성공 모델, X + AI
                </p>
                <p class="text-xl my-3 text-center sm:w-3/4 lg:w-full mt-6">
                  <font-awesome-icon
                    :icon="['fas', 'quote-left']"
                    class="text-blue-300"
                  />
                  현장적용 프로젝트 포트폴리오와 가치창출 AI 대학원
                  <font-awesome-icon
                    :icon="['fas', 'quote-right']"
                    class="text-blue-300"
                  />
                </p>

                <p class="mt-6 text-lg leading-8 text-gray-600">
                  청년들에게 사회진출시 가장 필요로 하는 것은 사회에서 요구하는
                  문제 해결을 위한 실천적 지식학습역량 및 문제해결 창의능력을
                  기반으로 한 협업∙소통∙배려를 통한 프로젝트 경험과 Portfolio
                  그리고 가치창출 역량입니다.
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  빅리더는 기업과 청년이 가장 필요로 하는 것을 충족시킵니다.
                </p>
                <img
                  src="@/assets/images/bigleader-success-model.png"
                  class="rounded-lg mt-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
                <img
                  src="@/assets/images/bigleader-success-model-01.png"
                  class="rounded-lg mt-20"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-48">
          <div
            class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24 mb-24"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <img
                class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                src="@/assets/images/bigleader-guiding-result.png"
                alt=""
              />
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-semibold">
                지역특화 AI 혁신 생태계 조성
              </h1>
              <p
                class="text-xl my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-blue-300"
                />
                빅리더 혁신 가드닝 HUB의 성과와 열매
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-blue-300"
                />
              </p>
              <p
                class="text-gray-600 my-4 text-lg leading-8 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                빅리더 혁신 가드닝 HUB는 <br />
                데이터 인재 양성 및 청년들의 사회진출 및 지역소멸 그리고
                인구감소 대응에 실질적 기여를 하는 정주기반의 지역특화 AI 생태계
                조성에 결정적 기여를 합니다.
              </p>
            </div>
          </div>
          <div class="mx-auto mt-24 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div class="grid grid-cols-3 gap-x-8 gap-y-10 max-w-full mt-24">
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-300"
                  >
                    <font-awesome-icon
                      :icon="['fas', '1']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  현장 적용 서비스화
                </dt>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-300"
                  >
                    <font-awesome-icon
                      :icon="['fas', '2']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  SCI 등 우수논문 게재
                </dt>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-300"
                  >
                    <font-awesome-icon
                      :icon="['fas', '3']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  특허 출원
                </dt>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-400"
                  >
                    <font-awesome-icon
                      :icon="['fas', '4']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  프로젝트 고도화 장학금,장학증서
                </dt>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-400"
                  >
                    <font-awesome-icon
                      :icon="['fas', '5']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  오픈 소스 개발에 기여
                </dt>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-400"
                  >
                    <font-awesome-icon
                      :icon="['fas', '6']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  공동 R&BD화
                </dt>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500"
                  >
                    <font-awesome-icon
                      :icon="['fas', '7']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  중소 기업 동반 성장에 기여
                </dt>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500"
                  >
                    <font-awesome-icon
                      :icon="['fas', '8']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  Co-Creation 기반의 새로운 데이터 산업 플랫폼의 주요 서비스화
                </dt>
              </div>
              <div
                class="relative pl-16"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div
                    class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500"
                  >
                    <font-awesome-icon
                      :icon="['fas', '9']"
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  <span class="text-orange-500">*</span>디지털 노마드 대학원을
                  통한 석사 학위 및 박사 학위 취득
                </dt>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto">
          <div
            class="container flex flex-col lg:flex-row items-center justify-center gap-x-24 mb-24"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <!-- Image -->
            <div class="flex flex-1 justify-center z-0 mb-10 lg:mb-0">
              <img
                class="w-1/2 h-1/2 lg:w-2/3 lg:h-full"
                src="@/assets/images/4g-triangle-01.png"
                alt=""
              />
            </div>
            <!-- Content -->
            <div class="flex flex-1 flex-col items-center lg:items-start">
              <h1 class="text-3xl font-bold">격이 다른 커리큘럼</h1>
              <p
                class="text-xl my-4 text-center lg:text-left sm:w-3/4 lg:w-full"
              >
                <font-awesome-icon
                  :icon="['fas', 'quote-left']"
                  class="text-blue-300"
                />
                사전 교육부터, 현장 프로젝트까지 함께.
                <font-awesome-icon
                  :icon="['fas', 'quote-right']"
                  class="text-blue-300"
                />
              </p>
              <p
                class="text-gray-600 my-4 leading-8 text-center lg:text-left sm:w-3/4 lg:w-full text-lg"
              >
                선순환 가치 창출 시스템을 통해, 우리는 다양한 층위의
                참여자들에게 변화와 성장의 기회를 제공합니다. 이를 위한 우리의
                주요 지향점은 다음과 같습니다:
              </p>
            </div>
          </div>
        </div>
        <!-- Feature #3 -->
        <div class="relative mt-20 sm:w-3/4 lg:w-9/12 mx-auto mb-48">
          <div
            class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-lg mt-4 mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              class="bg-gray-100 flex flex-col items-center text-center rounded-lg p-4"
            >
              <div class="m-2 font-bold text-xl text-blue-700">01</div>
              <span class="text-xl m-2"
                ><font-awesome-icon :icon="['fas', 'user']"
              /></span>
              <h3 class="mb-2 text-lg font-semibold">전국 단위 학생 선발</h3>
              <p class="text-gray-600">
                뛰어난 학생들을 발굴하고 육성하기 위한 광범위한 선택 과정을
                통해, 청년들에게 새로운 기회와 도전을 제공합니다.
              </p>
            </div>
            <div
              class="bg-blue-100 flex flex-col items-center text-center rounded-lg p-4"
            >
              <div class="m-2 font-bold text-xl">02</div>
              <span class="text-xl m-2"
                ><font-awesome-icon :icon="['far', 'pen-to-square']"
              /></span>
              <h3 class="mb-2 text-lg font-semibold">
                실천적 지식학습역량 강화
              </h3>
              <p class="text-gray-600">
                온·오프라인 교육, 몰입환경, 동기부여, 팀 스터디, LMS 등을 통해
                실천적인 지식학습 역량을 강화합니다.
              </p>
            </div>
            <div
              class="bg-gray-100 flex flex-col items-center text-center rounded-lg p-4"
            >
              <div class="m-2 font-bold text-xl text-blue-700">03</div>
              <span class="text-xl m-2"
                ><font-awesome-icon :icon="['fas', 'fa-folder-open']"
              /></span>
              <h3 class="mb-2 text-lg font-semibold">Co-Creation Project</h3>
              <p class="text-gray-600">
                Collective Mentoring을 통해 실질적인 업무 경험을 얻고, 현장 파견
                프로젝트를 통해 전문 지식을 심화시킵니다.
              </p>
            </div>
            <div
              class="bg-blue-100 flex flex-col items-center text-center rounded-lg p-4"
            >
              <div class="m-2 font-bold text-xl">04</div>
              <span class="text-xl m-2"
                ><font-awesome-icon :icon="['fas', 'fa-chart-line']"
              /></span>
              <h3 class="mb-2 text-lg font-semibold">
                경험 강화를 통한 Growth
              </h3>
              <p class="text-gray-600">
                선순환 가치 창출 시스템을 통한 Growth는 파트너와의 협력, 현장
                적용 서비스화, 특허 출원, 창업, SCI 논문 등 다양한 방식을 통해
                이루어집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref="sec04" id="#sec04">
        <div
          class="relative mt-24 sm:w-3/4 lg:w-9/12 mx-auto flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 class="text-center text-4xl mb-20">
            이미 <span class="font-extrabold">102</span>개의 기업이 함께 하고
            있습니다.
          </h1>
          <EnterpriseList />
        </div>
      </section>
      <section ref="sec05" id="#sec05">
        <div
          class="relative sm:w-3/4 lg:w-9/12 mx-auto flex flex-col justify-center items-center"
        >
          <CompanyReviewCard />
        </div>
      </section>
      <section ref="sec06" id="#sec06">
        <div class="bg-white py-28">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto max-w-2xl lg:text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                우수사례 소개
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                빅리더 프로그램은 학생들이 평소 접하기 어려운 국내 최고의
                공공기관 및 기업들과 협업하는 프로젝트입니다. 전국에서 선발된
                청년들이 경쟁과 협력을 통해 소통하고 성장하며, 이는 그들에게
                잊을 수 없는 인생의 전환점이자 사회진출에 결정적인 역할을 하는
                경험이 됩니다.
              </p>
            </div>
          </div>
        </div>
        <div class="container lg:w-10/12 mb-48">
          <swiper
            :modules="swiperModules"
            :slides-per-view="4"
            :space-between="16"
            :loop="true"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            @swiper="onSwiper"
          >
            <swiper-slide
              v-for="outcomeItem in outcomeData"
              :key="outcomeItem.id"
            >
              <OutcomeCard :outcome="outcomeItem" />
            </swiper-slide>
          </swiper>
        </div>
      </section>
      <!-- Contact Us -->
      <section class="bg-blue-100 py-20">
        <div class="container">
          <div
            class="sm:w-3/4 lg:w-2/4 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p class="font-light uppercase text-center mb-8">
              100+ 기업 및 공공기관이 함께하고 있습니다.
            </p>
            <h1 class="text-3xl text-center font-semibold mb-8">
              Join us <br />in what we're doing!
            </h1>
            <div class="flex flex-col sm:flex-row gap-6 mt-6">
              <input
                type="text"
                placeholder="이메일 주소를 입력해주세요."
                class="flex-1 px-2 py-3 rounded-md text-black"
                v-model="emailFormData.to"
              />
              <input
                type="text"
                placeholder="담당자명을 입력해주세요."
                class="flex-1 px-2 py-3 rounded-md text-black"
                v-model="emailFormData.name"
              />
            </div>
            <div class="flex flex-col sm:flex-row gap-6 mt-6">
              <input
                type="text"
                placeholder="문의하실 내용을 입력해주세요."
                class="flex-1 px-2 py-3 rounded-md text-black"
                v-model="emailFormData.text"
              />
            </div>
            <div class="flex justify-center mt-6">
              <button type="button" class="btn btn-primary" @click="sendEmail">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
    
    <script>
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
import EnterpriseList from "@/components/EnterpriseList.vue"
import TitleComponent from "@/components/TitleComponent.vue"
import CompanyReviewCard from "@/components/CompanyReviewCard.vue"
import AboutValue from "@/components/AboutValue.vue"
import axios from "axios"

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/vue"
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules"
import OutcomeCard from "@/components/OutcomeCard.vue"

export default {
  name: "About",
  components: {
    Header,
    Footer,
    TitleComponent,
    EnterpriseList,
    CompanyReviewCard,
    AboutValue,
    Swiper,
    SwiperSlide,
    OutcomeCard,
  },
  data() {
    return {
      // 폼 데이터
      emailFormData: {
        to: "",
        name: "",
        text: "",
      },
      activeCategory: "sec01",
      isActive: false,
      outcomeData: [
        {
          id: 1,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-01.png"),
        },
        {
          id: 2,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-02.png"),
        },
        {
          id: 3,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-03.png"),
        },
        {
          id: 4,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-04.png"),
        },
        {
          id: 5,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-05.png"),
        },
        {
          id: 6,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-06.png"),
        },
        {
          id: 7,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-07.png"),
        },
        {
          id: 8,
          imgSrc: require("@/assets/images/bigleader-outcome/outcome-08.png"),
        },
      ],
      swiperModules: [Navigation, Pagination, Scrollbar, Autoplay, A11y],
    }
  },
  methods: {
    changeCategory(category) {
      const sectionRef = this.$refs[category]
      sectionRef.scrollIntoView({ behavior: "smooth" })
      this.activeCategory = category
    },
    handleScroll() {
      this.isActive = window.scrollY > 100
    },
    sendEmail() {
      axios
        .post(`${process.env.VUE_APP_API_URL}/email/send`, this.emailFormData)
        .then(response => {
          alert("메일이 전송되었습니다. 감사합니다.")
          // 성공 메시지 처리
        })
        .catch(error => {
          alert("메일 전송에 실패하였습니다. 다시 시도해주세요.")
          // 오류 메시지 처리
        })
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
}
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
</script>