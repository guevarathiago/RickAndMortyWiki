import './SpeciesListBox.css'

const SpeciesListBox = (props) => {
 
    return(

    <div className='species-list'>
        <select>
            {props.item.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>
    )
}

export default SpeciesListBox;