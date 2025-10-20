import FormInput from "./Day1/FormInput"
import Sample from "./Day1/sample"
import ClassComponent from "./Day1/ClassComponent"
import Usestateffect from "./Day1/usestateffect"

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
      
    </div>
    </center>
    
  )
}

export default App

