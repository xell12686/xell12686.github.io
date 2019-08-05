import React, {Component} from 'react';

import './FilterCards.scss';

export default class FilterCards extends Component {
    static defaultProps = {
        user: {},
        orderBy: '',
        queryText: '',
        handleChangeOrder:  () => {},
        handleChangeRegion: () => {},
        regions: []
    }

    state = {
        showSort: false,
        showFilter: false
    }

    toggleFilter = () => {
        this.setState(prevState => ({
            showFilter: !prevState.showFilter 
        }));
    }

    toggleSort = () => {
        this.setState(prevState => ({
            showSort: !prevState.showSort
        }));
    }

    closeSort = () => this.setState({showSort: false})
    closeFilter = () => this.setState({showFilter: false})


    render() {
        
        const { showFilter, showSort} = this.state;
        const { queryText, orderBy, handleChangeRegion, handleChangeOrder } = this.props;

        const filterList = this.props.regions.map((item, i) => {
            return (
                <button 
                    key={i}
                    onClick={() => {
                        this.closeFilter(); 
                        handleChangeRegion(item);
                    }}
                    className={this.props.queryText === item ? 'active' : 'none'} 
                >
                {item}
                </button>
            );

        })

        return (
            <div className="FilterCards" >
                <div className="wrapper">
                    <h2 className="title">Lost and Found Pets</h2>
                    <div className="filter">
                        <label>
                            <button className="dropdown-toggle" onClick={this.toggleFilter}>Filter by region:</button>
                            <div className={'dropdown-menu ' + (showFilter ? 'show' : 'hide' )} >
                                <button 
                                    onClick={() => {
                                        this.closeFilter(); 
                                        handleChangeRegion('All');
                                    }}
                                    className={queryText === '' ? 'active' : 'none'} 
                                >
                                All
                                </button>                                
                                {filterList}
                            </div>
                        </label>
                        <span className="selected-value">{queryText === '' ? 'All' : queryText}</span>
                    </div>
                    <div className="sort">
                        <label>
                            <button className="dropdown-toggle" onClick={this.toggleSort}>Order by:</button>
                            <div className={'dropdown-menu ' + (showSort ? 'show' : 'hide' )} >
                            <button 
                                className={'dropdown-item ' + (orderBy === 'petName' && 'active')} 
                                onClick={ e => {
                                    handleChangeOrder('petName');
                                    this.closeSort();
                                }}
                            >
                                Pet Name
                            </button>
                            <button 
                                className={'dropdown-item ' + (orderBy === 'dateLost' && 'active')} 
                                onClick={ e => {
                                    handleChangeOrder('dateLost');
                                    this.closeSort();
                                }}
                            >
                                Date the pet was lost
                            </button>
                            </div>
                        </label>
                        <span className="selected-value">
                            {orderBy === 'petName' ? 'Pet name' : ' Date the pet was lost' }
                        </span>
                    </div>
                </div>
            </div>
        );            
    }
}