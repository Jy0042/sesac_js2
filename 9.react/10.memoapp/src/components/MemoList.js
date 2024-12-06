import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React from "react";

export const MemoList = ({ memos, deleteMemo, editMemo, toggleDone, reorderMemos, showDetail }) => {
  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      console.log("드롭 위치가 없음");
      return;
    }

    if (source.index === destination.index) {
      console.log("같은 위치로 이동");
      return;
    }

    console.log(`드래그 시작: ${source.index}, 드롭위치: ${destination.index}`);

    reorderMemos(source.index, destination.index); // 순서 변경을 저정한다.
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="memo-list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {memos.map((memo, index) => (
              <Draggable key={memo.id} draggableId={memo.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="memo-item"
                  >
                    {/* 완료 체크박스 */}
                    <input
                      type="checkbox"
                      checked={memo.completed}
                      onChange={() => toggleDone(memo.id)}
                      className="checkbox"
                    />

                    {/* 메모 텍스트 */}
                    <input
                      type="text"
                      value={memo.text}
                      disabled={memo.completed} // 완료된 메모는 수정 불가
                      onChange={(e) => editMemo(memo.id, e.target.value)}
                    />

                    {/* 상세보기 버튼 추가 */}
                    <button onClick={() => showDetail(memo.id)}>상세보기</button>

                    {/* 버튼 클릭했을때, 받아온 함수 호출 */}
                    <button onClick={() => deleteMemo(memo.id)}>삭제</button>

                    {/* 드래그를 편하게 하기 위한 아이콘 추가 */}
                    <span
                      {...provided.dragHandleProps}
                      className="drag-handle"
                      title="드래그하여 이동할 핸들"
                    >
                      ≡
                    </span>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
