import {  useState,useEffect } from "react"
// import { thunkData } from "../Redux/AuthSlice";
// import { useDispatch } from "react-redux";


const FormInput = (names) => {
    //  const dispatch = useDispatch();

  const [newval, setVal] = useState('')
  const [data, setData] = useState({
    username: '',
    password: '',
    confirmPasswd: '',
    email: ''
  })
    //  const [inputval,setinputVal]=useState([])
      const { userName, password, confirmPasswd, email } = data
  useEffect(() => {
     
  // dispatch(thunkData(newval))
      
  
    }, [])
  const chnageValue = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
 
  const clickVal = (e) => {
    e.preventDefault()
    if(password != confirmPasswd){
      alert("Passwords are not matching .Please check and re-enter")
    }else if(!email&&!userName){
      alert('Please enter input field')
    }else{
      setData({confirmPasswd:'',password:'',email:'',userName:''})
      alert('FormValidation is successfully signin')
    }
 //   console.log(data)
    setVal(newval);

  }
 

  return (
    <div>
      <h1 style={{ color: "green" }}>Form Concepts</h1>
      <h1>Hello,{newval}{names.name}</h1>
      <center>
        <form onSubmit={clickVal}>
          Username:<input type="text" name="username" value={userName} onChange={chnageValue} /><br />
          Email: <input type="email" name="email" value={email} onChange={chnageValue} /><br />
          Password: <input type="password" name="password" value={password} onChange={chnageValue} /><br />
          Confirm-Password:<input type="password" name="confirmPasswd" value={confirmPasswd} onChange={chnageValue} /><br />
          {password!=confirmPasswd?<p>password not match</p>:null}
          <input type="submit" name="submit" /><br />
        </form>
      </center>
     <div>
    
      
    </div>
   
    
    </div>

   

  )
}

export default FormInput