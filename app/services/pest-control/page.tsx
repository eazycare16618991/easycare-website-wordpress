import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '해충방역서비스 | 이지케어',
  description: 'AI 기술로 해충을 정확히 진단하고 맞춤형 방역 솔루션을 제공하는 이지케어의 해충방역서비스입니다.',
};

export default function PestControl() {
  const pests = [
    {
      name: '쥐',
      icon: '🐭',
      description: '질병 전파와 재산피해를 일으키는 쥐를 효과적으로 제거합니다.',
    },
    {
      name: '바퀴벌레',
      icon: '🪳',
      description: '식중독과 질병의 원인이 되는 바퀴벌레를 완벽히 박멸합니다.',
    },
    {
      name: '모기',
      icon: '🦟',
      description: '뎅기열, 지카바이러스 등을 전파하는 모기를 제거합니다.',
    },
    {
      name: '파리',
      icon: '🪰',
      description: '식중독균을 옮기는 파리를 신속하게 제거합니다.',
    },
    {
      name: '진드기',
      icon: '🕷️',
      description: '가려움증과 질병을 유발하는 진드기를 퇴치합니다.',
    },
    {
      name: '나방',
      icon: '🦋',
      description: '곡물과 의류를 손상시키는 나방을 효과적으로 제거합니다.',
    },
  ];

  const locations = [
    {
      title: '가정 방역',
      description: '안전한 살균제로 아이들과 반려동물이 있는 집도 안심할 수 있습니다.',
      icon: '🏠',
    },
    {
      title: '요식업 시설',
      description: '음식점 위생 기준을 만족하는 전문 방역으로 신뢰도를 높입니다.',
      icon: '🍽️',
    },
    {
      title: '사무실/건물',
      description: '업무 환경을 쾌적하게 유지하면서 직원 건강을 보호합니다.',
      icon: '🏢',
    },
    {
      title: '학교/유치원',
      description: '아이들의 안전을 최우선으로 하는 안전한 방역 솔루션입니다.',
      icon: '🎓',
    },
    {
      title: '식품공장',
      description: 'HACCP 기준을 충족하는 전문적인 방역 서비스입니다.',
      icon: '🏭',
    },
  ];

  const process = [
    {
      step: 1,
      title: 'AI 진단',
      description: '카메라로 촬영한 해충을 AI가 자동으로 인식하고 분석합니다.',
    },
    {
      step: 2,
      title: '맞춤 솔루션',
      description: '해충의 종류와 환경에 맞는 최적의 방역 방법을 제시합니다.',
    },
    {
      step: 3,
      title: '전문 시공',
      description: '검증된 안전 살균제로 철저한 방역 작업을 진행합니다.',
    },
    {
      step: 4,
      title: '사후관리',
      description: '방역 후 2주일 이내 확인 방문으로 완벽한 제거를 보장합니다.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            해충방역서비스
          </h1>
          <p className="text-lg md:text-xl">
            AI 기술로 정확히 진단하고 맞춤형 방역 솔루션을 제공합니다
          </p>
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              이지케어의 해충방역서비스는 단순한 약 뿌리는 방역을 넘어, AI 기술을 활용한 과학적이고 안전한 방역입니다.
            </p>
            <p>
              카메라로 촬영한 해충을 AI가 자동으로 인식하여 해충의 종류, 생식 주기, 환경에 맞는 맞춤형 솔루션을 제시합니다.
            </p>
            <p>
              안전성이 검증된 살균제를 사용하여 가정, 학교, 식품공장까지 모든 환경에 안심할 수 있는 방역 서비스를 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* AI 기술 강조 */}
      <section className="py-16 bg-blue-50 border-l-4 border-blue-600">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex gap-6">
            <div className="text-4xl">🤖</div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">AI 해충 인식</h2>
              <p className="text-gray-700 leading-relaxed">
                카메라로 촬영한 해충의 사진을 AI가 자동으로 분석하여 정확한 정보를 제공합니다.
                해충의 종류에 따라 생식 주기, 특성, 최적의 제거 방법을 제시하므로 과학적이고 효율적인 방역이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 방역 대상 해충 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">주요 방역 대상 해충</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pests.map((pest, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-3">{pest.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{pest.name}</h3>
                <p className="text-gray-600">{pest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 서비스 프로세스 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">방역 프로세스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <span className="text-green-600 text-2xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 장소별 솔루션 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">장소별 맞춤 솔루션</h2>
          <div className="space-y-4">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 hover:shadow-lg transition"
              >
                <div className="flex gap-4">
                  <div className="text-4xl">{loc.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{loc.title}</h3>
                    <p className="text-gray-700">{loc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">이지케어의 해충방역 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">안전성 검증</h3>
              <p className="text-gray-700">
                FDA 승인, 식약처 등록 살균제를 사용하여 가정과 식품시설 모두에 안전합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">신속한 대응</h3>
              <p className="text-gray-700">
                전문 팀이 24시간 이내 현장 방문하여 빠르게 대응합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">완벽한 사후관리</h3>
              <p className="text-gray-700">
                방역 후 2주일 이내 확인 방문으로 완벽한 제거를 보장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            해충 때문에 걱정이 많으신가요?
          </h2>
          <p className="text-lg mb-8">
            이지케어의 전문가와 무료 상담하고 정확한 진단을 받아보세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
