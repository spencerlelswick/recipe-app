import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()

  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }

          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        setLoading(false)
      }
    }

    getCocktail()
  }, [id])

  if (!cocktail) {
    return (
      <div>
        <h2>No cocktail</h2>
      </div>
    )
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back to home
      </Link>
      <h2>{name}</h2>
      <div className='drink img-container'>
        <img src={image} alt={name}></img>
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: {name}</span>
          </p>
          <p>
            <span className='drink-data'>category: {category}</span>
          </p>
          <p>
            <span className='drink-data'>info: {info}</span>
          </p>
          <p>
            <span className='drink-data'>glass: {glass}</span>
          </p>
          <p>
            <span className='drink-data'>instructions: {instructions}</span>
          </p>
          <p>
            <span className='drink-data'>
              ingredients:{' '}
              {ingredients.map((ingredient, index) => {
                return ingredient ? <li key={index}>{ingredient}</li> : null
              })}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
