import React from 'react'
import Category from './Category/Category'

const Categories = () => {

    const catLists=[
        {catname:'Bestsellers', quantity:10},
        {catname:'Pizza Specials', quantity:21},
        {catname:'Singles Value Combos', quantity:31},
        {catname:'Match Combos', quantity:191},
        {catname:'Pastas by Firangi Bake', quantity:31},
        {catname:'Midnight Sale', quantity:51}
    ]
    return (
        <div className="categoryLists margin-top-lg">
            {catLists.map((item,i)=> <Category item={item} index={i}/>)}
        </div>
    )
}

export default Categories
