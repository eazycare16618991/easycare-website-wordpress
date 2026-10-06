import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '바이러스살균서비스 | 이지케어',
  description: 'VK130으로 99.999% 살균 효과를 보장하는 이지케어의 바이러스살균서비스입니다.',
};

export default function Disinfection() {
  const viruses = [
    {
      name: '수족구병',
      description: '영유아를 중심으로 유행하는 바이러스성 질환입니다.',
      symptoms: '열, 입안의 물집, 손발의 발진',
    },
    {
      name: '독감 (인플루엔자)',
      description: '매년 겨울 유행하는 호흡기 질환입니다.',
      symptoms: '고열, 기침, 인후통, 근육통',
    },
    {
      name: '코로나바이러스',
      description: '호흡기 감염병으로 집단 감염이 우려됩니다.',
      symptoms: '발열, 기침, 호흡곤란',
    },
    {
      name: '노로바이러스',
      description: '식중독과 장염을 유발하는 바이러스입니다.',
      symptoms: '구토, 설사, 복통',
    },
  ];

  const benefits = [
    {
      icon: '✨',
      title: '99.999% 살균 효과',
      description: 'VK130은 대부분의 바이러스와 세균을 완벽히 제거합니다.',
    },
    {
      icon: '🔬',
      title: 'FDA & 식약처 승인',
      description: '국제적 기준을 충족한 안전하고 검증된 제품입니다.',
    },
    {
      icon: '👶',
      title: '아이도 안전',
      description: '안전성이 입증되어 영유아가 있는 공간도 시공 가능합니다.',
    },
    {
      icon: '🌱',
      title: '환경친화적',
      description: '생분해 성분으로 환경에 해를 끼치지 않습니다.',
    },
  ];

  const applications = [
    {
      icon: '🏥',
      title: '의료기관',
      description: '병원, 클리닉, 치과 등 의료 시설의 감염 예방',
    },
    {
      icon: '🎓',
      title: '학교/유치원',
      description: '개학 전 또는 감염 발생 시 긴급 살균',
    },
    {
      icon: '🍽️',
      title: '음식점/카페',
      description: '주방과 식사 공간의 바이러스 제거',
    },
    {
      icon: '🏢',
      title: '사무실/상점',
      description: '출입이 많은 시설의 주기적 살균',
    },
    {
      icon: '🏠',
      title: '가정',
      description: '가족 중 감염자 발생 시 가정 살균',
    },
    {
      icon: '🚌',
      title: '대중교통',
      description: '버스, 기차, 택시 등의 주기적 살균',
    },
  ];

  const vk130Info = [
    {
      label: '살균 효능',
      value: '99.999%',
    },
    {
      label: '원산지',
      value: '미국 (FDA 승인)',
    },
    {
      label: '주요 성분',
      value: '차아염소산',
    },
    {
      label: '안전성',
      value: '식약처 등록 제품',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            바이러스살균서비스
          </h1>
          <p className="text-lg md:text-xl">
            VK130으로 99.999% 살균 효과를 보장합니다
          </p>
        </div>
      </section>

      {/* VK130 소개 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">VK130이란?</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              VK130은 이지케어가 독점적으로 사용하는 미국산 살균제입니다.
              FDA 승인과 국내 식약처 등록을 완료한 국제 기준의 안전한 제품입니다.
            </p>
            <p>
              차아염소산을 주요 성분으로 하며, 바이러스, 세균, 곰팡이 등 대부분의 미생물을 99.999% 제거합니다.
              물에 용해되어 독성이 낮고 생분해되므로 환경 친화적입니다.
            </p>
            <p>
              가정의 영유아부터 식품공장까지 모든 환경에 안심하고 사용할 수 있는 검증된 살균제입니다.
            </p>
          </div>
        </div>
      </section>

      {/* VK130 정보 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {vk130Info.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg text-center shadow-md">
                <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                <p className="text-2xl font-bold text-blue-600">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VK130의 장점 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">VK130의 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 방역 대상 바이러스 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">제거 대상 바이러스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {viruses.map((virus, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold mb-2 text-gray-800">{virus.name}</h3>
                <p className="text-gray-700 mb-3">{virus.description}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">증상:</span> {virus.symptoms}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 적용 분야 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">적용 분야</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{app.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{app.title}</h3>
                <p className="text-gray-700 text-sm">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 살균 효과 비교 */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">VK130 살균 효과</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-800">VK130 (이지케어)</span>
                <span className="text-blue-600 font-bold">99.999%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-blue-600 h-full" style={{ width: '99.999%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-gray-800">일반 소독제</span>
                <span className="text-gray-600 font-bold">70-90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gray-400 h-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-gray-700 text-center">
            VK130은 일반 소독제보다 훨씬 높은 살균 효과를 보장하여,<br />
            바이러스와 세균의 완벽한 제거가 가능합니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            완벽한 살균이 필요하신가요?
          </h2>
          <p className="text-lg mb-8">
            VK130로 바이러스 감염 걱정을 완전히 해결하세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
