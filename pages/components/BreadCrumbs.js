import React from 'react'
import Link from 'next/link'

const BreadCrumbs = (props) => {

    return (
        <div className="page-title-area item-bg1" style={props.img != null ? { backgroundImage: `url(${props.img})` } : null}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>{props.title}</h2>
                            <ul>
                                <Link href="/">Home</Link>
                                <li>{props.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumbs