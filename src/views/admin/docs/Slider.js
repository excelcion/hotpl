import React, { useState } from "react";
import { PiArrowsHorizontal, PiRuler, PiGraph, PiStar, PiColumns } from "react-icons/pi";

const Slider = () => {
  const [value, setValue] = useState(50);
  const [colorValue, setColorValue] = useState(30);
  const [sizeValue, setSizeValue] = useState(20);
  const [rangeValues, setRangeValues] = useState([20, 80]);
  const [animatedValue, setAnimatedValue] = useState(10);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiArrowsHorizontal className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">슬라이더</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Slider (슬라이더)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 슬라이더 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiRuler className="mr-2" /> 기본 슬라이더</h3>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            className="w-full"
          />
          <p className="text-center mt-2">값: {value}</p>
        </div>

        {/* 2️⃣ 색상 변경 슬라이더 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiColumns className="mr-2" /> 색상 변경 슬라이더</h3>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={colorValue} 
            onChange={(e) => setColorValue(e.target.value)} 
            className="w-full accent-red-500"
          />
          <p className="text-center mt-2 text-red-500">값: {colorValue}</p>
        </div>

        {/* 3️⃣ 크기 조정 슬라이더 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiStar className="mr-2" /> 크기 조정 슬라이더</h3>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sizeValue} 
            onChange={(e) => setSizeValue(e.target.value)} 
            className="w-full h-2 accent-green-500"
          />
          <p className="text-center mt-2 text-green-500">값: {sizeValue}</p>
        </div>

        {/* 4️⃣ 범위 선택 슬라이더 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiGraph className="mr-2" /> 범위 선택 슬라이더</h3>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={rangeValues[0]} 
            onChange={(e) => setRangeValues([+e.target.value, rangeValues[1]])} 
            className="w-full accent-blue-500"
          />
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={rangeValues[1]} 
            onChange={(e) => setRangeValues([rangeValues[0], +e.target.value])} 
            className="w-full accent-blue-500 mt-2"
          />
          <p className="text-center mt-2 text-blue-500">범위: {rangeValues[0]} - {rangeValues[1]}</p>
        </div>

        {/* 5️⃣ 애니메이션 슬라이더 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiArrowsHorizontal className="mr-2" /> 애니메이션 슬라이더</h3>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={animatedValue} 
            onChange={(e) => setAnimatedValue(e.target.value)} 
            className="w-full accent-purple-500 transition-all duration-300 ease-in-out"
          />
          <p className="text-center mt-2 text-purple-500">값: {animatedValue}</p>
        </div>

      </div>
    </div>
  );
};

export default Slider;
