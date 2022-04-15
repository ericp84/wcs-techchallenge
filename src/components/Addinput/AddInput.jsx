import React, {useState} from 'react';
import '../../App.css';

const AddInput = () => {
    const [name, setName] = useState('');
    // https://argonauts-techchallenge-back.herokuapp.com/
    const handleChange = async (event) => {
        event.preventDefault();
        await fetch ('https://argonauts-techchallenge-back.herokuapp.com/create_argonauts', {
        method : "POST",
        headers : {'Content-Type': 'application/x-www-form-urlencoded'},
        body : `name=${name}`
      })
        setName("")
    }
  
    return (
        <div className="form-container">
            <form>
                <label htmlFor="name" className='label' >Nom de l'argonaute</label>
                <div className="input-container">
                    <input type="text" id="name" value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
                    <button id="btn" type='submit' onClick={handleChange}>Envoyer</button>
                </div>
            </form>
        </div>
    );
};

export default AddInput;