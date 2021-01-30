import React from 'react'

const Layout = (props) => {
    return (
        <div className="container">
            <div className="layout">
                {props.children}
            </div>
        </div>
    )
}

export default Layout
