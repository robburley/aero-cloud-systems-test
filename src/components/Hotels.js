import React, {Component} from 'react';
import {connect} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Hotels extends Component {
    render() {
        return (
            <div>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Facilities</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.filteredData()}
                    </tbody>
                </table>
            </div>
        )
    }

    filteredData() {
        return this.props.hotels
            .map((hotel, i) => (
                <tr key={i}>
                    <td>{hotel.name}</td>
                    <td>
                        {
                            this.renderStars(hotel.starRating)
                                .map((stars, key) => (
                                    stars
                                ))
                        }
                    </td>
                    <td>
                        {
                            hotel.facilities.map((facility, c) => (
                                <div className={'mx-2 btn btn-primary'} key={c}>{facility}</div>
                            ))
                        }
                    </td>
                </tr>
            ))
    }


    renderStars(count) {
        let stars = [];

        for (let i = 0; i < count; i++) {
            stars.push(
                <FontAwesomeIcon icon="star"
                                 className={'text-warning fa-2x'}
                                 key={i}
                />
            )
        }

        return stars
    }
}

export default connect(state => state)(Hotels)