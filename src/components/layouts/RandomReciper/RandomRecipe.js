import React, {Component} from 'react';
import RecipeGenerator from '../../molecules/RecipeGenerator/RecipeGenerator';
import Recipe from '../../molecules/Recipe/Recipe';
import recipesData from '../../../data/recipesData';

class RandomRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: recipesData,
            currentRecipe: null,
            lastRecipe: null};
        this.getRandomRecipe = this.getRandomRecipe.bind(this);
        this.getLastRecipe = this.getLastRecipe.bind(this);
    }

    getRandomRecipe() {
        const lastRecipe = this.state.currentRecipe;
        const currentRecipe = this.state.recipes[~~(Math.random() * this.state.recipes.length)];
        this.setState({
            currentRecipe,
            lastRecipe
        });
    }
    getLastRecipe() {
        const currentRecipe = this.state.lastRecipe;
        this.setState({
            currentRecipe
        });
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <RecipeGenerator 
                                getRandomAction={this.getRandomRecipe} 
                                getLastAction={this.getLastRecipe}>
                        </RecipeGenerator>
                    </div>
                </div>
                <br/>
                {
                        this.state.currentRecipe && 
                        <div className="row">
                            <div className="col">
                                <Recipe recipe={this.state.currentRecipe}></Recipe>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default RandomRecipe;