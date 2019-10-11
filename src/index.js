import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import List from './list';
import SearchBar from './input';



class App extends React.Component {

    state = { images: [] };


    //event handler for index searchbar that gets invoked via a prop in the child input js method
    onSearchSubmit = async term => {
        // console.log("term is " + term);
        const response = await axios.get("https://api.unsplash.com/search/photos", {

            params: {
                query: { term }
            },


            headers: {
                Authorization: "Client-ID 307215a5257e0c8fb5c0237caeb70956c2ebe0d60c944d167adef9c36d4ca98e"
            }
        });


        this.setState({ images: response.data.results });
        console.log(this.state.images);
    };//end onSearchSubmit


    //print out imagesber of components 

    render() {
        return (<div>
            <h1>React Event Handler  </h1>
            <SearchBar onSubmit={this.onSearchSubmit} name='cars'>
            </SearchBar>
            <List images={this.state.images}></List>

        </div>)
    }//end return


}//end class



ReactDOM.render(<App />, document.querySelector('#root'));
