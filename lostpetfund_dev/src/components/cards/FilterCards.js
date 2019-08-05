import React, {Component} from 'react';

import './FilterCards.scss';

export default class FilterCards extends Component {
    static defaultProps = {
        regions: [],
        handleChangeOrder:  () => {},
        handleChangeRegion: () => {},
    }

    state = {
        filterRegion: 'All',
        orderBy: 'petName'
    }

    changeFilter = e => {
        this.setState({filterRegion: e.target.value});
        this.props.handleChangeRegion(e.target.value);
    }

    changeOrder = e => {
        this.setState({orderBy: e.target.value});
        this.props.handleChangeOrder(e.target.value);
    }

    render() {
        
        const { filterRegion, orderBy } = this.state;
        const { regions } = this.props;

        const filterList = regions.map((item, i) => {
            return (
                <option 
                    key={i}
                    value={item}
                    className={filterRegion === item ? 'active' : ''} 
                >
                    {item}
                </option>
            );

        })

        return (
            <div className="FilterCards" >
                <div className="wrapper">
                    <h2 className="title">Lost and Found Pets</h2>
                    <div className="filter">
                        <label >
                            <span className="dropdown-label">Filter by region:</span>
                            <select value={filterRegion} onChange={this.changeFilter}>
                                <option 
                                    value="All"
                                    className={filterRegion === 'All' ? 'active' : ''} 
                                >All
                                </option>
                                {filterList}
                            </select>
                        </label>
                    </div>
                    <div className="sort">
                        <label >
                            <span className="dropdown-label">Sort by:</span>
                            <select value={orderBy} onChange={this.changeOrder}>
                                <option 
                                    value="petName"
                                    className={orderBy === 'petName' ? 'active' : ''} 
                                >Pet Name
                                </option>
                                <option 
                                    value="dateLost"
                                    className={orderBy === 'dateLost' ? 'active' : ''} 
                                >Date the pet was lost
                                </option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        );            
    }
}