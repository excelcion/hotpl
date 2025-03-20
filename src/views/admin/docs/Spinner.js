import React, { useState } from "react";
import { PiSpinner, PiArrowClockwise, PiHourglass, PiCheckCircle, PiXCircle } from "react-icons/pi";

const Spinner = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiSpinner className="text-3xl text-white animate-spin" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">스피너</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Spinner (스피너)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 스피너 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 스피너</h3>
          <div className="flex items-center space-x-4">
            <PiSpinner className="text-3xl animate-spin" />
            <PiArrowClockwise className="text-3xl animate-spin" />
          </div>
        </div>

        {/* 2️⃣ 크기별 스피너 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">크기별 스피너</h3>
          <div className="flex items-center space-x-4">
            <PiSpinner className="text-xl animate-spin" />
            <PiSpinner className="text-2xl animate-spin" />
            <PiSpinner className="text-3xl animate-spin" />
            <PiSpinner className="text-4xl animate-spin" />
          </div>
        </div>

        {/* 3️⃣ 컬러 스피너 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">컬러 스피너</h3>
          <div className="flex items-center space-x-4">
            <PiSpinner className="text-3xl animate-spin text-blue-500" />
            <PiSpinner className="text-3xl animate-spin text-red-500" />
            <PiSpinner className="text-3xl animate-spin text-green-500" />
            <PiSpinner className="text-3xl animate-spin text-yellow-500" />
          </div>
        </div>

        {/* 4️⃣ 버튼 내 스피너 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">버튼 내 스피너</h3>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center space-x-2"
            onClick={() => setLoading(true)}
            disabled={loading}
          >
            {loading ? (
              <>
                <PiSpinner className="animate-spin" />
                <span>로딩 중...</span>
              </>
            ) : (
              "작업 시작"
            )}
          </button>
          {loading && (
            <div className="mt-4 p-4 bg-white shadow-md rounded-md flex items-center space-x-2">
              <PiHourglass className="text-3xl text-gray-500 animate-spin" />
              <span className="text-gray-500">작업을 처리 중입니다...</span>
            </div>
          )}
        </div>

        {/* 5️⃣ 로딩 애니메이션 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">로딩 애니메이션</h3>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Spinner;
