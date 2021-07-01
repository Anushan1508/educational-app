import React, { useState } from 'react'
import {IoIosArrowDropupCircle,IoIosArrowDropdownCircle} from 'react-icons/io'


function Counter() {
    const [count,setcount] = useState(0)

    return (
        <div>
            Likes : {count} <br/>
            <IoIosArrowDropupCircle width="60px" style={{marginRight:'10px'}}  onClick={() => setcount(prevcount => prevcount+1)} />
            <IoIosArrowDropdownCircle width="60px" onClick={() => setcount(prevcount => prevcount-1)}/>
        </div>
    )
}
         

export default Counter
