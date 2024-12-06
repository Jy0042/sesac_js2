import React, { useState, useEffect } from "react";
import { MemoSearch } from "./components/MemoSearch";
import { MemoForm } from "./components/MemoForm";
import { MemoList } from "./components/MemoList";
import { MemoSort } from "./components/MemoSort";
import { MemoDetail } from "./components/MemoDetail";
import "./styles.css";

export const App = () => {
  // const [memos, setMemos] = useState([]); // 초기화... ?? 로컬 스토리지에 데이터가 있으면?? 그걸 불러온다. 없으면?? [] 로 초기화 한다.
  const [memos, setMemos] = useState(() => {
    const savedMemos = localStorage.getItem("memos");
    return savedMemos ? JSON.parse(savedMemos) : []; // 있으면 문자열을 다시 JSON으로 변환해서 저장, 아니면 빈값으로 초기화
  });

  const [searchQuery, setSearchQuery] = useState(""); // 검색 상태
  const [isDetailOpen, setIsDetailOpen] = useState(false); // 상세보기 여부
  const [selectedMemo, setSelectedMemo] = useState(null);

  const showDetail = (id) => {
    const memo = memos.find((m) => m.id === id);
    setSelectedMemo(memo);
    setIsDetailOpen(true);
  };

  const hideDetail = () => {
    setSelectedMemo(null);
    setIsDetailOpen(false);
  };

  const addMemo = (text) => {
    const newMemo = { id: Date.now(), text, completed: false }; // 고유 ID와 텍스트갑스로 메모 객체 생성
    setMemos([...memos, newMemo]); // 기존 메모 배열에 새 메모 추가
  };

  // 메모의 상태가 변경될때마다.. OOO 의 추가작업을 더 한다..
  useEffect(() => {
    // 로컬 스토리지에 저장한다.
    localStorage.setItem("memos", JSON.stringify(memos)); // 메모 상태를 JSON 문자열로 저장한다.
  }, [memos]); // 메모가 변경될때마다...

  // 삭제 함수 구현
  const deleteMemo = (id) => {
    // id가 일치하지 않은 것만 유지
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  // 수정 함수
  const editMemo = (id, newText) => {
    setMemos(memos.map((memo) => (memo.id === id ? { ...memo, text: newText } : memo)));
  };

  const toggleComplete = (id) => {
    setMemos(
      memos.map((memo) => (memo.id === id ? { ...memo, completed: !memo.completed } : memo))
    );
  };

  const reorderMemos = (startIndex, endIndex) => {
    // 기존 메모를 불러와서 리스트(array) 형태로 변환하고...
    // startIndex에 있는것 1개를 지움 => removed에 저장해둠
    // endIndex 위치에다가 removed 를 삽입한다.
    setMemos((prevMemos) => {
      const updatedMemos = Array.from(prevMemos);
      const [removed] = updatedMemos.splice(startIndex, 1);
      updatedMemos.splice(endIndex, 0, removed);
      return updatedMemos;
    });
  };

  // 예전에 배웠던 기법
  // const editMemoLegacy = (id, newText) => {
  //   const updateMemo = [...memos];

  //   for (let i = 0; i < updateMemo.length; i++) {
  //     if (updateMemo[i].id === id) {
  //       updateMemo[i].text = newText;
  //     }
  //   }
  //   setMemos(updateMemo);
  // };

  const filteredMemo = memos.filter((memo) => {
    return memo.text.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1>메모앱 (to-do-list)</h1>
      <MemoSearch search={setSearchQuery} />
      <MemoForm addMemo={addMemo} />
      <MemoSort />
      <MemoList
        memos={filteredMemo}
        deleteMemo={deleteMemo}
        editMemo={editMemo}
        toggleDone={toggleComplete}
        reorderMemos={reorderMemos}
        showDetail={showDetail}
      />
      {isDetailOpen && <MemoDetail memo={selectedMemo} onClose={hideDetail} />}
    </div>
  );
};
