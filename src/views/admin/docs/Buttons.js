import React, { useState, useEffect } from "react";
import { PiCheckCircle, PiXCircle, PiArrowRight,  PiToggleRight, PiToggleLeft } from "react-icons/pi";
import { RiLoader2Fill } from "react-icons/ri";

const Buttons = () => {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiCheckCircle className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">버튼</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Buttons (버튼)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 버튼 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 버튼</h3>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">기본 버튼</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">성공 버튼</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md">위험 버튼</button>
          </div>
        </div>

        {/* 2️⃣ 아이콘 포함 버튼 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">아이콘 포함 버튼</h3>
          <div className="space-x-4 flex">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center">
              <PiArrowRight className="mr-2" /> 다음
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center">
              <PiCheckCircle className="mr-2" /> 확인
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center">
              <PiXCircle className="mr-2" /> 취소
            </button>
          </div>
        </div>

        {/* 3️⃣ 크기별 버튼 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">크기별 버튼</h3>
          <div className="space-x-4">
            <button className="px-2 py-1 text-sm bg-gray-500 text-white rounded-md">작은 버튼</button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-md">기본 버튼</button>
            <button className="px-6 py-3 text-lg bg-gray-700 text-white rounded-md">큰 버튼</button>
          </div>
        </div>

        {/* 4️⃣ 로딩 버튼 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">로딩 버튼</h3>
          <button 
            className="px-4 py-2 bg-indigo-500 text-white rounded-md flex items-center"
            onClick={() => setLoading(true)}
            disabled={loading}
          >
            {loading ? <RiLoader2Fill className="animate-spin text-xl" /> : "로드 시작"}
          </button>
        </div>

        {/* 5️⃣ 토글 버튼 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">토글 버튼</h3>
          <button 
            className="px-4 py-2 bg-yellow-500 text-white rounded-md flex items-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <PiToggleRight className="mr-2" /> : <PiToggleLeft className="mr-2" />}
            {toggle ? "켜짐" : "꺼짐"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default Buttons;
