import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: '해충방역서비스',
      description: 'AI 기술로 정확히 진단하고 맞춤형 방역 솔루션을 제공합니다.',
      image: '/images/services/service_1.jpg',
      href: '/services/pest-control',
      icon: '🐭',
    },
    {
      title: '바이러스살균서비스',
      description: 'VK130으로 수족구, 독감 등 계절성 바이러스를 완벽히 제거합니다.',
      image: '/images/services/service_2.jpg',
      href: '/services/disinfection',
      icon: '🦠',
    },
    {
      title: '완구소독서비스',
      description: '유치원/어린이집 개학 전 완구와 교실을 완벽하게 살균합니다.',
      image: '/images/services/service_3.jpg',
      href: '/services/toy-cleaning',
      icon: '🧸',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Image
          src="/images/banners/banner_latest.png"
          alt="이지케어 메인 배너"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            건강한 공간을 만드는 방역 전문가
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            AI 기술과 VK130으로 해충, 바이러스, 완구까지 안전하게 관리합니다.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>

      {/* 3대 차별화 포인트 */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">이지케어만의 차별화</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI 기술</h3>
              <p className="text-gray-600">
                카메라로 촬영한 벌레를 AI가 정확히 인식하고 정보를 제공합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-2">VK130 독점</h3>
              <p className="text-gray-600">
                이지케어만 사용하는 안전한 살균제로 99.999% 살균 효과를 보장합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-bold mb-2">완구소독</h3>
              <p className="text-gray-600">
                유치원/어린이집 전문 완구소독으로 아이들의 건강을 지킵니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 서비스 */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">주요 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            더 안전한 공간을 원하신가요?
          </h2>
          <p className="text-lg mb-8">
            이지케어의 전문가에게 무료 상담을 받아보세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            상담신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
