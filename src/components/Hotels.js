import React, {Component} from 'react';
import {connect} from "react-redux";

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
                        {hotel.starRating}
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
}

export default connect(state => state)(Hotels)