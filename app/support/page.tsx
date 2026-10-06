'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    category: '방역 서비스',
    questions: [
      {
        q: '방역을 받으면 며칠 동안 효과가 지속되나요?',
        a: '일반적으로 방역 후 2-4주 동안 효과가 지속됩니다. 환경과 해충 발생 정도에 따라 차이가 있으므로, 정확한 기간은 전문가와 상담 시 안내받을 수 있습니다.'
      },
      {
        q: '임신 중이거나 어린 아이가 있어도 안전한가요?',
        a: '네, 안전합니다. 이지케어는 FDA 승인, 식약처 등록 제품을 사용하여 임산부, 영유아, 반려동물이 있는 가정에서도 안심하고 사용할 수 있습니다. 시공 당일 실내에서 나가셨다가 2시간 후에 돌아오시면 됩니다.'
      },
      {
        q: '방역 후 얼마나 기간을 두고 다시 방역해야 하나요?',
        a: '일반적으로 3-4개월마다 정기 방역을 권장합니다. 다만 음식점이나 식품 관련 시설은 월 1-2회 정기 방역이 권장됩니다. 상담 시 귀사의 상황에 맞는 일정을 제안해드립니다.'
      },
      {
        q: '긴급 방역이 필요한 경우 얼마나 빨리 출장 가능한가요?',
        a: '감염병이 발생했거나 해충이 발견된 경우, 24시간 이내에 출장 가능합니다. 급한 경우 전화로 문의해주시면 최대한 빠르게 대응하겠습니다.'
      }
    ]
  },
  {
    category: '완구소독 서비스',
    questions: [
      {
        q: '개학 전 완구소독은 언제 신청해야 하나요?',
        a: '개학 1-2주 전에 신청하시기를 권장합니다. 신학기 시즌(2월 말, 8월 말)에는 예약이 많으므로 최대한 빨리 신청해주시기 바랍니다.'
      },
      {
        q: '완구소독 중에 아이들이 있어도 되나요?',
        a: '안전을 위해 소독 중에는 아이들이 실내에 있지 않으시기를 권장합니다. 소독 후 2시간 정도 기다린 후 사용해도 안전합니다.'
      },
      {
        q: '그림책이나 천 제품도 소독 가능한가요?',
        a: '네, 가능합니다. 스팀과 VK130으로 안전하게 소독할 수 있습니다. 다만 특수 재질의 제품은 사전에 상담해주시기 바랍니다.'
      }
    ]
  },
  {
    category: '바이러스살균 서비스',
    questions: [
      {
        q: 'VK130은 정말 안전한가요?',
        a: '네, 매우 안전합니다. VK130은 미국 FDA 승인, 한국 식약처 등록 제품으로, 물에 용해되어 독성이 낮고 생분해됩니다. 영유아가 있는 공간도 안심하고 사용할 수 있습니다.'
      },
      {
        q: '99.999% 살균 효과는 어떻게 검증되나요?',
        a: '시험 기관의 객관적 검증을 통해 입증되었습니다. 포도상구균, 대장균, 노로바이러스 등 주요 병원균에 대해 99.999% 이상의 살균율을 기록했습니다.'
      }
    ]
  },
  {
    category: '결제 및 청구',
    questions: [
      {
        q: '어떤 결제 방법을 사용할 수 있나요?',
        a: '현금, 카드, 계좌이체 모두 가능합니다. 법인 거래처의 경우 월말 청구 및 계좌이체도 가능하니 상담 시 알려주시기 바랍니다.'
      },
      {
        q: '견적서와 청구서를 받을 수 있나요?',
        a: '네, 시공 전 무료 견적서를 발급해드리고, 시공 후 청구서와 세금계산서를 발급해드립니다.'
      }
    ]
  }
];

