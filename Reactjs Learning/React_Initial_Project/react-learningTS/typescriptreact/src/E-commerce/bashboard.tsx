import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard  = () => {
    const [input,setInput]=useState('')
    const [passwd,setPasswd]=useState('')
    const navigate=useNavigate()

  
    const onchangedData=(event: ChangeEvent<HTMLInputElement>)=>{
        setInput(event.target.value)
    }
    const onchangepasswd=(event: ChangeEvent<HTMLInputElement>)=>{
        setPasswd(event.target.value)

    }

    const onClickHandle=()=>{
        console.log('')
      
        const datas=input===''||passwd===''?alert('Please Enter email and passwd '):input!='prasanthgera@44'||passwd!='544'?alert('Please Enter Correct email and passwd '):''
          if(datas){
            return

        }
        if(input==='prasanthgera@44' && passwd==='544'){
            navigate("/home");
           setPasswd('')
  
        }
    }

    return (
        <div >
            <center>
                <div>
                    <h2>Login</h2>
                </div>
                <div>
                Email: <input type="text" placeholder="Enter Email" value={input} onChange={onchangedData} />
                </div>&nbsp;
             
                <div>
                Password: <input type="password" placeholder="Enter Password" value={passwd} onChange={onchangepasswd} />
                </div>

              <button onClick={onClickHandle}>Login</button>

            </center>

        </div>
    )
}

export default Dashboard