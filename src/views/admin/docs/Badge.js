import React, { useState, useEffect } from "react";
import { PiCheckCircle, PiXCircle, PiInfo, PiWarning, PiBell } from "react-icons/pi";

const Badge = () => {
  const [notificationCount, setNotificationCount] = useState(5);
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiBell className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">배지</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Badge (배지)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 배지 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 배지</h3>
          <div className="flex space-x-4">
            <span className="px-3 py-1 bg-blue-500 text-white rounded-md">정보</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-md">성공</span>
            <span className="px-3 py-1 bg-red-500 text-white rounded-md">위험</span>
          </div>
        </div>

        {/* 2️⃣ 둥근 배지 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">둥근 배지</h3>
          <div className="flex space-x-4">
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full">정보</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full">성공</span>
            <span className="px-3 py-1 bg-red-500 text-white rounded-full">위험</span>
          </div>
        </div>

        {/* 3️⃣ 아이콘 포함 배지 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">아이콘 포함 배지</h3>
          <div className="flex space-x-4">
            <span className="px-3 py-1 bg-blue-500 text-white rounded-md flex items-center">
              <PiInfo className="mr-2" /> 정보
            </span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-md flex items-center">
              <PiCheckCircle className="mr-2" /> 성공
            </span>
            <span className="px-3 py-1 bg-red-500 text-white rounded-md flex items-center">
              <PiXCircle className="mr-2" /> 오류
            </span>
          </div>
        </div>

        {/* 4️⃣ 알림 배지 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">알림 배지</h3>
          <div className="relative inline-block">
            <PiBell className="text-3xl text-gray-600" />
            {notificationCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                {notificationCount}
              </span>
            )}
          </div>
          <button 
            className="mt-2 ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => setNotificationCount(notificationCount - 1)}
          >
            알림 감소
          </button>
        </div>

        {/* 5️⃣ 동적 배지 (토스트 메시지 포함) */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">동적 배지</h3>
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={() => setShowToast(true)}
          >
            토스트 메시지 보기
          </button>

          {showToast && (
            <div className="fixed top-4 right-4 bg-white shadow-lg rounded-md p-4">
              <PiCheckCircle className="text-green-500 text-2xl mr-2" />
              <span className="text-lg">작업이 완료되었습니다.</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Badge;
