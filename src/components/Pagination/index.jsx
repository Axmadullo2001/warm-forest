import React from 'react'

import PropTypes from 'prop-types'

import s from './styles.module.scss'


const Pagination = (props) => {
  const { productsPerPage, totalProducts, paginate } = props

  const pageNumbers = []

  for (let i = 1; i <= Math.floor(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
    <div>
      <ul className={s.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={s.pagination__page_item}>
            <button className={s.pagination__page_link} onClick={ () => paginate(number) }>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination


Pagination.propTypes = {
  productsPerPage: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
  paginate: PropTypes.func
}
