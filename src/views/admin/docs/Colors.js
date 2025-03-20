import React, { useEffect, useState } from "react";

// components
import IconsAdmin from "../../../components/Icons/IconAdmin.js";

const COLORS = [
    { title: "메인 색상", prefix: "main", shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { title: "서브 색상", prefix: "sub", shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { title: "포인트 색상", prefix: "point", shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { title: "에러 색상", prefix: "error", shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { title: "성공 색상", prefix: "success", shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { title: "경고 색상", prefix: "warning", shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { title: "정보 색상", prefix: "info", shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    { title: "보조 색상", prefix: "accent", shades: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
];

const Colors = () => {
    const [colorCodes, setColorCodes] = useState({});

    useEffect(() => {
        const newColorCodes = {};
        COLORS.forEach(({ prefix, shades }) => {
            shades.forEach((shade) => {
                // 동적으로 생성한 Tailwind 클래스의 실제 색상 값을 가져옴
                const element = document.createElement("div");
                element.className = `bg-${prefix}-${shade}`;
                document.body.appendChild(element);

                const color = window.getComputedStyle(element).backgroundColor;
                document.body.removeChild(element);

                // RGB → HEX 변환
                newColorCodes[`${prefix}-${shade}`] = rgbToHex(color);
            });
        });
        setColorCodes(newColorCodes);
    }, []);

    // RGB → HEX 변환 함수
    const rgbToHex = (rgb) => {
        const result = rgb.match(/\d+/g);
        if (!result) return "#000000";
        return `#${((1 << 24) + (parseInt(result[0]) << 16) + (parseInt(result[1]) << 8) + parseInt(result[2]))
            .toString(16)
            .slice(1)
            .toUpperCase()}`;
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap mt-4">

                    {/* 페이지 제목 */}
                    <div className="flex w-full pb-4 border-b">
                        <div className="bg-main-800 p-3 rounded-md">
                            <IconsAdmin icon="PiPaintBrushDuotone" className="text-3xl fill-white" />
                        </div>
                        <div className="ml-2">
                            <ul className="flex items-center text-sm">
                                <li><span className="text-gray-500">UI 문서화</span></li>
                                <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
                                <li><span className="text-black font-bold">색상</span></li>
                            </ul>
                            <h3 className="text-2xl font-bold">색상</h3>
                        </div>
                    </div>

                    {/* 색상 그룹 */}
                    {COLORS.map(({ title, prefix, shades }) => (
                        <div key={prefix} className="w-full py-8">
                            <h3 className="text-xl mb-4">{title}</h3>
                            <div className="grid grid-cols-9 gap-4">
                                {shades.map((shade) => (
                                    <div key={shade} className="flex flex-col justify-center items-center col-span-1">
                                        <div className={`bg-${prefix}-${shade} w-20 h-20 rounded-md border`}></div>
                                        <p className="text-base my-1 capitalize">{`${prefix} ${shade}`}</p>
                                        <p className="text-sm">{colorCodes[`${prefix}-${shade}`] || "Loading..."}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}
export default Colors;