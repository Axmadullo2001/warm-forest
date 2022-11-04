import React, { useState, useEffect } from 'react'

import CardItem from '../../components/CardItem'
import Header from '../../components/Header'
import SearchBox from '../../components/SearchBox'
import Footer from '../../components/Footer'

import s from './styles.module.scss'
import axios from 'axios'
import {Pagination} from '../../components/Pagination'

const url = 'https://reqres.in/api/'

const HomePage = () => {
  const [ data, setData ] = useState([])
  const [ filteredData, setFilteredData ] = useState([])
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ totalPages, setTotalPages] = useState(1)

  const [ search, setSearch ] = useState('')

  useEffect(() => {

    axios.get(`${url}users`, {
      params: { page: currentPage }
    })
      .then((response) => {
        setTotalPages(response.data.total_pages)
        setData(response.data.data)
        setFilteredData(response.data.data)
    })
  }, [currentPage])

  const searchFunction = (value) => {
    const filteredData = data.filter(item => item.first_name.toLowerCase().includes(value.toLowerCase()))
    setFilteredData(filteredData)
  }

    return (
      <>
        <Header />
        <SearchBox
          searchFunction={searchFunction}
          setSearch={setSearch}
          search={search}
        />
        <div className={s.card_list_container}>
          {filteredData.map(item => <CardItem key={item.id} {...item} />)}
          { !filteredData.length && search && <p>Nothing found...</p>}
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
