import React, {useState} from 'react'


const Search = ({search}) => {
    const[text,setText] = useState('')

    const onSearch = (q)=>{
        setText(q)
        search(q)
    }

    return (
        <section className='search'>
            <form>
                <input type="text"
                className="form-control"
                placeholder="Ache seu Heroi"
                autoFocus
                onChange={(e)=>onSearch(e.target.value)}
                value={text}></input>
            </form>
        </section>
    
    )
}

export default Search