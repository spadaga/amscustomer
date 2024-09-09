import React from 'react'

const StaticMessage = ({message}) => {
    return (
        <div className="nodata-empty">
            <div className="nodata-empty__icon_container">
                <div className="nodata-empty__icon">
                    <span className="nodata-empty__line" />
                    <span className="nodata-empty__line" />
                    <span className="nodata-empty__line" />
                </div>
            </div>
            <p className="nodata-text-heading-small nodata-loader__text">{message}</p>
        </div>
    )
}

export default StaticMessage
