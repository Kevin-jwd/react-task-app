import React, { ChangeEvent, FC } from "react";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

type TSideFormProps = {
    inputRef: React.RefObject<HTMLInputElement>;
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideForm: FC<TSideFormProps> = ({ setIsFormOpen, inputRef }) => {
    const [inputText, setInputText] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };
    const handleOnBlur = () => {
        setIsFormOpen(false);
    };

    return (
        <div>
            <input
                autoFocus
                type="text"
                placeholder="새로운 게시판 등록하기"
                value={inputText}
                onChange={handleChange}
                onBlur={handleOnBlur}
            />
            <FiCheck></FiCheck>
        </div>
    );
};

export default SideForm;
