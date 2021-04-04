import axios from 'axios';
import React, {useState} from 'react';

export default function LessionForm() {


    const [lessionName, setLessionName] = useState("");
    const [grade, setGrade] = useState("");

    async function saveLession(e){
        e.preventDefault();
    }

    try{
        const lessionData = {
            name: lessionName,
            grade: grade
        }
        axios.post("http://localhost:5000/lession/", lessionData);
    } catch (err) {
        console.error(err);
    }



  return (
    <>
        <form onSubmit= {saveLession}>
            <input 
            type='text' 
            placeholder='Lession Name' 
            onChange={(e) => {
                setLessionName(e.target.value);
            }}
            value={lessionName}
            />
            <input 
            type='text' 
            placeholder='Grade' 
            onChange={(e) => {
                setGrade(e.target.value);
            }}
            value = {grade}
            />
            <button type='submit'> Save New Lession</button>

        </form>
    </>
  );
}
