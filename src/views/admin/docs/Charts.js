import React from "react";
import { PiChartBar, PiGraph, PiChartLine, PiChartScatter, PiPipe } from "react-icons/pi";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// 차트 데이터
const CHART_DATA = [
  { name: "월", value: 400 },
  { name: "화", value: 300 },
  { name: "수", value: 500 },
  { name: "목", value: 200 },
  { name: "금", value: 600 },
  { name: "토", value: 700 },
  { name: "일", value: 400 },
];

const PIE_COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"];

const Charts = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiChartBar className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">차트</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Charts (차트)</h3>
          </div>
        </div>

        {/* 1️⃣ 막대 차트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiChartBar className="mr-2" /> 막대 차트</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={CHART_DATA}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 2️⃣ 꺾은선 차트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiChartLine className="mr-2" /> 꺾은선 차트</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={CHART_DATA}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#22C55E" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 3️⃣ 원형 차트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiPipe className="mr-2" /> 원형 차트</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={CHART_DATA} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {CHART_DATA.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 4️⃣ 영역 차트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiGraph className="mr-2" /> 영역 차트</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={CHART_DATA}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#F59E0B" fill="#FBBF24" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 5️⃣ 혼합 차트 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center"><PiChartScatter className="mr-2" /> 혼합 차트</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={CHART_DATA}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366F1" />
              <Line type="monotone" dataKey="value" stroke="#DC2626" strokeWidth={2} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Charts;
