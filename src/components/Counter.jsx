import React from 'react'
import { useState } from 'react';

const Counter = () => {

  const [input, setInput] = useState("");
  const [music, setMusic] = useState("");
  const [count, setCount] = useState(0);

  const inputMusic = (e) => {
    setInput(e.target.value);
  }

  const handleMusic = (e) => {

    if (input !== '') {
      e.preventDefault();
      setMusic(input);
      setInput("");
    }
    else {
      e.preventDefault();
      alert('フォームが空です');
    }
    
  }

  const handleMusicUpdate = () => {
    setMusic("");
    console.log(input)
  }
  return (

    <div className='flex justify-center items-center'>
      <div
      className="mt-6 w-96 p-3  border border-gray-200 rounded-lg shadow bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        {/* カウント対象 */}
      <div className='flex justify-center space-x-3 items-center'>
        <h5 className="text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {music}
        </h5>
        {music != '' && <button className='bg-indigo-500 p-1 text-white rounded-md' onClick={handleMusicUpdate}>変更する</button>}      
      </div>
      

        {/* インプットフォーム */}
      {music === '' &&
      <form className='flex justify-center space-x-5 mt-3' action="">
        <input
        className='p-3 w-56 border-'
        type="text"
        value={input}
        onChange={inputMusic}
        placeholder='対象を入力してください'
        />
        <button className='mt-2' onClick={handleMusic}>決定</button>
      </form>  
      }
      

      {/* カウント数 */}
      <h3 className='mt-7 text-3xl font-semibold text-center'>
        {count}
      </h3>

      {/* 計算ボタン */}
      <div className='flex justify-around mt-7'>
        <button onClick={() => setCount(count - 1)}><svg class="h-8 w-8 text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" /></svg></button>
        <button onClick={() => setCount(0)}><svg class="h-8 w-8 text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" /></svg></button>
        <button onClick={() => setCount(count + 1)}><svg class="h-8 w-8 text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg></button>
      </div>
      
      </div>
    </div>
    
  )
}

export default Counter