import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';



const Data = () => {

    const musics =  useSelector((state) => state.musics)
    const favorisData =  useSelector((state) => state.favoris)

    useEffect(() => {
        console.log(musics ,favorisData, 'Data' )

    })

    return ( 
        <>


        </>
    )

}


export default Data