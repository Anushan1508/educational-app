import React, { useState } from 'react'
import Time from './Time'
import Counter from './Counter'
import { Container } from 'react-bootstrap';
import '../Login/Style.css'


//replying to comment 
const ReplyInput = (props) => {
    return (
        <div><br/>
            <Container>
                <form onSubmit={props.handelSubmitInputChange}  >
                    <input 
                    name={props.postId}  
                    placeholder="   Enter your reply" 
                    onChange={props.handelReplyInputChange} 
                    style={{height:'80px',width:'100%',borderRadius:'6px',border:'none'}}
                    required />
                </form>
            </Container>
        </div>
    )
}

function Comments(props) {

    const [showInput, setInput] = useState(false);
    const [commentInp, setCommentInput] = useState('');
    const [comments, setComment] = useState([]);

    const handelReplyInputChange = (e) => {
        console.log(e.target.value);
        setCommentInput(e.target.value);
    }

    const handelSubmitInputChange = (e) => {
        e.preventDefault();

        //updating comment details
        let commentDetails = {
            timeStamp: Date.now(),
            commentId: Math.floor(Math.random() * 1000),
            content: commentInp,
            voteCount: 0
        }
        console.log(commentDetails);
        // This will update to array of set
        let newPosts = [...comments];
        newPosts.push(commentDetails);
        setComment(newPosts);
        setCommentInput('');
        setInput(!showInput);
        console.log(comments);
    }


    return (
        <div className="reply">
            <Time timeStamp={props.data.timeStamp} /><br/>
            <p style={{fontFamily:'Tahoma',color:'#19294D'}}>{props.data.content}</p> 
            <div>
                <Counter /><br />
                <span style={{ fontWeight: 'bold', color: '#fca311', marginLeft: '20px' }} onClick={() => setInput(!showInput)} >Reply</span>
                {showInput ? <ReplyInput postId={props.data.postId} handelReplyInputChange={handelReplyInputChange} handelSubmitInputChange={handelSubmitInputChange} /> : null}
            </div>
            <ul>
                {comments.length > 0 ?
                    comments.map((comment, key) => {
                        return (<Comments data={comment} />)
                    })
                    : null}
            </ul>
        </div>
    )
}

function Discussion(props) {
    const [showInput, setInput] = useState(false);
    const [commentInp, setCommentInput] = useState('');
    const [comments, setComment] = useState([]);

    const handelReplyInputChange = (e) => {
        console.log(e.target.value);
        setCommentInput(e.target.value);
    }


    const handelSubmitInputChange = (e) => {
        e.preventDefault();

        let commentDetails = {
            timeStamp: Date.now(),
            commentId: Math.floor(Math.random() * 1000),
            content: commentInp,
            voteCount: 0
        }
        console.log(commentDetails);
        // This will update to array of set
        let newPosts = [...comments];
        newPosts.push(commentDetails);
        setComment(newPosts);
        setCommentInput('');
        setInput(!showInput);
        console.log(comments);
    }


    return (
        <div className="reply">
            <Time timeStamp={props.data.timeStamp} /><br/>
            <p style={{fontFamily:'Tahoma',color:'#19294D'}}> {props.data.content} </p>
            <div>
                <Counter /><br />
                <span style={{ fontWeight: 'bold', color: '#fca311', marginLeft: '20px' }} onClick={() => setInput(!showInput)} >Reply</span>
                {showInput ? <ReplyInput postId={props.data.postId} handelReplyInputChange={handelReplyInputChange} handelSubmitInputChange={handelSubmitInputChange} /> : null}
            </div>
            <ul>
                {comments.map((comment, key) => {
                    return (<Comments data={comment} />)
                })}
            </ul>
        </div>
    )
}

export default Discussion
