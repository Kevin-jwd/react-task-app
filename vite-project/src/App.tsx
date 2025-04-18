import { useState } from "react";
import { appContainer, board, buttons } from "./App.css";
import BoardList from "./components/BoardList/BoardList";
import ListsContainer from "./components/ListsContainer/ListsContainer";
import { useTypesSelector } from "./hooks/redux";

function App() {
    const [activeBoardId, setActiveBoardId] = useState("board-0");
    const boards = useTypesSelector((state) => state.boards.boardArray);
    const getActiveBoard = boards.filter(
        (board) => board.boardId === activeBoardId
    )[0];
    const lists = getActiveBoard.lists;

    return (
        <div className={appContainer}>
            <BoardList
                activeBoardId={activeBoardId}
                setActiveBoardId={setActiveBoardId}
            ></BoardList>
            <div className={board}>
                <ListsContainer
                    lists={lists}
                    boardId={getActiveBoard.boardId}
                ></ListsContainer>
            </div>
            <div className={buttons}>
                <button>이 게시판 삭제하기</button>
                <button></button>
            </div>
        </div>
    );
}

export default App;
