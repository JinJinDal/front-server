import { useEffect,useRef, useState } from 'react';
import './App.css';
import {useStore} from './store';

function App() {
  const elInput = useState();
  
  const {data,getData,postData,deleteData,status}= useStore();
  useEffect(()=>{ getData() },[])

  if(!status) return<>Loading...</>
  
  return (
    <div className="App">
      <article>
          <input type='text' ref={elInput}/>
          <button onClick={()=>{
            postData({id:Date.now(),name:elInput.current.value});
            console.log();
          }}>저장</button>
      </article>
      <article>
        <h2>리스트</h2>
        <ul>
          {
            data.map((obj)=>{
              return<>
              <li>
                <p>{obj.name}</p>
                <button onClick={()=>{
                  deleteData({id:obj.id});
                  console.log({id:obj.id});

                }}>삭제</button>

                <button onClick={()=>{
                  
                }}>수정</button>
                </li>
              </>
            })
          }
        </ul>
      </article>


    </div>
  );
}

export default App;
