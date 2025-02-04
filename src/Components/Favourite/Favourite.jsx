import React from 'react'
import './Favourite.css'
import data_list from '../../assets/data'
import Items from '../Items/Items'


const Favourite = () => {
  return (
    <div className='favourite'>
        <h1>Popular</h1>
        <hr/>

        <div className="favourite-item">
            {
                data_list.map((item, i) => {
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
      
    </div>
  )
}

export default Favourite
