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
                                                 className={'fa-2x'}

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
                                     className={'facility-filter ml-2 btn btn-outline-secondary'}
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