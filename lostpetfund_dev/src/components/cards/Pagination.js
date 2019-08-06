import React, {Component} from 'react';

import './Pagination.scss';

export default class Pagination extends Component {
    static defaultProps = {
        cardsPerPage: '',
        totalCards: '',
        currentPage: '',
        handlePaginate: () => {},
    };

    changePage = (number) => {
        this.props.handlePaginate(number);
    }

    render() {
        const {totalCards, cardsPerPage, currentPage } = this.props;
        const pageNumbers = [];
        const totalPages = Math.ceil(totalCards / cardsPerPage);

        for( let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        const prev = currentPage - 1;
        const next = currentPage + 1;
        return (
            <div className="Pagination">
                    {currentPage !== 1 &&
                        <button onClick={() => this.changePage(prev)} >&lt;</button>
                    }
                    {totalPages !== 1 &&
                        pageNumbers.map(number => (
                            <button
                                key={number} 
                                className={currentPage === number ? 'active' : '' }
                                onClick={() => this.changePage(number)}
                                disabled={currentPage === number ? true : false }
                                >
                                {number}
                            </button>
                        ))
                    }
                    {currentPage !== totalPages &&
                        <button onClick={() => this.changePage(next)} >&gt;</button>
                    }
            </div>
        );        

    }
}
