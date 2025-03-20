import React, { useState, useEffect } from "react";
import { PiUserCircle, PiFileText, PiChatCircleDots, PiCheckCircle, PiXCircle, PiClock } from "react-icons/pi";

// 활동 데이터
const ACTIVITY_ITEMS = [
  { id: 1, user: "김민수", action: "새로운 문서를 작성했습니다.", icon: PiFileText, time: "2시간 전", read: false },
  { id: 2, user: "이영희", action: "문서에 댓글을 남겼습니다.", icon: PiChatCircleDots, time: "3시간 전", read: false },
  { id: 3, user: "박철수", action: "작업을 완료했습니다.", icon: PiCheckCircle, time: "5시간 전", read: false },
  { id: 4, user: "최지훈", action: "요청을 거절했습니다.", icon: PiXCircle, time: "7시간 전", read: false },
  { id: 5, user: "한가영", action: "새로운 사용자가 등록되었습니다.", icon: PiUserCircle, time: "1일 전", read: false },
];

const Activity = () => {
  const [activities, setActivities] = useState(ACTIVITY_ITEMS);
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // 활동 읽음 처리
  const markAsRead = (id) => {
    setActivities(activities.map((item) => (item.id === id ? { ...item, read: true } : item)));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">
        
        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiUserCircle className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">활동</span></li>
            </ul>
            <h3 className="text-2xl font-bold">활동 로그</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 활동 로그 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 활동 로그</h3>
          <ul className="bg-white shadow-md rounded-md divide-y divide-gray-200">
            {activities.map((item) => (
              <li key={item.id} className="p-4 flex items-center hover:bg-gray-100 transition">
                <item.icon className="text-2xl text-main-700 mr-4" />
                <div>
                  <p className="text-lg font-semibold">{item.user}</p>
                  <p className="text-sm text-gray-500">{item.action}</p>
                </div>
                <span className="ml-auto text-sm text-gray-400">{item.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 2️⃣ 카드 스타일 활동 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">카드 스타일 활동</h3>
          <div className="grid grid-cols-2 gap-4">
            {activities.map((item) => (
              <div key={item.id} className="p-4 bg-white shadow-md rounded-md flex items-center">
                <item.icon className="text-2xl mr-4" />
                <div>
                  <p className="text-lg">{item.user} - {item.action}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3️⃣ 타임라인 스타일 활동 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">타임라인 활동</h3>
          <ul className="relative border-l border-gray-300">
            {activities.map((item) => (
              <li key={item.id} className="mb-6 ml-6">
                <span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 bg-main-700 text-white rounded-full">
                  <PiClock />
                </span>
                <p className="text-lg font-semibold">{item.user}</p>
                <p className="text-sm text-gray-500">{item.action} - {item.time}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ 읽음/안읽음 활동 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">읽음/안읽음 활동</h3>
          <ul className="divide-y divide-gray-200">
            {activities.map((item) => (
              <li 
                key={item.id} 
                className={`p-4 flex items-center cursor-pointer ${item.read ? "bg-gray-200" : "bg-white hover:bg-gray-100 transition"}`}
                onClick={() => markAsRead(item.id)}
              >
                <item.icon className="text-2xl mr-4" />
                <div>
                  <p className="text-lg">{item.user}</p>
                  <p className="text-sm text-gray-500">{item.action}</p>
                </div>
                {item.read ? <span className="ml-auto text-sm text-gray-400">읽음</span> : <span className="ml-auto text-sm text-blue-500">새 활동</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* 5️⃣ 활동 카운트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">활동 카운트</h3>
          <div className="relative inline-block">
            <PiUserCircle className="text-3xl text-main-700" />
            {activities.filter(a => !a.read).length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                {activities.filter(a => !a.read).length}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Activity;
