import React, { useState } from 'react'
import MyData from './MyData'


function Search() {
    const [searchData, setSearchData] = useState('');
    return (
        <div>
            <input type='text' placeholder='Search...' onChange={event => { setSearchData(event.target.value) }} />
            {
                
            }
        </div>
    )
}
export default Search