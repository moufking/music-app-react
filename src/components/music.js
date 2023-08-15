import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';


const Music = ({music, key, addFavoris}) => {
   
    //props => { music: {}, key: identidiant}
    return (
        <>
        <div className="col-md-3 mb-4">
            <div className="card" >
                <img src={music.artworkUrl100} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 class="card-title">{music.artistName}</h5>
                    <p className="card-text">{music.collectionName}</p>
                    <button  onClick={()=> addFavoris(music)}className="btn btn-primary mb-4">Ajoute comme favoris</button>
                    <ReactAudioPlayer src={music.previewUrl} controls className='col-md-12 text-center' />  
                                     
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Music