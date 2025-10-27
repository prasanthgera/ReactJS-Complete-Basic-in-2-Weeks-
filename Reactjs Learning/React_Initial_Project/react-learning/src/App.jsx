import FormInput from "./Day1/FormInput"
import Sample from "./Day1/sample"
import ClassComponent from "./Day1/ClassComponent"
import Usestateffect from "./Day1/usestateffect"
import LifeCycleMethods from "./Day2/LifeCycleMethods"
import FormGrid from "./Day 3/FormGrid"

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
      <FormInput name={obj.Surname}/>
      <Usestateffect />
      <LifeCycleMethods/>
      <FormGrid />
      
    </div>
    </center>
    
  )

}

export default App

