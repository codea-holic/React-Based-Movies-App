import React from 'react'

function InputBox() {
    return (
        // <div>InputBox</div>
        let [searchText, setSearchText] = React.useState("");
        let [numberOfItems, setNumberOfItems] = React.useState(4);
        const handleText = (e) => {
            setSearchText()
        }
        <>
            <button>New</button>
            <input type="text"></input>
            <input type="number"></input>
        </>
    )
}

export default InputBox;