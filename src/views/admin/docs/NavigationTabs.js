import React, { useState } from "react";
import { PiHouse, PiUserCircle, PiGear, PiChartBar, PiList, PiCaretDown } from "react-icons/pi";

const TABS = [
  { id: 1, name: "홈", icon: <PiHouse /> },
  { id: 2, name: "프로필", icon: <PiUserCircle /> },
  { id: 3, name: "설정", icon: <PiGear /> },
  { id: 4, name: "통계", icon: <PiChartBar /> },
];

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiList className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">탐색 및 탭</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Navigation & Tabs (탐색 및 탭)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 탭 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 탭</h3>
          <div className="flex space-x-4 border-b">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-lg ${activeTab === tab.id ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* 2️⃣ 아이콘 포함 탭 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">아이콘 포함 탭</h3>
          <div className="flex space-x-4 border-b">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 text-lg ${activeTab === tab.id ? "border-b-2 border-green-500 text-green-500" : "text-gray-500"}`}
              >
                {tab.icon}
                <span className="ml-2">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 3️⃣ 애니메이션 언더라인 탭 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">애니메이션 언더라인 탭</h3>
          <div className="relative">
            <div className="flex space-x-4 border-b">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-lg relative transition duration-300 ${activeTab === tab.id ? "text-purple-500" : "text-gray-500"}`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div
              className="absolute bottom-0 h-1 bg-purple-500 transition-all duration-300"
              style={{
                width: `${100 / TABS.length}%`,
                transform: `translateX(${(activeTab - 1) * 100}%)`,
              }}
            />
          </div>
        </div>

        {/* 4️⃣ 카드형 탭 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">카드형 탭</h3>
          <div className="flex space-x-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md shadow-md ${activeTab === tab.id ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-600"}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* 5️⃣ 반응형 드롭다운 탭 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">반응형 드롭다운 탭</h3>
          <div className="relative inline-block">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-4 py-2 bg-indigo-500 text-white rounded-md flex items-center"
            >
              {TABS.find((tab) => tab.id === activeTab)?.name} <PiCaretDown className="ml-2" />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-md">
                {TABS.map((tab) => (
                  <li key={tab.id} className="border-b last:border-0">
                    <button
                      onClick={() => {
                        setActiveTab(tab.id);
                        setDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-gray-200"
                    >
                      {tab.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default NavigationTabs;
