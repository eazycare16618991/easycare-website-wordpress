import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사소개 | 이지케어',
  description: '이지케어는 AI 기술과 VK130으로 해충방역, 바이러스살균, 완구소독 서비스를 제공하는 방역 전문가입니다.',
};

export default function About() {
  const certifications = [
    {
      title: '한국방역협회 회원',
      description: '국내 방역업체 인증',
    },
    {
      title: 'HACCP팀장과정 수료',
      description: '식품안전관리 전문가 인증',
    },
    {
      title: '고려대학교 방역소독전문가과정 수료',
      description: '대학 교육기관 인증',
    },
    {
      title: 'AIB교육과정 수료',
      description: 'No. 9055 (2019.09.27) - 국제식품안전교육 인증',
    },
  ];

  const advantages = [
    {
      icon: '🤖',
      title: 'AI 해충 인식',
      description: '카메라로 촬영한 벌레를 AI가 정확히 인식하고 맞춤형 정보를 제공합니다.',
    },
    {
      icon: '✨',
      title: 'VK130 독점',
      description: '이지케어만 사용하는 안전한 살균제로 99.999% 살균 효과를 보장합니다.',
    },
    {
      icon: '👶',
      title: '완구소독 전문',
      description: '유치원/어린이집 전문 완구소독으로 아이들의 건강을 지킵니다.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            회사소개
          </h1>
          <p className="text-lg md:text-xl">
            건강한 공간을 만드는 방역 전문가, 이지케어입니다.
          </p>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">이지케어에 대해</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              이지케어는 2019년에 설립된 방역 및 소독 전문 기업입니다.
              AI 기술과 FDA 승인 살균제 VK130을 활용하여 해충방역, 바이러스살균, 완구소독 서비스를 제공하고 있습니다.
            </p>
            <p>
              저희는 단순한 방역 서비스를 넘어, 고객의 건강하고 안전한 공간을 만드는 것을 목표로 합니다.
              최신 기술과 검증된 제품을 통해 가정, 식품공장, 학교 등 다양한 환경에서 최고 수준의 서비스를 제공합니다.
            </p>
            <p>
              저희 팀은 방역·소독 분야의 전문가로 구성되어 있으며, 각종 교육과정을 이수하여 높은 전문성을 갖추고 있습니다.
              고객 만족을 최우선으로 삼아 항상 최선의 서비스를 제공하겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 회사 정보 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">회사 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4">기본 정보</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500">회사명</p>
                  <p className="font-medium">이지케어</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">설립일</p>
                  <p className="font-medium">2019년 1월 1일</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">사업자번호</p>
                  <p className="font-medium">368-87-01338</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4">연락처</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500">주소</p>
                  <p className="font-medium">경기도 양주시 만송로 366</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">전화</p>
                  <p className="font-medium">031-877-3613</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 인증 및 자격 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">인증 및 자격</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  ✓ {cert.title}
                </h3>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 이지케어의 차별화 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">이지케어만의 강점</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">{adv.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{adv.title}</h3>
                <p className="text-gray-600 leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            전문가와 상담하고 싶으신가요?
          </h2>
          <p className="text-lg mb-8">
            이지케어의 맞춤형 방역 솔루션을 만나보세요.
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
