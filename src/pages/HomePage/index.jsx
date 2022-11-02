import React, { useState, useEffect } from 'react'

import CardItem from '../../components/CardItem'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer'

import { goods } from '../../mocks'

import s from './styles.module.scss'
import axios from 'axios'
import {Pagination} from '../../components/Pagination'

const url = 'https://reqres.in/api/'

const HomePage = () => {
    const [ searchedData, setSearchedData ] = useState(goods)
    const [ searchFilter, setSearchFilter ] = useState('')
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ totalPages, setTotalPages] = useState(1)

    useEffect(() => {

      axios.get(`${url}users`, {
        params: {
          page: currentPage
        }
      })
        .then((response) => {
          setTotalPages(response.data.total_pages)
      })

        const filteredPeople = goods.filter(n => n.name.toLowerCase().includes(searchFilter.toLowerCase()))
        setSearchedData(filteredPeople)
    }, [currentPage, searchFilter])


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
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
            <Footer />
        </>
    )
}

export default HomePage
