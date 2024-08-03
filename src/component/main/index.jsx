import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
} from "@chakra-ui/react";
import "./style.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { text } from "./text";
import { useEffect, useState } from "react";
import { IoCaretUpCircle } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const Main = ({ playBook, lines }) => {
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedEpilogue, setSelectedEpilogue] = useState(null);
    const [utterance, setUtterance] = useState(null);
    const [voice, setVoice] = useState(null);
    const handleChapterClick = (chapter) => {
        setSelectedChapter(chapter);
    };
    const handleEpilogueClick = (epilogue) => {
        setSelectedEpilogue(epilogue);
    };
    // useEffect(() => {
    //     const synth = window.speechSynthesis;
    //     const u = new SpeechSynthesisUtterance(text);
    //     setUtterance(u);

    //     synth.addEventListener("voiceschanged", () => {
    //         const voices = synth.getVoices();
    //         setVoice(voices[0]);
    //     });

    //     return () => {
    //         synth.cancel();
    //         synth.removeEventListener("voiceschanged", () => {
    //             setVoice(null);
    //         });
    //     };
    // }, [text]);
    // useEffect(() => {
    //     if (text) playBook();
    // }, []);
    return (
        <>
            <p
                style={{
                    fontSize: "var(--regular-text)",
                    color: "#F4F4F4",
                    marginBottom: "50%",
                }}
            >
                {text}
            </p>
            <div className="filters">
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={
                            <IoCaretUpCircle
                                color="#737373"
                                fontSize={"16px"}
                            />
                        }
                        h={"28px"}
                        fontSize={"12px"}
                        backgroundColor={"#292929"}
                        width={"30%"}
                        color={"#F4F4F4"}
                        padding={"4px"}
                        _hover={{ backgroundColor: "#292929" }}
                        _active={{ backgroundColor: "#292929" }}
                        fontWeight={"400"}
                    >
                        {selectedChapter || "chapters"}
                    </MenuButton>
                    <MenuList
                        style={{ backgroundColor: "black", color: "#D9D9D9" }}
                    >
                        <MenuItem
                            style={{ backgroundColor: "black" }}
                            onClick={() => handleChapterClick("chapter1")}
                        >
                            chapter1
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleChapterClick("chapter2")}
                            color={"#292929"}
                            background={"#D9D9D9"}
                        >
                            chapter2
                        </MenuItem>
                        <MenuItem
                            style={{ backgroundColor: "black" }}
                            onClick={() => handleChapterClick("chapter3")}
                        >
                            chapter3
                        </MenuItem>
                        <MenuItem
                            style={{ backgroundColor: "black" }}
                            onClick={() => handleChapterClick("chapter4")}
                        >
                            chapter4
                        </MenuItem>
                        <MenuItem
                            style={{ backgroundColor: "black" }}
                            onClick={() => handleChapterClick("chapter5")}
                        >
                            chapter5
                        </MenuItem>
                    </MenuList>
                </Menu>
                <div style={{ fontSize: "12px", color: "#F4F4F4" }}>
                    Plot 390
                </div>
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<TbTriangleInvertedFilled color="#C7C7C7" />}
                        h={"28px"}
                        fontSize={"12px"}
                        backgroundColor={"black"}
                        color={"#C7C7C7"}
                        _hover={{ backgroundColor: "#292929" }}
                        _active={{ backgroundColor: "#292929" }}
                        fontWeight={"400"}
                    >
                        {selectedEpilogue || "Epilogue"}
                    </MenuButton>
                    <MenuList
                        style={{ backgroundColor: "black", color: "#C7C7C7" }}
                    >
                        <MenuItem
                            style={{ backgroundColor: "black" }}
                            onClick={() => handleEpilogueClick("Epilogue1")}
                        >
                            epilogue1
                        </MenuItem>
                        <MenuItem
                            style={{ backgroundColor: "black" }}
                            onClick={() => handleEpilogueClick("Epilogue2")}
                        >
                            epilogue2
                        </MenuItem>
                        <MenuItem
                            style={{ backgroundColor: "black" }}
                            onClick={() => handleEpilogueClick("Epilogue3")}
                        >
                            epilogue3
                        </MenuItem>
                        <MenuItem
                            style={{ backgroundColor: "black" }}
                            onClick={() => handleEpilogueClick("Epilogue4")}
                        >
                            epilogue4
                        </MenuItem>
                        <MenuItem
                            style={{ backgroundColor: "black" }}
                            onClick={() => handleEpilogueClick("Epilogue5")}
                        >
                            epilogue5
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </>
    );
};

export default Main;
