import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Favoris = ({favoris, deleteFavoris})=> {
    return (
        <>
        <div className="col-md-3 mb-2">
            <div className="card" >
                <img src={favoris.artworkUrl100} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 class="card-title">{favoris.artistName}</h5>
                    <p className="card-text"> {favoris.collectionName}</p>
                    <button  className="btn btn-primary mb-4" onClick={()=>deleteFavoris(favoris)}>Supprimer des favoris</button>
                    <ReactAudioPlayer src={favoris.previewUrl} controls className='col-md-12 text-center'/>
                </div>
            </div>
        </div>
    
        </>
    )
}

export default Favoris