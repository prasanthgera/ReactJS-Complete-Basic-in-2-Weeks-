import FormInput from "./Day1/FormInput"
import Sample from "./Day1/sample"
import ClassComponent from "./Day1/ClassComponent"
import Usestateffect from "./Day1/usestateffect"
import LifeCycleMethods from "./Day2/LifeCycleMethods"

const obj={
  props:'props Concept',
  Surname:'Gera',
  Forname:'Prasanth'


}


function App() {
  
  return (
    <center>
      <div>
        <ClassComponent/>
      <Sample name={obj} />
      <FormInput />
      <Usestateffect />
      <LifeCycleMethods/>
      
    </div>
    </center>
    
  )
}

export default App

