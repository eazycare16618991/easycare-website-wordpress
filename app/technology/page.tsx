import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 기술 | 이지케어',
  description: '카메라와 AI로 해충을 정확히 인식하고 정보를 제공하는 이지케어의 AI 기술입니다.',
};

export default function Technology() {
  const aiProcess = [
    {
      step: '1. 촬영',
      description: '해충을 카메라로 촬영합니다.',
      icon: '📸',
    },
    {
      step: '2. 인식',
      description: 'AI가 해충의 종류를 자동으로 인식합니다.',
      icon: '🤖',
    },
    {
      step: '3. 분석',
      description: '해충의 특성과 생식 주기를 분석합니다.',
      icon: '📊',
    },
    {
      step: '4. 제시',
      description: '최적의 방역 솔루션을 제시합니다.',
      icon: '✅',
    },
  ];

  const features = [
    {
      title: '실시간 인식',
      description: 'AI가 실시간으로 해충을 정확하게 인식합니다.',
      icon: '⚡',
    },
    {
      title: '정보 제공',
      description: '해충의 생태, 위험성, 제거 방법 등 정보를 즉시 제공합니다.',
      icon: '💡',
    },
    {
      title: '맞춤 솔루션',
      description: '해충의 종류와 환경에 맞는 최적의 방역 방법을 제시합니다.',
      icon: '🎯',
    },
    {
      title: '높은 정확도',
      description: '다년간의 학습으로 95% 이상의 인식 정확도를 보장합니다.',
      icon: '✨',
    },
  ];

  const useCases = [
    {
      scenario: '집에서 모르는 벌레를 발견했을 때',
      usage: '사진을 찍어 AI에 전송하면 해충의 종류와 위험성을 즉시 알 수 있습니다.',
      icon: '🏠',
    },
    {
      scenario: '사무실에서 해충이 의심될 때',
      usage: 'AI 기술로 정확한 진단을 받고 필요한 방역 조치를 취할 수 있습니다.',
      icon: '🏢',
    },
    {
      scenario: '식품 시설에서 위생 관리할 때',
      usage: 'AI로 정기적인 모니터링을 하여 해충 발생을 조기에 발견할 수 있습니다.',
      icon: '🏭',
    },
    {
      scenario: '방역 효과 검증할 때',
      usage: 'AI 기술로 방역 전후의 변화를 객관적으로 검증할 수 있습니다.',
      icon: '📈',
    },
  ];

  const benefits = [
    {
      benefit: '과학적 진단',
      description: 'AI의 정확한 분석으로 추측이 아닌 과학적 진단이 가능합니다.',
    },
    {
      benefit: '시간 절약',
      description: '신속한 인식으로 방역 계획을 빠르게 수립할 수 있습니다.',
    },
    {
      benefit: '비용 절감',
      description: '필요한 방역만 진행하여 불필요한 비용을 줄일 수 있습니다.',
    },
    {
      benefit: '효율 극대화',
      description: '정확한 정보로 방역 효율을 최대한 높일 수 있습니다.',
    },
  ];

  const versions = [
    {
      title: '모바일 앱',
      status: '운영 중',
      description: '스마트폰 앱으로 언제 어디서나 AI 해충 인식을 이용할 수 있습니다.',
      icon: '📱',
    },
    {
      title: 'IoT 센서',
      status: '개발 중',
      description: '자동 해충 감지 센서로 지속적인 모니터링이 가능합니다.',
      icon: '📡',
    },
    {
      title: '웹 대시보드',
      status: '예정',
      description: '시설별 해충 발생 현황을 한눈에 관리할 수 있습니다.',
      icon: '💻',
    },
    {
      title: 'API 연동',
      status: '계획 중',
      description: '다른 시스템과의 연동으로 통합 관리가 가능합니다.',
      icon: '🔗',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI 기술
          </h1>
          <p className="text-lg md:text-xl">
            카메라와 AI로 해충을 정확히 인식하는 이지케어의 기술
          </p>
        </div>
      </section>

      {/* 기술 소개 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">AI 해충 인식 기술</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              이지케어는 최신 인공지능 기술을 활용하여 해충을 정확하게 인식하고,
              각 해충의 특성에 맞는 맞춤형 방역 솔루션을 제시합니다.
            </p>
            <p>
              카메라로 촬영한 사진을 AI가 분석하여 해충의 종류, 생식 주기, 위험성 등을 파악하고,
              최적의 제거 방법을 제안합니다.
            </p>
            <p>
              이러한 AI 기술은 기존의 경험에만 의존하는 방역과 달리,
              과학적이고 데이터 기반의 방역을 가능하게 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* AI 프로세스 */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">AI 작동 프로세스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiProcess.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.step}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {idx < aiProcess.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 transform -translate-y-1/2">
                    <span className="text-indigo-600 text-2xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI 기술의 특징 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">AI 기술의 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 사용 사례 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">활용 사례</h2>
          <div className="space-y-4">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-600"
              >
                <div className="flex gap-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-gray-800">{useCase.scenario}</h3>
                    <p className="text-gray-700">{useCase.usage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI 기술의 이점 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">AI 기술의 이점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                <h3 className="text-lg font-bold mb-2 text-gray-800">✓ {item.benefit}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 로드맵 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">기술 개발 계획</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {versions.map((version, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl">{version.icon}</div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    version.status === '운영 중' ? 'bg-green-100 text-green-700' :
                    version.status === '개발 중' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {version.status}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{version.title}</h3>
                <p className="text-gray-700">{version.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술력 강조 */}
      <section className="py-16 bg-indigo-100 border-l-4 border-indigo-600">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">이지케어만의 AI 기술</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-4">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="font-bold mb-1">지속적 학습</p>
                <p>매년 수천 건의 방역 데이터로 AI 모델을 개선하고 있습니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🔬</span>
              <div>
                <p className="font-bold mb-1">정확도 검증</p>
                <p>독립적인 전문 기관의 검증을 통해 95% 이상의 정확도를 유지합니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🌍</span>
              <div>
                <p className="font-bold mb-1">글로벌 기술</p>
                <p>국제적 표준을 따르는 AI 기술로 세계 수준의 서비스를 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            AI 기술의 힘을 경험해보세요
          </h2>
          <p className="text-lg mb-8">
            이지케어의 AI 기술로 정확하고 과학적인 방역을 받아보세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
