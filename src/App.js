
import { useState,useCallback, useMemo} from 'react';
import './App.css';
import  Button  from './components/Button';
import Span from './components/Span';


function App() {

 
console.log("Update Branch Created");
 let[count, upDatecount]= useState(0);
 let[activate,setActivate]=useState(false);
 
 const increment= useCallback(()=>{
  if(activate)
  {
    upDatecount(  ++count);
  }
 
 },[activate]);
 const decrement= useCallback(()=>{
  if(activate)
  {
    upDatecount(  --count);
  }
 
 },[activate]);

 const activateHandler=()=>
 {
    setActivate(true);
 }
 const arry= useMemo(()=>
 {
    return [10,20];
 },[])
  return (
    <>
    <Button classname='btn btn-primary m-4' BtnClicked={increment}>+</Button>
    <Span>{arry}</Span>
    <Button classname='btn btn-danger m-4' BtnClicked={decrement}>-</Button>
    <Button classname='btn btn-danger m-4' BtnClicked={activateHandler}>Activate</Button>
    </>
  );
}

export default App;
