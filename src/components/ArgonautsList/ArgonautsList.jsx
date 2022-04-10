import React, {useEffect, useState} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AddInput from '../Addinput/AddInput';

const ArgonautsList = () => {

    const [ argonautsList, setArgonautsList] = useState([]);

    useEffect(()=> {
        const argonautsStartList = async () => {
        const argonautsRequest = await fetch('https://argonauts-techchallenge-back.herokuapp.com/argonauts')
        const argonautsResponse = await argonautsRequest.json()
        setArgonautsList(argonautsResponse.argoOnBoard)
    }
    argonautsStartList()
    }, [])

    let crew;
    argonautsList.length === 0 ? crew = <h2 className="no-argo">Pas d'argonautes sur le navire ! 😨</h2> : crew = argonautsList.map((argos, i)=> {
        return (
            <div className="crew-members" key={i}><p> {argos.name} </p></div>
        )
    })
    return (
        <>
            <Header/>
                <h1>Les Argonautes</h1>
                    <AddInput/>
                <h1>Membres de l'équipage</h1>
                <div className="crew">
                    {crew}
                </div>
            <Footer/>
        </>
    );
};

export default ArgonautsList;