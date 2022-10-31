import React, { useState, useEffect, useMemo } from 'react'
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

    useEffect(() => {
        axios.get(apiUrl).then((resp) => {
            const allProducts = resp.data
            const filteredPeople = allProducts.filter(n => n.description.toLowerCase().includes(searchFilter.toLowerCase()))
            setData(filteredPeople)
        })
    }, [searchFilter])

    let PageSize = 4

    const [currentPage, setCurrentPage] = useState(1)

    const currentProductData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize
      const lastPageIndex = firstPageIndex + PageSize
      return data.slice(firstPageIndex, lastPageIndex)
    }, [currentPage])


    return (
        <>
            <Header />
            <SearchBox
                setSearchFilter={setSearchFilter}
                searchFilter={searchFilter}
            />
            <div className={s.card_list_container}>
                {currentProductData.map(item => <CardItem key={item.id} {...item} />)}
            </div>
            <Pagination
                className='pagination-bar'
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            <Footer />
        </>
    )
}

export default HomePage
