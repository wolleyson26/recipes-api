import React, { Component } from 'react'
import Recipe from './Recipe'

export default class RecipeList extends Component {
    render() {
        return (
            <div className="">
                <h1>Hello from recipe list</h1>
                <Recipe />
            </div>
        )
    }
}
