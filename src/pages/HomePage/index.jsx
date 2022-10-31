import React, { useState, useEffect } from 'react'
import axios from 'axios'


import CardItem from '../../components/CardItem'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer'

import { apiUrl } from '../../mocks'

import Pagination from '../../components/Pagination'

import s from './styles.module.scss'


const HomePage = () => {
    const [searchFilter, setSearchFilter] = useState('')
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const productPerPage = 4


    const lastProductIndex = currentPage * productPerPage
    const firstProductIndex = lastProductIndex - productPerPage
    const currentProduct = data.slice(firstProductIndex, lastProductIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)


    useEffect(() => {
        axios.get(apiUrl).then((resp) => {
            const allProducts = resp.data
            const filteredPeople = allProducts.filter(n => n.description.toLowerCase().includes(searchFilter.toLowerCase()))
            setData(filteredPeople)
        })

    }, [searchFilter])


    return (
        <>
            <Header />
            <SearchBox
                setSearchFilter={setSearchFilter}
                searchFilter={searchFilter}
            />
            <div className={s.card_list_container}>
                {currentProduct.map(item => <CardItem key={item.id} {...item} />)}
            </div>
            <Pagination
                productsPerPage={productPerPage}
                totalProducts={data.length}
                paginate={paginate}
            />
            <Footer />
        </>
    )
}

export default HomePage
