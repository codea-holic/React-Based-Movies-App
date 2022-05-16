import React from 'react'
import { Link } from 'react-router-dom';

function InputBox(props) {
    let [searchText, setSearchText] = React.useState('');
    let [noOfItems, setNumberOfItems] = React.useState(4);
    // <div>InputBox</div>
    const handleText = (e) => {
        setSearchText(e.target.value);
        props.setGlobalSearchText(e.target.value);
    }

    const handleCount = (e) => {
        setNumberOfItems(e.target.value);
        props.setGlobalMoviesCount(e.target.value);
    }

    return (
        <div>
            <button className="bg-blue-600 rounded border hover:bg-blue-500 text-white px-1 py-1 mx-1">
                <Link to="/new">New</Link>
            </button>
            <input type="text" className='border rounded px-2 py-1 mx-1' value={searchText} onChange={handleText}></input>
            <input type="number" className='border rounded px-2 py-1 mx-1' value={noOfItems} onChange={handleCount}></input>
        </div>
    );
}

export default InputBox;