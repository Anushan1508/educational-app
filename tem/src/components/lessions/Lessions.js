import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LessionForm from './LessionForm';
import LessionList from './LessionList';

export default function Lessions() {
  const [lessions, setLessions] = useState([]);

  async function getLessions() {
    const lessionsRes = await axios.get('http://localhost:5000/lession/');
    setLessions(lessionsRes.data);
  }

  useEffect(() => {
    getLessions()
  }, []);
  return (
    <>
        <LessionForm />
        <LessionList />
    </>
  );
}
