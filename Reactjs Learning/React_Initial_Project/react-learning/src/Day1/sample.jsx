
const Aeello = () => {
  return (
    <div>
        <h2 style={{color:"green"}}>Functional Components</h2>
    </div>
  );
};

const Aeello_1 = () =>{
    return(
        <h2>Sub Component Creation</h2>
    );
};



function Sample(props) {
  return (
    <div>
      <Aeello />
      <Aeello_1 />
            <h2>{props.name.props}: {props.name.Forname}-{props.name.Surname}</h2>

    </div>
  );
}

export default Sample;
