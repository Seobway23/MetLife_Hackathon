import { heightState } from '@/atom/customHeight';
import Layout from '@/components/layout/layout';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ReactTyped } from 'react-typed';
import { useEffect, useRef, useState } from 'react';
import { typeHeightState } from '@/atom/typedHeight';
import { insuranceProductState } from '@/atom/response';
import insuranceImg from '@/assets/toggle.svg';

export default function Result() {
  const typeRef = useRef<any>(null);
  const data = useRecoilValue(insuranceProductState);
  const [isTypedComplete, setIsTypedComplete] = useState(false);
  const [typedHeight, setTypeHeight] = useState(0);
  const [toggle, setToggle] = useState(false);

  const setHeight = useSetRecoilState(heightState);
  const calculatedHeight = `calc(100vh + ${(data.coverResponseList.length - 1) * 180}px)`;
  setHeight(calculatedHeight);

  const setTypedHeight = useSetRecoilState(typeHeightState);
  setTypedHeight(typedHeight);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  useEffect(() => {
    if (typeRef.current) {
      setTypeHeight(typeRef.current.clientHeight);
    }
  }, [isTypedComplete]);

  return (
    <Layout footerHidden={true}>
      <div className={`mx-2`}>
        <h2 className="mb-10 text-2xl font-bold tracking-tight my-4 text-gray-900">
          {data.productName}
        </h2>
        <button onClick={handleToggle} className="transform transition-transform duration-300">
          {toggle ? '🔼' : '▶️상세정보 확인하기'}
        </button>

        {toggle && <img src={insuranceImg} alt="보험상품 이미지" className="fadeIn" />}
        <div ref={typeRef} className="bg-white p-3 mb-2">
          <ReactTyped
            onComplete={() => setIsTypedComplete(true)}
            // strings={[`${data.aiText}`]}
            strings={[
              '안녕하세요, 고객님. 10년차 소방관이시군요. 고객님이 원하시는 보험 조건에 따라 추천드리겠습니다. 보장기간은 10년(120개월), 월 납부금액은 10만 원, 납입기간은 7년(84개월)이며, 비갱신형 보험을 원하시며, 보험금은 연금형태로 지급받고 싶으시군요. 또한 암을 보장해주는 상품을 찾고 계시다는 점을 고려하여 추천드리겠습니다. 감사합니다.',
            ]}
            typeSpeed={40}
          />
        </div>
        {isTypedComplete && (
          <div className={`${isTypedComplete ? 'fadeIn' : ''}`}>
            <div className="flex flex-col gap-y-4 w-full  items-center justify-center">
              <div className="p-4 w-full bg-white rounded-lg shadow-md">
                <div className="p-3 mb-2 rounded">
                  <p className="font-bold text-xl">Im 암보험 무배당 2309</p>
                  <p className="mt-8">암진단</p>
                  <p>
                    보장금액 : <strong>10,000,000원</strong>
                  </p>
                </div>
              </div>
              <div className="p-4 w-full bg-white rounded-lg shadow-md">
                <div className="p-3 mb-2 rounded">
                  <p className="font-bold text-xl">온라인 암보험 무배당</p>
                  <p className="mt-8">암진단</p>
                  <p>
                    보장금액 : <strong>13,000,000원</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600">
                보험기간: <strong>20년</strong>
              </p>
              <p className="text-gray-600">
                보험범위 지수: <strong>94.2</strong>
              </p>
              <p className="text-gray-600">
                가입 연령: <strong>19 ~ 60세</strong>
              </p>
              <p className="text-gray-600">
                기타 정보: <strong>기타정보</strong>{' '}
              </p>
            </div>
          </div>
        )}
      </div>
      {/* foo */}
      <div className="fixed bg-white w-[430px] bottom-0 p-4  shadow-md z-10 text-center">
        <p className="text-gray-600 font-bold">보험료: 8만원</p>
      </div>
    </Layout>
  );
}
