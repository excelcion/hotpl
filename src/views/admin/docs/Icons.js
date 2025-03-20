import React from "react";
import { 
  PiUserCircle, PiBell, PiGear, PiHeart, PiStar, PiArrowRight, 
  PiCheckCircle, PiXCircle, PiWarning, PiArrowClockwise 
} from "react-icons/pi";

const Icons = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiStar className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">아이콘</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Icons (아이콘)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 아이콘 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 아이콘</h3>
          <div className="flex space-x-6 text-3xl">
            <PiUserCircle />
            <PiBell />
            <PiGear />
            <PiHeart />
            <PiStar />
          </div>
        </div>

        {/* 2️⃣ 컬러 아이콘 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">컬러 아이콘</h3>
          <div className="flex space-x-6 text-3xl">
            <PiCheckCircle className="text-green-500" />
            <PiXCircle className="text-red-500" />
            <PiWarning className="text-yellow-500" />
            <PiBell className="text-blue-500" />
            <PiHeart className="text-pink-500" />
          </div>
        </div>

        {/* 3️⃣ 크기별 아이콘 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">크기별 아이콘</h3>
          <div className="flex items-center space-x-4">
            <PiUserCircle className="text-xl" />
            <PiUserCircle className="text-2xl" />
            <PiUserCircle className="text-3xl" />
            <PiUserCircle className="text-4xl" />
          </div>
        </div>

        {/* 4️⃣ 버튼 내 아이콘 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">버튼 내 아이콘</h3>
          <div className="flex space-x-4">
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

        {/* 5️⃣ 애니메이션 아이콘 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">애니메이션 아이콘</h3>
          <div className="flex space-x-6 text-3xl">
            <PiArrowClockwise className="animate-spin text-indigo-500" />
            <PiHeart className="animate-pulse text-red-500" />
            <PiBell className="animate-bounce text-yellow-500" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Icons;
