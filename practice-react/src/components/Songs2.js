import React,{useState} from 'react'
import SongForm from './songForm';

const Songs=()=>{
    const [songs,setSongs]=useState([{title:"teri maa ki chudhiya",id:1},
        {title:"tere baap ka london me",id:2 },
        {title:"teri gandiya",id:3}]

    );
const addSongs=()=>{
    setSongs([...songs,{title:songs.title,id:Songs.length+1}])
}
    return(
    
        <div>
            <ul>
                {songs.map((song)=>{
                     return<li key={song.id}>{song.title}</li> 
                })};
            </ul>
         </div>
        
         

  )};
    


export default Songs;