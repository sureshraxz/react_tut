import React,{Component} from 'react';

class SearchBar extends Component{
    //inbuild fns - constructor(provided by class es6), super(oops), state(react) 
    constructor(props){
        super(props);

        this.state = {search_term:''};
    }
    //render element - once we setState to a component element it starts rerendering
    render(){
        return (
            <input 
            value={this.state.search_term}
            onChange={event => this.onInputChange(event.target.value)} />
        );
    }
    //input event handler function
    onInputChange(search_term){        
        this.setState({search_term:search_term});     //setting state
        this.props.onSearchBarChange(search_term);      //passing data to call back fn - which is called in index.js
    }
}

export default SearchBar;



