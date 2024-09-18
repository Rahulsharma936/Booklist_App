import React, { useState ,useEffect } from "react";
import NewSongForm from "./NewSongForm";
import { v4 as uuidv4 } from "uuid";


const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "song part1", id: 1 },
    { title: "song part2", id: 2 },
    { title: "song part3", id: 3 },
  ]);

  const addSongs = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };
  const [age,setAge]=useState(20)

  useEffect(()=>{
    console.log('useeffect ran');
  },[songs])

  return (
    <>
      <div className="song-list">
        <ul>
          {songs.map((song) => {
            return <li key={song.id}>{song.title}</li>;
          })}
        </ul>
          <button onClick={()=>setAge(age+1)}> age {age}</button>
        <NewSongForm addSongs={addSongs} />
      </div>
    </>
  );
};
export default SongList;
