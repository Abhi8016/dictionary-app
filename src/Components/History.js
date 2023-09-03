import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchWords } from "../redux/slice/words"
import Home from "./Home";

const History = ({word}) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    let [history, setHistory] = useState([]);

    
    return (
        <div>
            <button onClick={((e) => dispatch(fetchWords(word)))}>{word}</button>

            <div className="card-holder">
                {/* word name showing */}
                {state.word.data && state.word.data.map((e) =>
                    <div className="card-2">
                        <h2>{e.word}</h2>
                        <div>{e.phonetic}</div>
                        <div>{
                            e.phonetics.map((d) =>

                                <div>
                                    <audio controls>
                                        <source src={d.audio} type="audio/ogg"></source>
                                    </audio>
                                    <div>
                                        {d.text}
                                    </div>
                                </div>
                            )
                        }</div>
                        <div>{
                            e.meanings.map((d) =>
                                <div>
                                    <h3>{d.partOfSpeech}</h3>
                                    <div>
                                        {d.definitions.map((p) => (
                                            <span>{p.definition}</span>
                                        ))}
                                    </div>
                                </div>
                            )
                        }</div>
                        <div>
                            <h3>Synonyms</h3>
                            {

                                e.meanings.map((d) =>
                                    <div>

                                        {d.synonyms.map((s) => (
                                            <>

                                                <ul>
                                                    <li>{s}</li>
                                                </ul>
                                            </>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <h3>Antonyms</h3>
                            {

                                e.meanings.map((d) =>
                                    <div>

                                        {d.antonyms.map((a) => (
                                            <>

                                                <ul>
                                                    <li>{a}</li>
                                                </ul>
                                            </>
                                        ))}
                                    </div>
                                )
                            }
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}

export default History;