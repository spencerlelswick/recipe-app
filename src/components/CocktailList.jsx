import React from 'react'
import { useGlobalContext } from '../context'
import Cocktail from './Cocktail'
import Loading from './Loading'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1) {
    return <h2 className='section-title'>No cocktails found</h2>
  }

  console.log(cocktails)

  return (
    <section className='section'>
      <h2>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((drink) => {
          return <Cocktail key={drink.id} {...drink} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