export default function Support() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = Array.from(new Set(faqs.map(f => f.category)));
  const displayFaqs = selectedCategory
    ? faqs.find(f => f.category === selectedCategory)?.questions || []
    : faqs.flatMap(f => f.questions);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            고객지원
          </h1>
          <p className="text-lg md:text-xl">
            자주 묻는 질문과 공지사항을 확인하세요
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">자주 묻는 질문 (FAQ)</h2>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-full font-medium transition ${
                selectedCategory === ''
                  ? 'bg-cyan-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              전체
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {selectedCategory ? (
              faqs.find(f => f.category === selectedCategory)?.questions.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                    className="w-full p-4 bg-cyan-50 hover:bg-cyan-100 transition text-left flex justify-between items-center"
                  >
                    <span className="font-bold text-gray-800">Q. {faq.q}</span>
                    <span className="text-cyan-600 text-2xl">
                      {expandedIndex === idx ? '−' : '+'}
                    </span>
                  </button>
                  {expandedIndex === idx && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-bold text-cyan-600">A. </span>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              faqs.map((category, catIdx) => (
                <div key={catIdx}>
                  <h3 className="text-lg font-bold text-cyan-600 mb-3 mt-6 first:mt-0">
                    {category.category}
                  </h3>
                  {category.questions.map((faq, qIdx) => {
                    const globalIdx = catIdx * 100 + qIdx;
                    return (
                      <div
                        key={qIdx}
                        className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition mb-3"
                      >
                        <button
                          onClick={() => setExpandedIndex(expandedIndex === globalIdx ? null : globalIdx)}
                          className="w-full p-4 bg-cyan-50 hover:bg-cyan-100 transition text-left flex justify-between items-center"
                        >
                          <span className="font-bold text-gray-800">Q. {faq.q}</span>
                          <span className="text-cyan-600 text-2xl">
                            {expandedIndex === globalIdx ? '−' : '+'}
                          </span>
                        </button>
                        {expandedIndex === globalIdx && (
                          <div className="p-4 bg-white border-t border-gray-200">
                            <p className="text-gray-700 leading-relaxed">
                              <span className="font-bold text-cyan-600">A. </span>
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Contact for more */}
          <div className="mt-12 p-6 bg-cyan-50 rounded-lg text-center border border-cyan-200">
            <p className="text-gray-800 mb-2">더 궁금한 점이 있으신가요?</p>
            <p className="text-gray-700 mb-4">이지케어 고객지원팀에 문의하세요</p>
            <Link
              href="tel:031-877-3613"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              📞 031-877-3613
            </Link>
          </div>
        </div>
      </section>

      {/* 공지사항 Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">공지사항</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">2026년 신학기 완구소독 예약 안내</h3>
                <span className="text-sm text-gray-500">2026-06-15</span>
              </div>
              <p className="text-gray-700 mb-3">
                2월 신학기 개학 준비를 위한 완구소독 서비스 예약을 받고 있습니다.
                시즌이 되면 예약이 많아지므로 최대한 빨리 신청해주시기 바랍니다.
              </p>
              <div className="text-sm text-cyan-600 font-medium">더보기 →</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">VK130 살균제 품질 인증서 보유</h3>
                <span className="text-sm text-gray-500">2026-05-20</span>
              </div>
              <p className="text-gray-700 mb-3">
                이지케어가 사용하는 VK130은 FDA 승인, 한국 식약처 등록 제품으로,
                최고의 품질과 안전성을 보장합니다. 전문 시험 기관의 검증을 통해
                99.999% 살균 효과가 입증되었습니다.
              </p>
              <div className="text-sm text-cyan-600 font-medium">더보기 →</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">고객관리 프로그램 업데이트</h3>
                <span className="text-sm text-gray-500">2026-04-10</span>
              </div>
              <p className="text-gray-700 mb-3">
                이지케어 고객관리 프로그램에 새로운 기능이 추가되었습니다.
                이제 모바일 앱에서도 방역 일정을 수정할 수 있으며,
                실시간 알람 기능이 추가되었습니다.
              </p>
              <div className="text-sm text-cyan-600 font-medium">더보기 →</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">여름 성수기 대비 사전 예약 권장</h3>
                <span className="text-sm text-gray-500">2026-03-05</span>
              </div>
              <p className="text-gray-700 mb-3">
                여름철은 해충과 바이러스 번식의 성수기입니다.
                본격적인 계절이 시작되기 전에 미리 예약하시고
                정기적인 방역으로 건강한 환경을 유지하세요.
              </p>
              <div className="text-sm text-cyan-600 font-medium">더보기 →</div>
            </div>
          </div>
        </div>
      </section>

      {/* 연락처 Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">연락처</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cyan-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">전화</h3>
              <p className="text-gray-600 mb-4">
                <span className="block text-gray-500">월-금 09:00-18:00</span>
                <span className="text-2xl font-bold text-cyan-600">031-877-3613</span>
              </p>
              <p className="text-sm text-gray-600">
                긴급 방역 필요 시 24시간 대응 가능합니다
              </p>
            </div>

            <div className="bg-cyan-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">위치</h3>
              <p className="text-gray-600 mb-4">
                <span className="block text-gray-500">경기도 양주시</span>
                <span className="font-bold text-gray-800">만송로 366</span>
              </p>
              <p className="text-sm text-gray-600">
                현장 방문 및 상담 가능합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 운영 시간 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">운영 시간</h3>
            <div className="space-y-3 max-w-sm mx-auto">
              <div className="flex justify-between text-gray-700">
                <span>월-금</span>
                <span className="font-bold">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>토요일</span>
                <span className="font-bold">09:00 - 13:00</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>일요일·공휴일</span>
                <span className="font-bold">휴무</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3 text-sm text-gray-600">
                ⚠️ 긴급 방역이 필요한 경우 24시간 대응합니다
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            더 도움이 필요하신가요?
          </h2>
          <p className="text-lg mb-8">
            이지케어 고객지원팀이 항상 준비되어 있습니다.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            상담 신청하기
          </Link>
        </div>
      </section>
    </>
  );
}
