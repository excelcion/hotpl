import React, { useState, useEffect } from "react";
import { PiXCircle, PiCheckCircle, PiWarning, PiBell, PiClock } from "react-icons/pi";

const Modal = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [iconModal, setIconModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [animatedModal, setAnimatedModal] = useState(false);
  const [autoCloseModal, setAutoCloseModal] = useState(false);

  useEffect(() => {
    if (autoCloseModal) {
      const timer = setTimeout(() => setAutoCloseModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [autoCloseModal]);

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
              <li><span className="text-black font-bold">모달</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Modal (모달)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 모달 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 모달</h3>
          <button onClick={() => setBasicModal(true)} className="px-4 py-2 bg-blue-500 text-white rounded-md">
            기본 모달 열기
          </button>
          {basicModal && (
            <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
              <div className="bg-white p-6 rounded-md shadow-lg">
                <h3 className="text-xl font-bold">기본 모달</h3>
                <p className="mt-2">이것은 기본적인 모달 창입니다.</p>
                <button onClick={() => setBasicModal(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 2️⃣ 아이콘 포함 모달 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">아이콘 포함 모달</h3>
          <button onClick={() => setIconModal(true)} className="px-4 py-2 bg-green-500 text-white rounded-md">
            아이콘 모달 열기
          </button>
          {iconModal && (
            <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
              <div className="bg-white p-6 rounded-md shadow-lg flex flex-col items-center">
                <PiCheckCircle className="text-4xl text-green-500 mb-2" />
                <h3 className="text-xl font-bold">완료되었습니다!</h3>
                <p className="mt-2">작업이 정상적으로 처리되었습니다.</p>
                <button onClick={() => setIconModal(false)} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 3️⃣ 확인/취소 버튼 모달 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">확인/취소 버튼 모달</h3>
          <button onClick={() => setConfirmModal(true)} className="px-4 py-2 bg-yellow-500 text-white rounded-md">
            확인 모달 열기
          </button>
          {confirmModal && (
            <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
              <div className="bg-white p-6 rounded-md shadow-lg">
                <h3 className="text-xl font-bold">정말 삭제하시겠습니까?</h3>
                <p className="mt-2 text-red-500 flex items-center">
                  <PiWarning className="mr-2" /> 이 작업은 되돌릴 수 없습니다.
                </p>
                <div className="mt-4 flex justify-end space-x-4">
                  <button onClick={() => setConfirmModal(false)} className="px-4 py-2 bg-gray-500 text-white rounded-md">
                    취소
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md">삭제</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4️⃣ 애니메이션 포함 모달 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">애니메이션 포함 모달</h3>
          <button onClick={() => setAnimatedModal(true)} className="px-4 py-2 bg-purple-500 text-white rounded-md">
            애니메이션 모달 열기
          </button>
          {animatedModal && (
            <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50 transition-opacity duration-300">
              <div className="bg-white p-6 rounded-md shadow-lg transform transition-all duration-300 scale-90 animate-fadeIn">
                <h3 className="text-xl font-bold">애니메이션 모달</h3>
                <p className="mt-2">애니메이션 효과가 적용된 모달입니다.</p>
                <button onClick={() => setAnimatedModal(false)} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">
                  닫기
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 5️⃣ 자동 닫힘 모달 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">자동 닫힘 모달</h3>
          <button onClick={() => setAutoCloseModal(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-md">
            자동 닫힘 모달 열기
          </button>
          {autoCloseModal && (
            <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50">
              <div className="bg-white p-6 rounded-md shadow-lg flex flex-col items-center">
                <PiClock className="text-4xl text-indigo-500 mb-2" />
                <h3 className="text-xl font-bold">자동 닫힘 모달</h3>
                <p className="mt-2">이 모달은 3초 후 자동으로 닫힙니다.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Modal;
