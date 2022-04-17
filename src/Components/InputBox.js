import React from 'react'

function InputBox() {
    let [searchText, setSearchText] = React.useState('');
    let [noOfItems, setNumberOfItems] = React.useState(4);
    // <div>InputBox</div>
    const handleText = (e) => {
        console.log(e.target.value);
        setSearchText(e.target.value);
    }
    const handleCount = (e) => {
        setNumberOfItems(e.target.value);
    }
    return (
        <>
            <button className="bg-blue-600 rounded border hover:bg-green-500 text-white px-1 py-1 mx-1">New</button>
            <input type="text" className='border rounded px-2 py-1 mx-1' value={searchText} onChange={handleText}></input>
            <input type="number" className='border rounded px-2 py-1 mx-1' value={noOfItems} onChange={handleCount}></input>
        </>
    );
}

export default InputBox;