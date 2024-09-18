import React,{useState} from 'react'

const SongForm=()=>{
    const [title,setTitle]=useState('');
    return(
        <Form onSubmit>
            <label htmlFor="song name">Song name</label>
            <input type="text"  required value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="submit" value='add song'/>
        </Form>
    )
}

export default SongForm;