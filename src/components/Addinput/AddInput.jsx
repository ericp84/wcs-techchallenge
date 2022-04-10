import React, {useState} from 'react';
import '../../App.css';

const AddInput = () => {
    const [name, setName] = useState('');
  
    const handleChange = async () => {
      await fetch ('http://192.168.1.105:3000/create_argonauts', {
        method : "POST",
        headers : {'Content-Type': 'application/x-www-form-urlencoded'},
        body : `name=${name}`
      })
    }
  
    return (
        <div className="form-container">
            <form onSubmit={handleChange}>
                <label htmlFor="name" className='label' >Nom de l'argonaute</label>
                <div className="input-container">
                    <input type="text" id="name" name="name"onChange={(e)=>setName(e.target.value)}/>
                    <button id="btn" type='submit'>Envoyer</button>
                </div>
            </form>

        </div>
    );
};

export default AddInput;<h1>hello input add</h1>