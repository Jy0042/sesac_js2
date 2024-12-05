import React from "react";

export const Main = ({ posts, deletePost }) => {
  return (
    <>
      <div className="p-4">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">번호</th>
              <th className="border border-gray-300 px-4 py-2">제목</th>
              <th className="border border-gray-300 px-4 py-2">내용</th>
              <th className="border border-gray-300 px-4 py-2">썸네일</th>
              <th className="border border-gray-300 px-4 py-2">작성일</th>
              <th className="border border-gray-300 px-4 py-2">삭제</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id}>
                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{post.title || "제목 없음"}</td>
                <td className="border border-gray-300 px-4 py-2">{post.content || "내용 없음"}</td>
                <td className="border border-gray-300 px-4 py-2">이미지</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(post.date).toLocaleString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => deletePost(post.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
