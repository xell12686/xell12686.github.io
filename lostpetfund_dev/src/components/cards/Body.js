import React, {Component} from 'react';

import FilterCards from './FilterCards';

import Cards from './Cards';
import Pagination from './Pagination';

import { LoadingAnimation } from '../LoadingAnimation';

export default class Body extends Component {
    static defaultProps = {
        user: '',
        userDonations: [],
        handleUpdateCards: (updatedPets) => {},
        handleUpdateDonations: (updatedDonations) => {}
    }

    state = {
        lostPets: [],
        regions: [],
        queryText: '',
        orderBy: 'petName',
        orderDir: 'asc',
        loading: false,
        petToDonate: '',
        currentPage: 1,
        cardsPerPage: 6
    }

    updatePetDonationStatus = (pets) => {
        const donatedPetsIDs = this.props.userDonations.map(item => {
            return item.petId;
        });
        pets.forEach((pet) => {
            if (donatedPetsIDs.includes(pet.petId)) {
                pet.donatedStatus = true;
            }
        }) 
    }
    
    makeDonation = (petId, amount, label) => {
        let tempPets = this.state.lostPets;
        let petIndex = tempPets.findIndex((item) => {
            return item.petId === petId;
        });
        tempPets[petIndex].donatedStatus = true;
        this.props.handleUpdateCards(tempPets);

        const newDonation = {
            petId: petId,
            petName: tempPets[petIndex].petName,
            donatedAmount: amount,
            label: label
        };
        let updatedDonations = [...this.props.userDonations, newDonation];
        this.props.handleUpdateDonations(updatedDonations);
    }
    


    componentDidMount() {
        this.setState({ loading:true });
        fetch('./data-lostpets.json')
        .then(response => response.json())
        .then(result => {
            const pets = result.map(item => {
                //more custom data filters / data irregularity handling here if needed
                const {year, month, day} = item.dateLost;
                const formattedDateLost = new Date( year, month, day);
                const donatedStatus = false;
                return {...item, formattedDateLost, donatedStatus };
            });
            const tempRegions = result.map(item => item.region);
            //remove duplicate regions
            const regions = [...new Set(tempRegions)];
            this.props.handleUpdateCards(pets);

            this.setState({
                lostPets: pets,
                regions: regions,
            });
            setTimeout(() => {
                this.setState({ loading:false });
            }, 1000);
        });
    }
    
    changeOrder = order => {
        const orderDir = order === 'dateLost' ? 'desc' : 'asc'; 
        this.setState({ 
            orderBy: order,
            orderDir: orderDir
        });
    }

    changeRegion = region => {
        if (region === 'All') { region = ''; }        
        this.setState({ 
            queryText: region,
            currentPage: 1
        });
    }
    
    paginate = (number) => this.setState({ currentPage: number });

    render() {
                   
        if (this.props.userDonations.length && this.state.lostPets.length) {
            this.updatePetDonationStatus(this.state.lostPets);    
        } else {
        }

        let order;
        this.state.orderDir === 'asc' ? order = 1 : order = -1;

        let filteredCards = this.state.lostPets;
        filteredCards = filteredCards.sort((a,b) => {
            if ( this.state.orderBy === 'dateLost' ) {
                if ( a.formattedDateLost > b.formattedDateLost ) {
                    return 1 * order;
                } else {
                    return -1 * order;
                }
            } else {
                if ( a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase() ) {
                    return -1 * order;
                } else {
                    return 1 * order;
                }
            }
        }).filter(eachItem => 
                eachItem['region']
                .toLowerCase()
                .includes(this.state.queryText.toLowerCase()) 
            );

        const { loading, regions, currentPage, cardsPerPage } = this.state;
        
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
        

        return (
            <main className="App-body">
                <FilterCards
                    handleChangeOrder={this.changeOrder}
                    handleChangeRegion={this.changeRegion}
                    regions={regions} 
                />
                {loading ? 
                    <LoadingAnimation message="Loading Pets" /> : 
                    <Cards
                        user={this.props.user}
                        lostPets={currentCards}
                        handleMakeDonation={this.makeDonation}
                    />
                }
                
                <Pagination 
                    cardsPerPage={cardsPerPage}
                    currentPage={currentPage}
                    totalCards={filteredCards.length}
                    handlePaginate={this.paginate}
                />
            </main>
        );            
    }
}