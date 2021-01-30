import React from 'react'

const Category = ({item,index}) => {
    return (
        <div className={`category ${index==0 ? 'active__cat':''}`} >
            <div className="category__heading">
                <h3>{item.catname}</h3>
                <span>{`(${item.quantity})`}</span>
            </div>
        </div>
    )
}

export default Category
