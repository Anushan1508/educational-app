import React from 'react'
import Forms from '../contact/Forms';

function Contact() {
    return (
        <>
        <div style={{backgroundImage:`url("./assets/bg.jpg")`}}>
        <br/><p style={{textAlign:'center',marginTop:'50px',fontSize:'20px',fontFamily:'Palatino Linotype',color:'#19294d'}}>
            <b>Please feel free to give us your feedbacks and direct us your doubts.</b>
        </p>
        <Forms/>
        </div>
        </>
    )
}

export default Contact
