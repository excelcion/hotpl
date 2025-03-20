import React, { useState } from "react";
import { PiInfo, PiWarning, PiCheckCircle, PiXCircle, PiQuestion } from "react-icons/pi";

const Tooltip = () => {
  const [clickedTooltip, setClickedTooltip] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiInfo className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">도구 설명</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Tooltip (도구 설명)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 툴팁 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 툴팁</h3>
          <div className="relative group inline-block">
            <button className="px-4 py-2 bg-gray-500 text-white rounded-md">툴팁 보기</button>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-black text-white text-center text-sm p-2 rounded-md opacity-0 group-hover:opacity-100 transition">
              기본 툴팁 메시지
            </div>
          </div>
        </div>

        {/* 2️⃣ 위치 변경 툴팁 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">위치 변경 툴팁</h3>
          <div className="flex space-x-6">
            <div className="relative group inline-block">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">위</button>
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-32 bg-black text-white text-sm text-center p-2 rounded-md hidden group-hover:block opacity-0 group-hover:opacity-100 transition">
                위쪽 툴팁
              </div>
            </div>
            <div className="relative group inline-block">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md">아래</button>
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-32 bg-black text-white text-sm text-center p-2 rounded-md hidden group-hover:block opacity-0 group-hover:opacity-100 transition">
                아래쪽 툴팁
              </div>
            </div>
            <div className="relative group inline-block">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">왼쪽</button>
              <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 w-32 bg-black text-white text-sm text-center p-2 rounded-md hidden group-hover:block opacity-0 group-hover:opacity-100 transition">
                왼쪽 툴팁
              </div>
            </div>
            <div className="relative group inline-block">
              <button className="px-4 py-2 bg-red-500 text-white rounded-md">오른쪽</button>
              <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 w-32 bg-black text-white text-sm text-center p-2 rounded-md hidden group-hover:block opacity-0 group-hover:opacity-100 transition">
                오른쪽 툴팁
              </div>
            </div>
          </div>
        </div>

        {/* 3️⃣ 컬러 툴팁 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">컬러 툴팁</h3>
          <div className="relative group inline-block">
            <button className="px-4 py-2 bg-purple-500 text-white rounded-md">컬러 툴팁</button>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-purple-500 text-white text-sm text-center p-2 rounded-md opacity-0 group-hover:opacity-100 transition">
              보라색 툴팁
            </div>
          </div>
        </div>

        {/* 4️⃣ 애니메이션 툴팁 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">애니메이션 툴팁</h3>
          <div className="relative group inline-block">
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-md">애니메이션</button>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-36 bg-indigo-500 text-white text-sm text-center p-2 rounded-md opacity-0 group-hover:opacity-100 transition transform scale-95 group-hover:scale-100">
              확대 애니메이션 툴팁
            </div>
          </div>
        </div>

        {/* 5️⃣ 클릭 툴팁 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">클릭 툴팁</h3>
          <div className="relative inline-block">
            <button 
              className="px-4 py-2 bg-gray-800 text-white rounded-md"
              onClick={() => setClickedTooltip(!clickedTooltip)}
            >
              클릭 툴팁
            </button>
            {clickedTooltip && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-gray-800 text-white text-center text-sm p-2 rounded-md">
                클릭하면 나타나는 툴팁
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tooltip;
