import React, { useState, useEffect } from 'react'

import CardItem from '../../components/CardItem'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer'

import s from './styles.module.scss'

import { goods } from '../../mocks'


const HomePage = () => {
    const [ searchedData, setSearchedData ] = useState(goods)
    const [ searchFilter, setSearchFilter ] = useState('')

    useEffect(() => {
        const filteredPeople = goods.filter(n => n.name.toLowerCase().includes(searchFilter.toLowerCase()))
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
            <Footer />
        </>
    )
}

export default HomePage
