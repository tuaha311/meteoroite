import React from 'react'

const BreadCrumbs = (props) => {
    console.warn(props.title, "Title");
    return (
        <div className="page-title-area item-bg1">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content">
                            <h2>{props.title}</h2>
                            <ul>
                                <li><a href="\">Home</a></li>
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