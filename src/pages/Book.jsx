import { useEffect, useRef, useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { IoCaretUpCircle } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { getGoogleVoices, googletextTobSpeech } from "../helper";
import "./style.css";
import { getChapters, getEpilogues, getPlot, getPlots } from "./book/helper";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../feature/loader/loader";
import { selectSelectedVoice } from "../feature/util";
import { selectSpeed } from "../feature/voice-controls/controlsSlice";
import Level1 from "./book/Level1";

const Book = () => {
    const [audioSrc, setAudioSrc] = useState("");
    const [book, setBook] = useState([]);
    const [currentChapter, setCurrentChapter] = useState(null);
    const [currentEpilogue, setCurrentEpilogue] = useState(null);
    const [currentPlot, setCurrentPlot] = useState(null);
    const [epilogues, setEpilogues] = useState([]);
    const [plots, setPlots] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [isPaused, setIsPaused] = useState(false);
    const [currentPlotIndex, setCurrentPlotIndex] = useState(0);
    const [voices, setVoices] = useState([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [lines, setLines] = useState([]);
    // const lines = text.split(". ");
    const ref = useRef(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedEpilogue, setSelectedEpilogue] = useState(null);

    const selectedVoice = useSelector(selectSelectedVoice);
    const speed = useSelector(selectSpeed);
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        if (ref.current) {
            ref.current.defaultPlaybackRate = speed;
            ref.current.load();
        }
    }, [ref.current, speed]);
    useEffect(() => {
        if (ref.current) {
            if (isPaused) ref.current.pause();
            else ref.current.play();
        }
    }, [ref.current, isPaused]);
    const getVoices = async () => {
        const googleVoices = await getGoogleVoices();
        setVoices(googleVoices);
    };
    const getTextToSpeech = async (line) => {
        const as = await googletextTobSpeech(line, selectedVoice);
        setAudioSrc(as);
    };
    //for loading the book
    const getBook = async () => {
        dispatch(setLoading(true));
        try {
            const book = await getChapters();
            setBook(book);
            const chapterName = book[0].chapterName;
            setChapters(book?.map((chapter) => chapter.chapterName));
            setSelectedChapter(chapterName);
            const epilogues = await getEpilogues(chapterName);
            setEpilogues(Object.keys(epilogues));
            // const plots = await getPlots(chapterName);
            setPlots(book[0].scenes?.map((scene) => scene.sceneNumber));
            setCurrentChapter(book[0].chapterName);
            setCurrentEpilogue(Object.keys(epilogues)[0]);
            setSelectedEpilogue(Object.keys(epilogues)[0]);
            // setCurrentPlot(book[0].scenes[0].sceneNumber);
            const plot = book[0].scenes[0];
            setCurrentPlotIndex(0);
            const cPlot = await getPlot(chapterName, plot.sceneNumber);
            setCurrentPlot(plot);
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        // getVoices();
        // getTextToSpeech(lines[currentLine]);
        if (isAuthenticated) getBook();
    }, []);

    useEffect(() => {
        if (lines.length) getTextToSpeech(lines[currentLine]);
        else {
            setAudioSrc("");
        }
    }, [lines]);

    useEffect(() => {
        if (currentPlot) {
            setAudioSrc("");
            setCurrentLine(0);
            setLines(currentPlot?.description?.split(". "));
        }
    }, [currentPlot]);

    useEffect(() => {
        if (currentLine && currentLine < lines.length) {
            setAudioSrc("");
            getTextToSpeech(lines[currentLine]);
        }
        if (currentLine && currentLine >= lines.length) {
            setCurrentPlot(book[0].scenes[currentPlotIndex + 1]);
            setCurrentPlotIndex((index) => index + 1);
            setAudioSrc("");
        }
    }, [currentLine]);
    const handleChapterClick = async (chapter) => {
        setSelectedChapter(chapter);
        dispatch(setLoading(true));
        const epilogues = await getEpilogues(chapter);
        setEpilogues(Object.keys(epilogues));
        setSelectedEpilogue(Object.keys(epilogues)[0]);
        setCurrentLine(0);
        const selectedChapter = book.find((c) => c.chapterName === chapter);
        const plot = selectedChapter?.scenes[0];
        setCurrentPlot(plot);
        dispatch(setLoading(false));
    };
    const handleEpilogueClick = (epilogue) => {
        setSelectedEpilogue(epilogue);
    };
    return (
        <>
            {!isAuthenticated ? (
                <Level1 />
            ) : (
                <>
                    {audioSrc && (
                        <audio
                            controls
                            autoPlay
                            style={{ display: "none" }}
                            ref={ref}
                            onEnded={() => setCurrentLine(currentLine + 1)}
                        >
                            <source src={audioSrc} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
                    )}
                    <div
                        id="play-button"
                        onClick={() => setIsPaused(!isPaused)}
                    >
                        <img
                            src={
                                ref.current?.paused
                                    ? "./images/pause-large.svg"
                                    : "./images/play-large.svg"
                            }
                            alt=""
                            style={{
                                margin: "auto",
                                height: "40px",
                                width: "40px",
                            }}
                        />
                    </div>

                    <section className="mid-section">
                        <p
                            style={{
                                // fontSize: "var(--regular-text)",
                                color: "#F4F4F4",
                                marginBottom: "50%",
                            }}
                        >
                            {/* {text} */}
                            {lines.map((line, index) => (
                                <span
                                    key={index}
                                    style={{
                                        backgroundColor:
                                            index === currentLine
                                                ? "#708090"
                                                : "transparent",
                                    }}
                                >
                                    {line}
                                    {". "}
                                </span>
                            ))}
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
                                    style={{
                                        backgroundColor: "black",
                                        color: "#D9D9D9",
                                    }}
                                >
                                    {chapters.map((chapter, index) => (
                                        <MenuItem
                                            key={index}
                                            style={{ backgroundColor: "black" }}
                                            onClick={() =>
                                                handleChapterClick(`${chapter}`)
                                            }
                                        >
                                            {`${chapter}`}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                            <div style={{ fontSize: "12px", color: "#F4F4F4" }}>
                                Plot 390
                            </div>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rightIcon={
                                        <TbTriangleInvertedFilled color="#C7C7C7" />
                                    }
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
                                    style={{
                                        backgroundColor: "black",
                                        color: "#C7C7C7",
                                    }}
                                >
                                    {epilogues.map((epilogue, index) => (
                                        <MenuItem
                                            key={index}
                                            style={{ backgroundColor: "black" }}
                                            onClick={() =>
                                                handleEpilogueClick(
                                                    `${epilogue}`
                                                )
                                            }
                                        >
                                            {`${epilogue}`}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default Book;
