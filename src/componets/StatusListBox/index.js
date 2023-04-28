import "./StatusListBox.css";

const StatusListBox = (props) => {
  return (
    <div className="listBox">
      <select
        value={props.valor}
        onChange={event => {
          props.setPageNumber(1);
          props.aoAlterado(event.target.value);
        }}
      >
        {props.item.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default StatusListBox;
