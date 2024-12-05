import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export const BoardWrite = ({ addPost }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/boardwrite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "오류가 발생했습니다");
      }

      const data = await response.json();
      alert(data.message);
      addPost(data.data);
      setTitle("");
      setContent("");
      setIsFormOpen(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const CancelForm = () => {
    const confirmCancel = window.confirm("작성을 취소 하시겠습니까?");
    if (confirmCancel) {
      setIsFormOpen(false);
    }
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full ms-5 hover:bg-blue-600 transition duration-300"
        onClick={() => setIsFormOpen(true)}
      >
        글 작성
      </button>
      {isFormOpen && (
        <form
          className="border w-1/2 bg-white shadow-md rounded-lg p-6 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-end">
            <button type="button" onClick={() => setIsFormOpen(false)}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <h2 className="text-3xl font-bold text-center mt-4 mb-6">글 작성</h2>

          <label className="block text-lg font-medium mb-2">제목</label>
          <input
            id="write-form-title"
            type="text"
            placeholder="제목을 입력하세요"
            className="block w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="block text-lg font-medium mb-2">내용</label>
          <textarea
            itemID="write-form-content"
            placeholder="내용을 입력하세요"
            className="block w-full p-2 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button className="w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition duration-300">
            작성
          </button>
          <button
            className="w-full mt-4 bg-red-400 text-white font-bold py-3 rounded-xl hover:bg-red-500 transition duration-300"
            onClick={(e) => {
              e.preventDefault();
              CancelForm();
            }}
          >
            취소
          </button>
        </form>
      )}
    </>
  );
};
