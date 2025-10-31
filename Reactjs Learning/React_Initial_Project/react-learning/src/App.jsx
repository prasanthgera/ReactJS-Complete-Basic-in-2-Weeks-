import FormInput from "./Day1/FormInput"
import Sample from "./Day1/sample"
import ClassComponent from "./Day1/ClassComponent"
import Usestateffect from "./Day1/usestateffect"
import LifeCycleMethods from "./Day2/LifeCycleMethods"
import FormGrid from "./Day 3/FormGrid"
import TestClass from "./Day 6/class"
import Functional from "./Day 6/functional"
import { useState } from "react"
import { Createcontext } from "./Day 6/props_useContext/context"
import ChildComponent from "./Day 6/props_useContext/ChildComponent"
import Display from "./Day 6/useSelector_useDispatch/display"


// const obj={
//   props:'props Concept',
//   Surname:'Gera',
//   Forname:'Prasanth'


// }



function App() {
  const [data,setData]=useState('Prasanth')
  //  const [refresh, setRefresh] = useState(false);

  // const handleUserCreated = () => {
  //   // toggle refresh value to trigger re-fetch
  //   setRefresh((prev) => !prev);
  // };
  return (
    
    <center>
      <div>
        <TestClass/>
        <Functional/>
        <Createcontext.Provider value={{data,setData}}>
          app:{data}
          <ChildComponent/>
        </Createcontext.Provider>
        <Display/>
        <FormInput/>
        {/* <ClassComponent/>
                <Display/>

      <Sample name={obj} />
      <Usestateffect />
      <FormInput onUserCreated={handleUserCreated} />

      <LifeCycleMethods/>
      <FormGrid  /> */}
      
    </div>
    </center>
    
  )

}

export default App

