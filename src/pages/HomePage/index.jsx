import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardItem from '../../components/CardItem'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer'
import {Pagination} from '../../components/Pagination'

import { url } from '../../api/example'

import s from './styles.module.scss'


const HomePage = () => {
    const [ searchedData, setSearchedData ] = useState([])
    const [ searchFilter, setSearchFilter ] = useState('')
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ totalPages, setTotalPages] = useState(4)

    useEffect(() => {

      axios.get(`${url}users`, {
        params: {
            per_page: 3,
            page: currentPage
        }
      })
        .then((response) => {
          setTotalPages(response.data.total_pages)
          setSearchedData(response.data.data)
      })

    }, [currentPage, searchFilter])

    const searchItems = () => {
        if (searchFilter) {
            const filteredPeople = searchedData.filter(n => n.first_name.toLowerCase().includes(searchFilter.toLowerCase()))
            setSearchedData(filteredPeople)
        }
    }

    return (
        <>
            <Header />
            <SearchBox
            setSearchFilter={setSearchFilter}
            searchFilter={searchFilter}
            searchItems={searchItems}
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
