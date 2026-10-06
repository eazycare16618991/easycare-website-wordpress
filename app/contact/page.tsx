'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    facility: '가정',
    service: '해충방역',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', facility: '가정', service: '해충방역', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-blue-600 to-blue-800 text-white flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            무료 상담 신청
          </h1>
          <p className="text-lg md:text-xl">
            전문가와 상담하고 맞춤형 솔루션을 받아보세요
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          {!submitted ? (
            <>
              <h2 className="text-3xl font-bold mb-8 text-center">상담 신청 양식</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-800 font-bold mb-2">
                    성명 <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="이름을 입력해주세요"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-800 font-bold mb-2">
                    전화번호 <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-800 font-bold mb-2">
                    이메일 <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* Facility Type */}
                <div>
                  <label className="block text-gray-800 font-bold mb-2">
                    시설 유형 <span className="text-rose-600">*</span>
                  </label>
                  <select
                    name="facility"
                    value={formData.facility}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option>가정</option>
                    <option>요식업</option>
                    <option>사무실</option>
                    <option>학교/유치원</option>
                    <option>식품공장</option>
                    <option>기타</option>
                  </select>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-gray-800 font-bold mb-2">
                    관심 서비스 <span className="text-rose-600">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option>해충방역</option>
                    <option>바이러스살균</option>
                    <option>완구소독</option>
                    <option>정기관리</option>
                    <option>기타</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-800 font-bold mb-2">
                    문의 내용
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="상담 받고 싶은 내용을 자유롭게 입력해주세요"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                  />
                </div>

                {/* Agreement */}
                <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                  <p className="mb-2">
                    개인정보 수집 및 이용에 동의합니다.
                    입력하신 정보는 상담을 위해서만 사용되며, 별도의 동의 없이 제3자와 공유되지 않습니다.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg transition"
                >
                  상담 신청하기
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">상담 신청이 완료되었습니다!</h2>
              <p className="text-gray-700 mb-2">감사합니다. {formData.name}님!</p>
              <p className="text-gray-600 mb-8">
                입력하신 전화번호({formData.phone})로<br />
                24시간 내에 저희 전문가가 연락드리겠습니다.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-lg font-bold transition"
              >
                다시 상담 신청
              </button>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 mb-4">급한 경우 직접 전화 주세요</p>
                <Link
                  href="tel:031-877-3613"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition"
                >
                  📞 031-877-3613
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">상담 안내</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="font-bold text-gray-800 mb-2">빠른 응답</h3>
              <p className="text-gray-600">
                24시간 내에 전문가가 연락드립니다. 급한 경우 즉시 연락주세요.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-gray-800 mb-2">무료 상담</h3>
              <p className="text-gray-600">
                상담료는 무료입니다. 정확한 견적서도 함께 드립니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-gray-800 mb-2">현장 방문</h3>
              <p className="text-gray-600">
                필요시 현장 방문하여 정확한 진단을 해드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">직접 연락하기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-rose-50 p-8 rounded-lg text-center border border-rose-200">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold text-gray-800 mb-2">전화</h3>
              <Link
                href="tel:031-877-3613"
                className="text-2xl font-bold text-rose-600 hover:text-rose-700"
              >
                031-877-3613
              </Link>
              <p className="text-sm text-gray-600 mt-3">
                월-금 09:00-18:00<br />
                토요일 09:00-13:00
              </p>
            </div>

            <div className="bg-rose-50 p-8 rounded-lg text-center border border-rose-200">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold text-gray-800 mb-2">방문</h3>
              <p className="text-gray-800 font-bold">
                경기도 양주시<br />
                만송로 366
              </p>
              <p className="text-sm text-gray-600 mt-3">
                현장 방문 및<br />
                상담 가능합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">주요 서비스</h2>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-600">
              <h3 className="font-bold text-gray-800">🐭 해충방역</h3>
              <p className="text-sm text-gray-600 mt-1">쥐, 바퀴벌레, 모기 등 모든 해충 제거</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-600">
              <h3 className="font-bold text-gray-800">✨ 바이러스살균 (VK130)</h3>
              <p className="text-sm text-gray-600 mt-1">99.999% 살균 효과의 FDA 승인 제품</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-600">
              <h3 className="font-bold text-gray-800">👶 완구소독</h3>
              <p className="text-sm text-gray-600 mt-1">유치원·어린이집 전문 스팀+살균 소독</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-rose-600">
              <h3 className="font-bold text-gray-800">🤖 AI 해충 인식</h3>
              <p className="text-sm text-gray-600 mt-1">카메라로 촬영한 해충을 AI가 정확히 분석</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
