import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 회사정보 */}
          <div>
            <h3 className="font-bold text-lg mb-4">이지케어</h3>
            <p className="text-gray-300 text-sm mb-2">
              건강한 공간을 만드는 전문 방역 회사
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>주소: 경기도 양주시 만송로 366</li>
              <li>전화: 031-877-3613</li>
              <li>사업자번호: 368-87-01338</li>
            </ul>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/services/pest-control" className="hover:text-white">
                  해충방역
                </Link>
              </li>
              <li>
                <Link href="/services/disinfection" className="hover:text-white">
                  바이러스살균
                </Link>
              </li>
              <li>
                <Link href="/services/toy-cleaning" className="hover:text-white">
                  완구소독
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 */}
          <div>
            <h4 className="font-bold mb-4">회사</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white">
                  AI기술
                </Link>
              </li>
              <li>
                <Link href="/crm" className="hover:text-white">
                  고객관리
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div>
            <h4 className="font-bold mb-4">고객지원</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/support" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  상담신청
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* 저작권 */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} 이지케어. All rights reserved. | 개인정보처리방침
          </p>
        </div>
      </div>
    </footer>
  );
}
