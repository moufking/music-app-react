import { Button } from 'bootstrap';
import React, {useEffect, useState} from 'react';
import apiClient from '../services/api';
import Music from './music';
import Favoris from './favoris';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorisAction, addTodo, deleteFavorisAction, loadList } from '../actions';


const Search = () => {
    const [name, setName] = useState('')// VIDE
    const [list, setList] = useState([]);
    const [favoris, setFavoris] = useState([]);
    const musics = useSelector((state) => state.musics);
    const favoris_list = useSelector((state) => state.favoris);


    const dispatch = useDispatch();


    useEffect(() => {
        console.log(favoris, 'render', musics) 
      },);


      const handleSubmit = (e) => {
        e.preventDefault();
       console.log('[handleSubmit]');

       apiClient.get('?term='+name+'&limit=25' ).then(response => {
       // console.log(response.data, 'effect')
        setList(response.data.results)
        dispatch(loadList(response.data.results))

        console.log(list, 'voir la liste')
    })
      }

      const addFavoris = (music) => {
        console.log(music, '[addFavoris] search.js');
        setFavoris([...favoris, music ])   
        dispatch(addFavorisAction(music))
    }

    const deleteFavoris = (favoris_delete) =>{
        console.log(favoris, 'avant modification')
        setFavoris(favoris.filter((t)=> t.trackId!== favoris_delete.trackId))
        console.log(favoris, 'après modification')
        dispatch(deleteFavorisAction(favoris_delete.trackId))
        
    }


    return (
            <>
                <div className="container mb-3">
                    <p>Recherche d'une musique</p>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-4">
                                <input type="text"  name="name" value={name} onChange={e=> setName(e.target.value)} className="form-control" placeholder="Entrer le nom de votre artiste "/>
                            </div>
                            <div className="col-lg-4">
                                <button className="btn btn-primary">Rechercher</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="container">
                    <div className="row">
                        {favoris.length> 0 && <p>Liste de vos favoris</p>}
                        {
                            favoris_list.map((favoris, index) => (
                                <Favoris favoris ={favoris} deleteFavoris={deleteFavoris} /> 
                            ))
                        }
                      
                    </div>
                   
                </div>

                <div className="container">
                    <div className="row">
                        {
                            musics.map((item, index) => (
                                <Music music= {item} key ={index} addFavoris= {addFavoris}/>
                            ))
                        }
                      
                    </div>
                    
                </div>

               

                </>

          

    )
}

export default Search;

