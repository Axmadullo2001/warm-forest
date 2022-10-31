import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardItem from '../../components/CardItem'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer'

import { apiUrl } from '../../mocks'

import s from './styles.module.scss'


const HomePage = () => {
    const [searchFilter, setSearchFilter] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(apiUrl).then((resp) => {
            const allProducts = resp.data
            const filteredPeople = allProducts.filter(n => n.description.toLowerCase().includes(searchFilter.toLowerCase()))
            setData(filteredPeople)
        })

    }, [searchFilter])

    console.log(data)

    return (
        <>
            <Header />
            <SearchBox
                setSearchFilter={setSearchFilter}
                searchFilter={searchFilter}
            />
            <div className={s.card_list_container}>
                {data.map(item => <CardItem key={item.id} {...item} />)}
            </div>
            <Footer />
        </>
    )
}

export default HomePage
