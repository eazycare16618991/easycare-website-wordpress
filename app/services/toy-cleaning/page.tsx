import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '완구소독서비스 | 이지케어',
  description: '유치원과 어린이집 전문 완구소독서비스로 아이들의 건강을 지키는 이지케어입니다.',
};

export default function ToyCleaning() {
  const targets = [
    {
      icon: '🧸',
      name: '인형/봉제완구',
      description: '부드러운 완구도 안전하게 살균합니다.',
    },
    {
      icon: '🪀',
      name: '플라스틱 완구',
      description: '블록, 자동차, 인형 등 다양한 완구를 살균합니다.',
    },
    {
      icon: '📚',
      name: '책/교재',
      description: '그림책과 학습 교재도 안전하게 소독합니다.',
    },
    {
      icon: '🪑',
      name: '교실용품',
      description: '책상, 의자, 선반 등 교실 가구도 살균합니다.',
    },
    {
      icon: '🧶',
      name: '천 제품',
      description: '담요, 수건, 베개 등 천 제품도 가능합니다.',
    },
    {
      icon: '🚪',
      name: '교실 전체',
      description: '바닥, 벽, 천장 등 교실 전체를 살균합니다.',
    },
  ];

  const seasons = [
    {
      title: '신학기 전',
      timing: '2월 말, 8월 말',
      description: '개학 전 완구와 교실을 완벽하게 살균하여 신학기를 건강하게 시작합니다.',
      icon: '🌟',
    },
    {
      title: '감염병 발생 시',
      timing: '수시',
      description: '감염성 질환이 발생했을 때 긴급 살균으로 확산을 방지합니다.',
      icon: '🚨',
    },
    {
      title: '계절별 정기 살균',
      timing: '월 1-2회',
      description: '정기적인 살균으로 항상 깨끗한 환경을 유지합니다.',
      icon: '🔄',
    },
  ];

  const process = [
    {
      step: '1단계',
      title: '상담 및 현장 방문',
      description: '완구와 교실 상황을 파악하고 최적의 살균 계획을 수립합니다.',
    },
    {
      step: '2단계',
      title: '스팀 세척',
      description: '고온 스팀으로 완구와 시설의 먼지와 오염물을 제거합니다.',
    },
    {
      step: '3단계',
      title: 'VK130 살균',
      description: 'VK130을 분사하여 99.999% 살균 효과를 보장합니다.',
    },
    {
      step: '4단계',
      title: '자연 건조',
      description: '자연 건조로 완구를 정리하여 사용 준비를 완료합니다.',
    },
  ];

  const benefits = [
    {
      icon: '👶',
      title: '아이 건강 보호',
      description: '감염성 질환으로부터 소중한 아이들을 보호합니다.',
    },
    {
      icon: '👨‍🏫',
      title: '선생님 안심',
      description: '보육 환경의 위생 기준을 충족하여 운영의 신뢰도를 높입니다.',
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: '학부모 만족',
      description: '전문적인 살균으로 부모님들의 신뢰를 얻을 수 있습니다.',
    },
    {
      icon: '🏆',
      title: '시설 평가 우수',
      description: '위생 관리 우수 시설로 평가받을 수 있습니다.',
    },
  ];

  const features = [
    {
      title: '안전한 제품 사용',
      description: 'FDA 승인, 식약처 등록 제품으로 아이들도 안전합니다.',
      icon: '✅',
    },
    {
      title: '완벽한 살균',
      description: 'VK130과 스팀의 조합으로 99.999% 살균 효과를 보장합니다.',
      icon: '✨',
    },
    {
      title: '빠른 시공',
      description: '효율적인 시공으로 보육 시간에 방해를 주지 않습니다.',
      icon: '⚡',
    },
    {
      title: '상담 및 가이드',
      description: '일상 위생 관리에 대한 조언도 함께 제공합니다.',
      icon: '💡',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            완구소독서비스
          </h1>
          <p className="text-lg md:text-xl">
            유치원·어린이집 전문 완구소독으로 아이들의 건강을 지킵니다
          </p>
        </div>
      </section>

      {/* 서비스 소개 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">완구소독서비스란?</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              유치원과 어린이집은 많은 영유아들이 모여 생활하는 공간입니다.
              여러 아이들이 함께 사용하는 완구와 교실 환경은 감염병 전파의 위험이 높습니다.
            </p>
            <p>
              이지케어의 완구소독서비스는 스팀 세척과 VK130 살균을 결합하여
              영유아도 안전하게 사용할 수 있는 완벽한 살균을 보장합니다.
            </p>
            <p>
              신학기 개학 전, 또는 감염병 발생 시 전문가의 손길로
              아이들의 건강한 보육 환경을 만들어드립니다.
            </p>
          </div>
        </div>
      </section>

      {/* 왜 필요한가? */}
      <section className="py-16 bg-purple-50 border-l-4 border-purple-600">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">왜 완구소독이 필요한가요?</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex gap-4">
              <span className="text-2xl">🦠</span>
              <div>
                <p className="font-bold mb-1">감염병 전파</p>
                <p>영유아들은 완구를 입에 넣기 때문에 감염성 질환이 빠르게 확산됩니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🧼</span>
              <div>
                <p className="font-bold mb-1">손 세척 불충분</p>
                <p>어린아이들은 손 씻기를 제대로 하지 못해 오염이 누적됩니다.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">👨‍👩‍👧</span>
              <div>
                <p className="font-bold mb-1">가정 전파</p>
                <p>교실의 감염병이 가정으로 전파되어 형제자매까지 감염시킵니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 살균 대상 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">살균 대상</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targets.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{item.name}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 살균 프로세스 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">살균 프로세스</h2>
          <div className="space-y-4">
            {process.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition"
              >
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-purple-600 min-w-fit">{item.step}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 소독 시기 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">최적의 살균 시기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasons.map((season, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-5xl mb-4">{season.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{season.title}</h3>
                <p className="text-sm text-purple-600 font-semibold mb-3">{season.timing}</p>
                <p className="text-gray-700">{season.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 특징 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">이지케어의 특징</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 살균 방법의 장점 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">스팀 + VK130의 조합</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 안심 메시지 */}
      <section className="py-12 bg-purple-100 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-xl text-gray-800 font-semibold mb-2">
            FDA 승인, 식약처 등록 제품으로 아이들도 안전합니다.
          </p>
          <p className="text-gray-700">
            스팀과 VK130의 조합으로 일반 소독제보다 훨씬 효과적입니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            우리 원의 완구와 교실을 살균해주세요!
          </h2>
          <p className="text-lg mb-8">
            신학기 준비, 감염병 예방은 이지케어에 맡겨주세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>
    </>
  );
}
