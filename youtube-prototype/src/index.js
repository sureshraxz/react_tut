import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearchApi from 'youtube-api-search';

const API_KEY = 'AIzaSyAGSqpH1_fHJFCgRNKY-l5qPloMQdcNZ9w'; //paste your key

class App extends Component{
    constructor(props){
        super(props);
        this.videoApiCall('rdj');
    }
    render(){
        return (
            <SearchBar onSearchBarChange={term => this.videoApiCall(term)} />
        );
    }
    //youtube search api 
    videoApiCall(search_term){
        YTSearchApi({key:API_KEY, term:search_term}, (videos_data) =>{
            console.log(videos_data);
        });
    }
}

ReactDOM.render(<App/>,document.querySelector('.index-container'));