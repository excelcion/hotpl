import React from "react";

// components
import IconsAdmin from "../../../components/Icons/IconAdmin.js";

const LIST_ITEMS = [
    { title: "대시보드", icon: "PiLayoutDuotone", description: "전체적인 개요 및 주요 정보 제공" },
    { title: "사용자 관리", icon: "PiUsers", description: "사용자 계정 및 권한 관리" },
    { title: "설정", icon: "PiGear", description: "앱 기본 설정 조정" },
    { title: "공지사항", icon: "PiMegaphone", description: "새로운 공지 및 업데이트" },
    { title: "문의사항", icon: "PiEnvelope", description: "고객 문의 및 피드백 확인" },
];

const List = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap mt-4">

                {/* 페이지 제목 */}
                <div className="flex w-full pb-4 border-b">
                    <div className="bg-main-800 p-3 rounded-md">
                        <IconsAdmin icon="PiListBullets" className="text-3xl fill-white" />
                    </div>
                    <div className="ml-2">
                        <ul className="flex items-center text-sm">
                            <li><span className="text-gray-500">UI 문서화</span></li>
                            <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
                            <li><span className="text-black font-bold">리스트</span></li>
                        </ul>
                        <h3 className="text-2xl font-bold">리스트 UI</h3>
                    </div>
                </div>

                {/* 리스트 영역 */}
                <div className="w-full py-8">
                    <h3 className="text-xl mb-4">기본 리스트</h3>
                    <ul className="bg-white shadow-md rounded-md divide-y divide-gray-200">
                        {LIST_ITEMS.map((item, index) => (
                            <li key={index} className="p-4 flex items-center hover:bg-gray-100 transition">
                                <IconsAdmin icon={item.icon} className="text-lg text-main-700 mr-4" />
                                <div>
                                    <p className="text-lg font-semibold">{item.title}</p>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* 아이콘 리스트 */}
                <div className="w-full py-8">
                    <h3 className="text-xl mb-4">아이콘 포함 리스트</h3>
                    <ul className="grid grid-cols-2 gap-4">
                        {LIST_ITEMS.map((item, index) => (
                            <li key={index} className="p-4 flex items-center bg-gray-100 rounded-md hover:shadow-md transition">
                                <IconsAdmin icon={item.icon} className="text-2xl text-main-700 mr-3" />
                                <span className="text-lg font-medium">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 그룹화된 리스트 */}
                <div className="w-full py-8">
                    <h3 className="text-xl mb-4">그룹화된 리스트</h3>
                    <div className="bg-white shadow-md rounded-md p-4">
                        <div className="font-semibold text-lg border-b pb-2 mb-3">관리 메뉴</div>
                        <ul className="divide-y divide-gray-200">
                            {LIST_ITEMS.slice(0, 3).map((item, index) => (
                                <li key={index} className="p-3 flex items-center hover:bg-gray-100 transition">
                                    <IconsAdmin icon={item.icon} className="text-xl text-main-700 mr-4" />
                                    <span className="text-base">{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white shadow-md rounded-md p-4 mt-6">
                        <div className="font-semibold text-lg border-b pb-2 mb-3">고객 지원</div>
                        <ul className="divide-y divide-gray-200">
                            {LIST_ITEMS.slice(3).map((item, index) => (
                                <li key={index} className="p-3 flex items-center hover:bg-gray-100 transition">
                                    <IconsAdmin icon={item.icon} className="text-xl text-main-700 mr-4" />
                                    <span className="text-base">{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default List;
