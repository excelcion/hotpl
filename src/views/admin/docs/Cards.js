import React, { useState, useEffect } from "react";
import { PiHeart, PiShoppingCart, PiCheckCircle, PiXCircle, PiStar } from "react-icons/pi";

const Cards = () => {
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState(false);

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
            <PiShoppingCart className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">카드</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Cards (카드)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 카드 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 카드</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow-md rounded-md">카드 1</div>
            <div className="p-4 bg-white shadow-md rounded-md">카드 2</div>
            <div className="p-4 bg-white shadow-md rounded-md">카드 3</div>
          </div>
        </div>

        {/* 2️⃣ 이미지 포함 카드 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">이미지 포함 카드</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow-md rounded-md">
              <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="카드 이미지" className="rounded-md w-full" />
              <p className="mt-2 text-center">이미지 카드</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md">
              <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="카드 이미지" className="rounded-md w-full" />
              <p className="mt-2 text-center">이미지 카드</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md">
              <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="카드 이미지" className="rounded-md w-full" />
              <p className="mt-2 text-center">이미지 카드</p>
            </div>
          </div>
        </div>

        {/* 3️⃣ 아이콘 포함 카드 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">아이콘 포함 카드</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow-md rounded-md flex items-center">
              <PiCheckCircle className="text-green-500 text-2xl mr-2" />
              <span>확인된 카드</span>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md flex items-center">
              <PiXCircle className="text-red-500 text-2xl mr-2" />
              <span>취소된 카드</span>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md flex items-center">
              <PiStar className="text-yellow-500 text-2xl mr-2" />
              <span>추천 카드</span>
            </div>
          </div>
        </div>

        {/* 4️⃣ 상호작용 카드 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">상호작용 카드</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-white shadow-md rounded-md flex justify-between items-center">
              <span>좋아요 카드</span>
              <button onClick={() => setLiked(!liked)}>
                <PiHeart className={`text-2xl ${liked ? "text-red-500" : "text-gray-400"}`} />
              </button>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md flex justify-between items-center">
              <span>구매 카드</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">구매</button>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md flex justify-between items-center">
              <span>상세 보기</span>
              <button className="px-4 py-2 bg-gray-500 text-white rounded-md">보기</button>
            </div>
          </div>
        </div>

        {/* 5️⃣ 로딩 카드 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">로딩 카드</h3>
          <button 
            className="px-4 py-2 bg-indigo-500 text-white rounded-md flex items-center"
            onClick={() => setLoading(true)}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="animate-spin mr-2 border-2 border-white border-t-transparent rounded-full w-5 h-5"></div>
                로딩 중...
              </>
            ) : (
              "카드 로드"
            )}
          </button>

          {loading && (
            <div className="mt-4 p-4 bg-white shadow-md rounded-md">
              <p>카드 내용을 불러오는 중...</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Cards;
