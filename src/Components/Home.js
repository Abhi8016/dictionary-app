import React, { useState } from "react";
import "./Home.css"

import { useDispatch, useSelector } from "react-redux";
import { fetchWords } from "../redux/slice/words"

const Home = ({fnc}) => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state);



    const [word, setWord] = useState("");

    function handle(){
        fnc(word)
        
    }


    if (state.word.isLoading) {
        return <div className="loder">
            <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading..." />
            
        </div>
    }

    if (state.word.isError===true) {
        return <h2>Something went wrong</h2>
    }
    // console.log("State", state);
    // if(response.status == 404){
    //     return <h2>lkdjlksdjfjs</h2>
    // }
    return (
        <>
            <div className="card-1">
                <input type="text" placeholder="   Search your words here" value={word} onChange={(e) => (setWord(e.target.value))} />
                <button onClick={((e) => dispatch(fetchWords(word)))}>Search</button>
                {/* <button onClick={handle()}>save history</button> */}
                {handle()}
            </div>
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
                ) }
            </div>
            
        </>
        
    );
}

export default Home;