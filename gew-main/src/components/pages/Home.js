import React from 'react'
import Section from '../Home/Sections'
import {home_01,home_02,home_03,home_04,home_05,home_06} from '../Home/Data'

function Home() {
    return (
       <>
       <Section {...home_01}/>
       <Section {...home_02}/>
       <Section {...home_03}/>
       <Section {...home_04}/>
       <Section {...home_05}/>
       <Section {...home_06}/>
       </>
    )
}

export default Home
