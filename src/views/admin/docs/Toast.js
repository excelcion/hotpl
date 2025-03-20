import React, { useState, useEffect } from "react";
import { PiBell, PiCheckCircle, PiWarning, PiXCircle, PiInfo } from "react-icons/pi";

const Toast = () => {
  const [toasts, setToasts] = useState([]);
  const [autoCloseToast, setAutoCloseToast] = useState(null);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts([...toasts, { id, type, message }]);

    if (type === "auto") {
      setAutoCloseToast(id);
    }
  };

  useEffect(() => {
    if (autoCloseToast) {
      const timer = setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== autoCloseToast));
        setAutoCloseToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [autoCloseToast]);

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
              <li><span className="text-black font-bold">토스트</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Toast (토스트)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 토스트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 토스트</h3>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => addToast("default", "기본 토스트 메시지")}
          >
            기본 토스트 열기
          </button>
        </div>

        {/* 2️⃣ 컬러 토스트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">컬러 토스트</h3>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={() => addToast("success", "성공 메시지")}>
              성공 토스트
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={() => addToast("error", "오류 메시지")}>
              오류 토스트
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md" onClick={() => addToast("warning", "경고 메시지")}>
              경고 토스트
            </button>
          </div>
        </div>

        {/* 3️⃣ 자동 닫힘 토스트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">자동 닫힘 토스트</h3>
          <button 
            className="px-4 py-2 bg-indigo-500 text-white rounded-md"
            onClick={() => addToast("auto", "이 토스트는 3초 후 자동으로 닫힙니다.")}
          >
            자동 닫힘 토스트
          </button>
        </div>

        {/* 4️⃣ 아이콘 포함 토스트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">아이콘 포함 토스트</h3>
          <button 
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
            onClick={() => addToast("icon", "아이콘 포함 메시지")}
          >
            아이콘 포함 토스트
          </button>
        </div>

        {/* 5️⃣ 애니메이션 토스트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">애니메이션 토스트</h3>
          <button 
            className="px-4 py-2 bg-purple-500 text-white rounded-md"
            onClick={() => addToast("animated", "애니메이션 토스트 메시지")}
          >
            애니메이션 토스트
          </button>
        </div>

        {/* 토스트 컨테이너 */}
        <div className="fixed top-5 right-5 space-y-2 z-50">
          {toasts.map((toast) => (
            <div 
              key={toast.id} 
              className={`p-4 rounded-md shadow-md text-white flex items-center space-x-3 ${
                toast.type === "success" ? "bg-green-500" :
                toast.type === "error" ? "bg-red-500" :
                toast.type === "warning" ? "bg-yellow-500" :
                toast.type === "animated" ? "bg-purple-500 animate-bounce" :
                "bg-gray-700"
              }`}
            >
              {toast.type === "success" && <PiCheckCircle className="text-white" />}
              {toast.type === "error" && <PiXCircle className="text-white" />}
              {toast.type === "warning" && <PiWarning className="text-white" />}
              {toast.type === "icon" && <PiInfo className="text-white" />}
              <span>{toast.message}</span>
              <button className="ml-auto" onClick={() => setToasts(toasts.filter(t => t.id !== toast.id))}>
                <PiXCircle className="text-white" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Toast;
