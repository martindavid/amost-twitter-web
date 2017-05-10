import React, { PropTypes } from 'react';

const CardStatsLong = props => {
    return (
        <div className="card card-stats">
            <div className="card-header" data-background-color={props.backgroundColor}>
                <i className={`fa ${props.iconClass}`}></i>
            </div>
            <div className="card-content">
                {props.children}
            </div>
            <div className="card-footer">
                <div className="stats">
                    <i className="fa fa-calendar"></i> Last 24 Hours
				</div>
            </div>
        </div>
    )
}

CardStatsLong.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default CardStatsLong;