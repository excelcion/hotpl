import React, { useState, useEffect } from "react";
import { PiCheckCircle, PiSpinner, PiStar, PiArrowRight, PiListNumbers } from "react-icons/pi";

const Progress = () => {
  const [progress, setProgress] = useState(50);
  const [animatedProgress, setAnimatedProgress] = useState(10);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiStar className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">진전</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Progress (진전)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 진행 바 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 진행 바</h3>
          <div className="w-full bg-gray-200 rounded-md h-4">
            <div className="bg-blue-500 h-4 rounded-md" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-center mt-2">{progress}%</p>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={progress} 
            onChange={(e) => setProgress(e.target.value)} 
            className="w-full mt-4"
          />
        </div>

        {/* 2️⃣ 컬러 진행 바 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">컬러 진행 바</h3>
          <div className="w-full bg-gray-200 rounded-md h-4">
            <div className="bg-green-500 h-4 rounded-md" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-center mt-2 text-green-500">{progress}%</p>
        </div>

        {/* 3️⃣ 애니메이션 진행 바 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiSpinner className="animate-spin mr-2" /> 애니메이션 진행 바</h3>
          <div className="w-full bg-gray-200 rounded-md h-4">
            <div className="bg-indigo-500 h-4 rounded-md transition-all duration-300" style={{ width: `${animatedProgress}%` }}></div>
          </div>
          <p className="text-center mt-2 text-indigo-500">{animatedProgress}%</p>
        </div>

        {/* 4️⃣ 원형 진행 바 */}
        <div className="w-full py-8 flex justify-left flex-col">
          <h3 className="text-xl mb-4">원형 진행 바</h3>
          <div className="relative w-20 h-20">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle className="text-gray-200 stroke-current" strokeWidth="4" fill="transparent" r="16" cx="18" cy="18"></circle>
              <circle 
                className="text-purple-500 stroke-current" 
                strokeWidth="4" fill="transparent" r="16" cx="18" cy="18"
                strokeDasharray="100"
                strokeDashoffset={100 - progress}
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
              {progress}%
            </div>
          </div>
        </div>

        {/* 5️⃣ 단계별 진행 바 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiListNumbers className="mr-2" /> 단계별 진행 바</h3>
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className={`w-10 h-10 flex items-center justify-center rounded-full ${step >= s ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`}>
                {s}
              </div>
            ))}
          </div>
          <div className="mt-4 flex space-x-4">
            <button 
              onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-gray-400 text-white rounded-md"
            >
              이전
            </button>
            <button 
              onClick={() => setStep((prev) => Math.min(prev + 1, 4))}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              다음
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Progress;
