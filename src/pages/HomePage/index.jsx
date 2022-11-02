import React, { useState, useEffect } from 'react'

import CardItem from '../../components/CardItem'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer'
import {Pagination} from '../../components/Pagination'



import s from './styles.module.scss'


const HomePage = () => {
    const [ searchedData, setSearchedData ] = useState([])
    const [ searchFilter, setSearchFilter ] = useState('')

    useEffect(() => {
        const filteredPeople = searchedData.filter(n => n.first_name.toLowerCase().includes(searchFilter.toLowerCase()))
        setSearchedData(filteredPeople)
    }, [searchFilter])


    return (
        <>
            <Header />
            <SearchBox
            setSearchFilter={setSearchFilter}
            searchFilter={searchFilter}
            />
            <div className={s.card_list_container}>
                {searchedData.map(item => <CardItem key={item.id} {...item} />)}
            </div>
            <Pagination
            />
            <Footer />
        </>
    )
}

export default HomePage
