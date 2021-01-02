import React, { Component } from 'react'
import "./Search.css"

export class Search extends Component {
    state = {
        title:''
    }
    search = (e) => {
        this.setState({title: e.target.value})
    }
    submit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.title)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submit} display={{display: 'flex'}}>
                    <input 
                    type="text"
                    placeholder="AddS your name..."
                    style={searchstyle}
                    onChange={this.search}
                    // value={this.state.title}
                    /> 
                    <input
                    type="submit"
                    value="submit"
                    className="btn"
                    style={{flex: '1'}}

                    />
                </form>
            </div>
        )
    }
}
const searchstyle ={
    display: 'flex',
    padding: '10px',
    

}

export default Search
