import React from 'react';
import './css/list.css';



const List = (props) =>{

    //higher order map func running for images.length
    return props.images.map((images,index) => {

        return <img alt = {images.description} key = {index} src = {images.urls.regular}></img>

    })//end outer retur
    


}

export default List;
