import React, { useState, useEffect } from "react";
import { PiBell, PiCheckCircle, PiInfo, PiWarning, PiXCircle } from "react-icons/pi";

// 알림 데이터
const NOTIFICATIONS = [
  { id: 1, message: "새로운 업데이트가 있습니다.", icon: PiInfo, type: "info", time: "방금 전", read: false },
  { id: 2, message: "작업이 성공적으로 완료되었습니다.", icon: PiCheckCircle, type: "success", time: "1시간 전", read: false },
  { id: 3, message: "경고! 저장 공간이 부족합니다.", icon: PiWarning, type: "warning", time: "3시간 전", read: false },
  { id: 4, message: "오류가 발생했습니다. 다시 시도해 주세요.", icon: PiXCircle, type: "error", time: "5시간 전", read: false },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // 알림 읽음 처리
  const markAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

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
              <li><span className="text-black font-bold">알림</span></li>
            </ul>
            <h3 className="text-2xl font-bold">알림 센터</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 알림 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 알림</h3>
          <ul className="bg-white shadow-md rounded-md divide-y divide-gray-200">
            {notifications.map((item) => (
              <li key={item.id} className="p-4 flex items-center hover:bg-gray-100 transition">
                <item.icon className={`text-2xl mr-4 
                  ${item.type === "info" ? "text-blue-500" : ""}
                  ${item.type === "success" ? "text-green-500" : ""}
                  ${item.type === "warning" ? "text-yellow-500" : ""}
                  ${item.type === "error" ? "text-red-500" : ""}`} 
                />
                <div>
                  <p className="text-lg">{item.message}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 2️⃣ 카드 스타일 알림 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">카드 스타일 알림</h3>
          <div className="grid grid-cols-2 gap-4">
            {notifications.map((item) => (
              <div key={item.id} className="p-4 bg-white shadow-md rounded-md flex items-center">
                <item.icon className="text-2xl mr-4" />
                <div>
                  <p className="text-lg">{item.message}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3️⃣ 토스트 알림 */}
        {showToast && (
          <div className="fixed top-4 right-4 bg-white shadow-lg rounded-md p-4">
            <PiCheckCircle className="text-green-500 text-2xl mr-2" />
            <span className="text-lg">작업이 완료되었습니다.</span>
          </div>
        )}

        {/* 4️⃣ 읽음/안읽음 상태 알림 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">읽음/안읽음 알림</h3>
          <ul className="divide-y divide-gray-200">
            {notifications.map((item) => (
              <li 
                key={item.id} 
                className={`p-4 flex items-center cursor-pointer ${item.read ? "bg-gray-200" : "bg-white hover:bg-gray-100 transition"}`}
                onClick={() => markAsRead(item.id)}
              >
                <item.icon className="text-2xl mr-4" />
                <div>
                  <p className="text-lg">{item.message}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
                {item.read ? <span className="ml-auto text-sm text-gray-400">읽음</span> : <span className="ml-auto text-sm text-blue-500">새 알림</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* 5️⃣ 알림 카운트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">알림 카운트</h3>
          <div className="relative inline-block">
            <PiBell className="text-3xl text-main-700" />
            {notifications.filter(n => !n.read).length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                {notifications.filter(n => !n.read).length}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Notifications;
