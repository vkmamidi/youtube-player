import React from 'react';
import {Button,FormGroup,FormControl} from 'react-bootstrap';

export default class Search extends React.Component{
    
    state={
        text:''
    }
    onSearchChange = (e)=>{
        const text = e.target.value
        this.setState(()=>({text}))
    }
    
    onSearch = (e)=>{
        e.preventDefault()
        this.props.onSearchChange(e.target.search.value)
        console.log(e.target.search.value)
    }

    render(){
        return(
            <form onSubmit={this.onSearch} className='form'>

            <input className='search-box' type='text' name='search' value={this.state.text} placeholder='Search Your Content' onChange={this.onSearchChange}/>
            <Button type='submit'>Search</Button>   
            
            </form>
        )
    }
}