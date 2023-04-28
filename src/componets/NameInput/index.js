
import "./NameInput.css";

const NameInput = (props) => {
  
  return (
    <div className="name-input">
      <input 
      value={props.valor} 
      onChange={event => {
        props.setPageNumber(1)
        props.aoAlterado(event.target.value)
      }} 
      placeholder={props.label}></input>
    </div>
  );
};

export default NameInput;
