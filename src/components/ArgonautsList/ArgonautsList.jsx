import React, {useEffect, useState} from 'react';
import AddInput from '../Addinput/AddInput';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const ArgonautsList = () => {
    const [ argonautsList, setArgonautsList ] = useState([]);
    const [ argoListError, setArgoListError ] = useState([]);

    useEffect(()=> {
        const argonautsStartList = async () => {
        const argonautsRequest = await fetch('https://argonauts-techchallenge-back.herokuapp.com/argonauts')
        const argonautsResponse = await argonautsRequest.json()
        setArgonautsList(argonautsResponse.argoOnBoard)
        setArgoListError(argonautsResponse.error)
    }
    argonautsStartList()
    }, [])

    let crew;
    argonautsList.length > 0 ? crew = argonautsList.map((argos, i)=> {
        return (
            <div className="crew-members" key={i}><p> {argos.name} </p></div>
        )
    }) : crew = <h2 id="no-argo">{argoListError}</h2> 
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