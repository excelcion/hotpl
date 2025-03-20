import React, { useState } from "react";
import { PiUser, PiEnvelope, PiLock, PiWarning, PiCheckCircle } from "react-icons/pi";

const Forms = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", gender: "" });
  const [agreed, setAgreed] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "password") {
      if (e.target.value.length < 6) {
        setPasswordError("비밀번호는 최소 6자 이상이어야 합니다.");
      } else {
        setPasswordError("");
      }
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiUser className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">양식</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Forms (양식)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 입력 필드 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 입력 필드</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
            className="border p-2 w-full rounded-md"
          />
        </div>

        {/* 2️⃣ 아이콘 포함 입력 필드 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">아이콘 포함 입력 필드</h3>
          <div className="relative">
            <PiEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요"
              className="border pl-10 p-2 w-full rounded-md"
            />
          </div>
        </div>

        {/* 3️⃣ 선택 필드 (드롭다운) */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">선택 필드</h3>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
          >
            <option value="">성별 선택</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </select>
        </div>

        {/* 4️⃣ 체크박스 및 라디오 버튼 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">체크박스 및 라디오 버튼</h3>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="gender" value="male" onChange={handleChange} className="mr-2" />
              남성
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="female" onChange={handleChange} className="mr-2" />
              여성
            </label>
            <label className="flex items-center">
              <input type="radio" name="gender" value="other" onChange={handleChange} className="mr-2" />
              기타
            </label>
          </div>

          <div className="mt-4">
            <label className="flex items-center">
              <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} className="mr-2" />
              약관에 동의합니다.
            </label>
          </div>
        </div>

        {/* 5️⃣ 검증 포함 입력 필드 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">검증 포함 입력 필드</h3>
          <div className="relative">
            <PiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호 입력"
              className="border pl-10 p-2 w-full rounded-md"
            />
            {passwordError && (
              <div className="mt-2 text-red-500 flex items-center">
                <PiWarning className="mr-2" /> {passwordError}
              </div>
            )}
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="w-full py-8">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md w-full flex items-center justify-center">
            제출 <PiCheckCircle className="ml-2" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Forms;
