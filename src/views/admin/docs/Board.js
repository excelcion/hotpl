import React, { useState } from "react";
import { PiNote, PiEye, PiHeart, PiChatCircle, PiSortAscending, PiSortDescending } from "react-icons/pi";

const BOARD_DATA = [
  { id: 1, title: "게시글 제목 1", author: "김민수", views: 120, likes: 15, comments: 8 },
  { id: 2, title: "게시글 제목 2", author: "이영희", views: 95, likes: 10, comments: 3 },
  { id: 3, title: "게시글 제목 3", author: "박철수", views: 200, likes: 30, comments: 12 },
  { id: 4, title: "게시글 제목 4", author: "최지훈", views: 180, likes: 25, comments: 10 },
  { id: 5, title: "게시글 제목 5", author: "한가영", views: 140, likes: 20, comments: 7 },
];

const Board = () => {
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // 정렬 함수
  const sortedData = [...BOARD_DATA].sort((a, b) =>
    sortOrder === "desc" ? b.views - a.views : a.views - b.views
  );

  // 페이징 처리
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap mt-4">

        {/* 페이지 제목 */}
        <div className="flex w-full pb-4 border-b">
          <div className="bg-main-800 p-3 rounded-md">
            <PiNote className="text-3xl text-white" />
          </div>
          <div className="ml-2">
            <ul className="flex items-center text-sm">
              <li><span className="text-gray-500">UI 문서화</span></li>
              <li className="mx-2"><span className="w-1 h-1 bg-gray-400 block rounded-full"></span></li>
              <li><span className="text-black font-bold">게시판</span></li>
            </ul>
            <h3 className="text-2xl font-bold">Board (게시판)</h3>
          </div>
        </div>

        {/* 1️⃣ 기본 게시판 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">기본 게시판</h3>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">번호</th>
                <th className="border p-2">제목</th>
                <th className="border p-2">작성자</th>
                <th className="border p-2">조회수</th>
              </tr>
            </thead>
            <tbody>
              {BOARD_DATA.map((post) => (
                <tr key={post.id} className="text-center">
                  <td className="border p-2">{post.id}</td>
                  <td className="border p-2">{post.title}</td>
                  <td className="border p-2">{post.author}</td>
                  <td className="border p-2">{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2️⃣ 아이콘 포함 게시판 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">아이콘 포함 게시판</h3>
          <ul className="bg-white shadow-md rounded-md divide-y divide-gray-200">
            {BOARD_DATA.map((post) => (
              <li key={post.id} className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{post.title}</p>
                  <p className="text-sm text-gray-500">{post.author}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <PiEye className="text-gray-500" /> {post.views}
                  <PiHeart className="text-red-500" /> {post.likes}
                  <PiChatCircle className="text-blue-500" /> {post.comments}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 3️⃣ 정렬 가능한 게시판 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4 flex items-center">
            정렬 가능한 게시판
            <button 
              onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")} 
              className="ml-2 px-2 py-1 bg-gray-300 rounded-md flex items-center"
            >
              {sortOrder === "desc" ? <PiSortDescending /> : <PiSortAscending />}
            </button>
          </h3>
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2">번호</th>
                <th className="border p-2">제목</th>
                <th className="border p-2">작성자</th>
                <th className="border p-2">조회수</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((post) => (
                <tr key={post.id} className="text-center">
                  <td className="border p-2">{post.id}</td>
                  <td className="border p-2">{post.title}</td>
                  <td className="border p-2">{post.author}</td>
                  <td className="border p-2">{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4️⃣ 페이징 포함 게시판 */}
        <div className="w-full py-8">
          <h3 className="text-xl mb-4">페이징 포함 게시판</h3>
          <table className="w-full border border-gray-300">
            <tbody>
              {paginatedData.map((post) => (
                <tr key={post.id} className="text-center">
                  <td className="border p-2">{post.id}</td>
                  <td className="border p-2">{post.title}</td>
                  <td className="border p-2">{post.author}</td>
                  <td className="border p-2">{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                {i + 1}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Board;
