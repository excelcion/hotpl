import React, { useState, useEffect } from "react";
import { PiUserCircle, PiUserPlus, PiUserCheck, PiUserMinus } from "react-icons/pi";

// 아바타 데이터
const USERS = [
  { id: 1, name: "김민수", status: "online", image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg" },
  { id: 2, name: "이영희", status: "offline", image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg" },
  { id: 3, name: "박철수", status: "busy", image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg" },
  { id: 4, name: "최지훈", status: "away", image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg" },
  { id: 5, name: "한가영", status: "online", image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg" },
];

const Avatar = () => {
  const [users, setUsers] = useState(USERS);
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
            <PiUserCircle className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">화신</span></li>
            </ul>
            <h3 className="text-2xl font-bold">아바타 UI</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 아바타 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 아바타</h3>
          <div className="flex space-x-4">
            {users.map((user) => (
              <img key={user.id} src={user.image} alt={user.name} className="w-12 h-12 rounded-md shadow-md" />
            ))}
          </div>
        </div>

        {/* 2️⃣ 원형 아바타 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">원형 아바타</h3>
          <div className="flex space-x-4">
            {users.map((user) => (
              <img key={user.id} src={user.image} alt={user.name} className="w-12 h-12 rounded-full shadow-md" />
            ))}
          </div>
        </div>

        {/* 3️⃣ 상태 표시 아바타 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">상태 표시 아바타</h3>
          <div className="flex space-x-4">
            {users.map((user) => (
              <div key={user.id} className="relative">
                <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full shadow-md" />
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full 
                  ${user.status === "online" ? "bg-green-500" : ""}
                  ${user.status === "offline" ? "bg-gray-500" : ""}
                  ${user.status === "busy" ? "bg-red-500" : ""}
                  ${user.status === "away" ? "bg-yellow-500" : ""}`} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* 4️⃣ 그룹 아바타 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">그룹 아바타</h3>
          <div className="flex">
            {users.slice(0, 3).map((user, index) => (
              <img key={user.id} src={user.image} alt={user.name} className={`w-12 h-12 rounded-full shadow-md -ml-3 border-2 border-white ${index === 0 ? "ml-0" : ""}`} />
            ))}
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center -ml-3 border-2 border-white text-gray-700">
              +{users.length - 3}
            </div>
          </div>
        </div>

        {/* 5️⃣ 프로필 카드 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">프로필 카드</h3>
          <div className="grid grid-cols-2 gap-4">
            {users.map((user) => (
              <div key={user.id} className="p-4 bg-white shadow-md rounded-md flex items-center">
                <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className={`text-sm 
                    ${user.status === "online" ? "text-green-500" : ""}
                    ${user.status === "offline" ? "text-gray-500" : ""}
                    ${user.status === "busy" ? "text-red-500" : ""}
                    ${user.status === "away" ? "text-yellow-500" : ""}`}>
                    {user.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Avatar;
