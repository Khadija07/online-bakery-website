import React from 'react'
import './NewCollection.css'
import new_collection from '../../assets/new_collections'
import Items from '../Items/Items'

const NewCollection = () => {
  return (
    <div className='collections'>
        <h1>Cake Flavours</h1>
        <hr/>
        <div className="collections-cakes">
            {new_collection.map((item, i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

            })}

        </div>
      
    </div>
  )
}

export default NewCollection
