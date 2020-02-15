import React from 'react';
import Image from '../../atoms/Image/Image';
import Video from '../../atoms/Video/Video';
const Recipe = (props) => {
    return ( 
    <div className="card" >
        <div className="card-body">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Image image={props.recipe.mealNameThumb}></Image>
                        <div className="card-text">
                            <p>Category: {props.recipe.mealCategory}</p>
                        </div>
                        <div className="card-text">
                            <p>Ingredients</p>
                            <ul>
                                {
                                    props.recipe.ingredients.map((ingredient, key) => (
                                    <li key={key}>{ingredient.name} - {ingredient.measure}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        
                    </div>
                    <div className="col">
                        <div className="card-title">
                            <h1>{props.recipe.mealName}</h1>
                        </div>
                        <div className="card-text">
                            <p>{props.recipe.instructions}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card-text">
                            <p>Video recipe</p>
                        </div>
                        <Video video={props.recipe.mealVideo}></Video>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
    );
};

export default Recipe;
