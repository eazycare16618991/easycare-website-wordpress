import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '고객관리 프로그램 | 이지케어',
  description: '방역 서비스 이력, 자동 리포트, 거래처 관리를 한 곳에서 관리하는 이지케어의 고객관리 프로그램입니다.',
};

export default function CRM() {
  const features = [
    {
      icon: '💬',
      title: '카카오톡 발송이력',
      description: '모든 카카오톡 메시지와 발송 이력을 자동으로 기록하고 관리합니다.',
      benefits: ['자동 기록', '메시지 검색', '발송 현황 추적'],
    },
    {
      icon: '📊',
      title: '자동 리포트',
      description: '방역 현황, 비용, 일정 등을 자동으로 정리하여 리포트합니다.',
      benefits: ['정기 리포트', '상세 분석', 'PDF 다운로드'],
    },
    {
      icon: '🏢',
      title: '거래처 관리',
      description: '모든 거래처 정보와 방역 이력을 한곳에서 관리합니다.',
      benefits: ['거래처 정보', '방역 이력', '담당자 연락처'],
    },
    {
      icon: '📅',
      title: '일정 관리',
      description: '예정된 방역 일정을 달력으로 시각화하여 관리합니다.',
      benefits: ['달력 보기', '알람 설정', '일정 공유'],
    },
    {
      icon: '💰',
      title: '비용 관리',
      description: '각 거래처별 비용과 청구 현황을 명확하게 관리합니다.',
      benefits: ['비용 추적', '청구서 생성', '결제 현황'],
    },
    {
      icon: '🔒',
      title: '데이터 보안',
      description: '고급 암호화로 모든 고객 정보와 이력을 안전하게 보호합니다.',
      benefits: ['암호화 저장', '접근 제어', '백업'],
    },
  ];

  const workflow = [
    {
      step: 1,
      title: '거래처 등록',
      description: '새로운 거래처를 프로그램에 등록합니다.',
    },
    {
      step: 2,
      title: '방역 일정 등록',
      description: '예정된 방역 일정을 입력합니다.',
    },
    {
      step: 3,
      title: '방역 실시',
      description: '현장에서 방역 작업을 진행합니다.',
    },
    {
      step: 4,
      title: '완료 보고',
      description: '방역 완료 정보를 시스템에 입력합니다.',
    },
    {
      step: 5,
      title: '자동 리포트',
      description: '시스템에서 자동으로 리포트를 생성합니다.',
    },
    {
      step: 6,
      title: '고객 전달',
      description: '카카오톡 등으로 고객에게 결과를 전달합니다.',
    },
  ];

  const benefits = [
    {
      title: '업무 효율 향상',
      description: '반복적인 관리 업무를 자동화하여 핵심 업무에 집중할 수 있습니다.',
      icon: '⚡',
    },
    {
      title: '투명한 커뮤니케이션',
      description: '모든 서비스 이력이 기록되어 고객과의 신뢰를 높입니다.',
      icon: '💬',
    },
    {
      title: '정확한 청구',
      description: '모든 방역 기록을 바탕으로 정확한 청구가 가능합니다.',
      icon: '💰',
    },
    {
      title: '데이터 기반 의사결정',
      description: '상세한 통계로 비즈니스 판단을 할 수 있습니다.',
      icon: '📊',
    },
  ];

  const specs = [
    {
      category: '접근',
      items: ['웹 대시보드', '모바일 앱', '어디서나 접속 가능'],
    },
    {
      category: '관리',
      items: ['거래처 무제한', '방역 이력 저장', '자동 백업'],
    },
    {
      category: '보안',
      items: ['256비트 암호화', '이중 인증', '접근 권한 관리'],
    },
    {
      category: '지원',
      items: ['24시간 고객지원', '무료 교육', '기술 지원'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            고객관리 프로그램
          </h1>
          <p className="text-lg md:text-xl">
            방역 서비스 이력, 리포트, 거래처를 한 곳에서 관리하세요
          </p>
        </div>
      </section>

      {/* 프로그램 소개 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">고객관리 프로그램이란?</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              이지케어 고객관리 프로그램은 방역 서비스 회사를 위해 설계된 통합 관리 시스템입니다.
              거래처 정보, 방역 이력, 비용 청구, 고객 커뮤니케이션까지 모든 것을 한 곳에서 관리할 수 있습니다.
            </p>
            <p>
              카카오톡 메시지 자동 기록, 정기적인 자동 리포트 생성, 거래처별 방역 이력 관리 등의 기능으로
              수작업을 최소화하고 업무 효율을 극대화합니다.
            </p>
            <p>
              모든 데이터는 256비트 암호화로 안전하게 보호되며,
              웹 대시보드와 모바일 앱으로 언제 어디서나 접근할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 주요 기능 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex gap-4 mb-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 self-center">{feature.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, bidx) => (
                    <div key={bidx} className="text-sm text-gray-600 flex gap-2">
                      <span>✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 작업 흐름 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">업무 흐름</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workflow.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg text-center shadow-md">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
                {idx < workflow.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 transform -translate-y-1/2">
                    <span className="text-orange-600 text-2xl">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이점 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">프로그램의 이점</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 사양 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">기술 사양</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">{spec.category}</h3>
                <div className="space-y-3">
                  {spec.items.map((item, iidx) => (
                    <div key={iidx} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-orange-600">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 사용 사례 */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">프로그램 활용 사례</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-2">음식점 체인점 관리</h3>
              <p className="text-gray-700">
                여러 지점의 방역 일정, 비용, 이력을 중앙에서 관리하고 정기 리포트를 자동 생성합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-2">학교·유치원 관리</h3>
              <p className="text-gray-700">
                신학기 전 대량 완구소독 일정을 효율적으로 관리하고 학부모에게 결과를 투명하게 전달합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-2">식품공장 위생 관리</h3>
              <p className="text-gray-700">
                정기적인 방역 이력과 비용을 기록하여 감시 기관에 투명하게 보고할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 가격 정보 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">합리적인 가격</h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg text-center">
            <p className="text-gray-700 mb-4">
              고객관리 프로그램은 이지케어의 방역 서비스와 함께 제공되는 기본 기능입니다.
            </p>
            <p className="text-lg font-bold text-gray-800 mb-4">
              추가 비용 없이 사용할 수 있습니다!
            </p>
            <p className="text-gray-700">
              방역 서비스 계약 시 자동으로 프로그램 계정이 생성되며,<br />
              전문가 교육과 기술 지원을 무료로 제공합니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            효율적인 방역 사업 관리를 시작하세요
          </h2>
          <p className="text-lg mb-8">
            고객관리 프로그램으로 업무를 자동화하고 생산성을 높이세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
