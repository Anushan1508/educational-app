import React,{useState} from 'react'
import Discussion from '../Posts/Discussion';
import '../Login/Style.css'
import { Button, Container } from 'react-bootstrap';


function Forum() {

    const [post, setPost] = useState([ ]);
    const [inputText, setInput] = useState();

    const handelChanges = (e) => {
        e.preventDefault();

        alert("Your Post will be posted now")
        let userDetails = {
            timeStamp: Date.now(),
            postId: Math.floor(Math.random() * 1000),
            content: inputText,
            voteCount: 0
        }

        // This will update to array of set
        let newPosts = [...post];
        newPosts.push(userDetails);
        setPost(newPosts);
        setInput('');
    }

    const handelInputChange = (e) => {
        setInput(e.target.value);
    }

    

    return (
        <>
        <Container className='box'>
            <form  onSubmit={handelChanges}>
                    <input 
                    className="form-control" 
                    name="mainContent" 
                    placeholder="Create a new discussion" 
                    onChange={handelInputChange} 
                    value={inputText} 
                    required 
                    autoComplete="off" 
                    style={{height:'250px'}}/><br/><br/>
                    <Button  variant="secondary" type='submit' >Post now</Button>
            </form>
                
                {post.map((post, key) => {
                    return (<Discussion data={post}  />)
                })}
        </Container>  
        </>
    );
}

export default Forum
