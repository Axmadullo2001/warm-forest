import React from 'react'
import PropTypes from 'prop-types'

import s from './styles.module.scss'

const SearchBox = (props) => {
  const {
    searchFilter,
    setSearchFilter
  } = props


  return (
    <div className={s.search}>
      <div className={s.search__container}>
        <div className={s.search__box}>
          <button className={s.search__btn}>
            <svg
              className={`${s.search__svg_element} svg-icon search-icon`}
              aria-labelledby="title desc"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.9 19.7"
            >
              <title id="title">Search Icon</title>
              <desc id="desc">A magnifying glass icon.</desc>
              <g className="search-path" fill="none" stroke="#e1e1e1">
                <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
              </g>
            </svg>
          </button>
          <input
            type="search"
            className={s.search__input_search}
            placeholder="Type to Search..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

SearchBox.propTypes = {
    searchFilter: PropTypes.string.isRequired,
    handleSearch: PropTypes.func,
    setSearchFilter: PropTypes.func
}

export default SearchBox
