import React from 'react';
import styled from 'styled-components';
import ListedMovies from './ListedMovies';


//Card styling

const PeopleContainerCard = styled.section`
    border:1px solid red;
    border-radius:10px;
    background-color: rgba(238, 238, 238, 0.41);
    width: 50%;
    margin:0 auto;
    margin-bottom:2%;  
    font-size:2rem;
    font-family: 'Sen', sans-serif;
    box-sizing: border-box;
    &:hover {
        background-color:${props => (props.primary ? "#a4d4ff" : "#fff")};
        color:${props => (props.primary ? "fff" : "#000")};
    }
`;

const PeopleHeading = styled.h2`
    font-size:3rem;
`;



// const PeoplePTag = styled.p`
//     margin:10%;
// `;



const PeopleCard = props => {
    // console.log(`this is props in PeopleCard`, props)
    return (
        <PeopleContainerCard>
            <PeopleHeading>Name: {props.name}</PeopleHeading>
            <p>Gender: {props.gender}</p>             
            <p>Height: {props.height}</p>
            <p>Eye Color: {props.eyeColor}</p>
            <p>Mass: {props.mass}</p>


            <ul>Checkout these cool Film API'S: {props.movieList.map((movieNameApi,index) => {
                console.log(`this is movie API info`, movieNameApi);
                               
                return (
                    <ListedMovies 
                    key={index}
                    listedItem={movieNameApi}                            
                
                    />

                )
            })
            
            
            }</ul>  
        </PeopleContainerCard>
    )
}
   
     

export default PeopleCard;