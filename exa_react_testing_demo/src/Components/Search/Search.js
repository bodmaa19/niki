import React, {useRef, useState} from 'react';
function Search() {
    const names = ['Manuel', 'Roman', 'Jonas'];
    const [result, setResult] = useState("");
    const inputRef = useRef();

    const searchName = () => {
        const input = inputRef.current;
        console.log(input.value);
        if(names.includes(input.value)) {
            setResult(input.value + " ist enthalten!")
        } else {
            setResult(input.value + " ist nicht enthalten!")
        }
    };

    return (
        <div className="counter-container">
            <input id={"searchNameInput"} data-testid="searchNameInput" ref={inputRef} type={"text"}/>
            <p id={"searchNameResult"} data-testid="searchNameResult">{result}</p>
            <button id={"searchNameButton"} data-testid="searchNameButton" onClick={searchName} className={"counter-button"}>
                Search
            </button>
        </div>
    );
}

export default Search;
