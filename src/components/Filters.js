import React, {Component} from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Filters extends Component {
    render() {
        const stars = [1, 2, 3, 4, 5];
        const facilities = [
            "Car Park",
            "Pool",
            "Gym"
        ];

        return (
            <div className={'row mb-5'}>
                <div className={'col-6'}>
                    <h2>Stars</h2>
                    {
                        stars.map((val, key) => (
                            <span className={'filter-star'} key={key}>
                                <FontAwesomeIcon icon="star"
                                                 className={val <= this.props.filters.stars ? 'text-warning fa-2x' : 'text-secondary fa-2x'}
                                                 onClick={() => {
                                                     this.props.dispatch({
                                                         type: 'UPDATE_STARS',
                                                         payload: val
                                                     })
                                                 }}
                                />
                            </span>
                        ))
                    }
                </div>

                <div className={'col-6 text-right'}>
                    <h2>Facilities</h2>

                    <div className="facilities">
                        {
                            facilities.map((facility, i) => (
                                <div key={i}
                                     className={this.props.filters.facilities.includes(facility) ? 'facility-filter ml-2 btn btn-primary' : 'facility-filter ml-2 btn btn-outline-secondary'}
                                     onClick={() => {
                                         this.props.dispatch({
                                             type: 'TOGGLE_FACILITIES',
                                             payload: facility
                                         })
                                     }}
                                >
                                    {facility}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(Filters)