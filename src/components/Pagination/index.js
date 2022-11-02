export const Pagination = (props) => {

  //eslint-disable-next-line react/prop-types
  let { currentPage, totalPages, setCurrentPage } = props

  const prevPage = () => {
    if(currentPage === 1) return
    currentPage--
    setCurrentPage(currentPage)
  }

  const nextPage = () => {
    if(currentPage === totalPages) return
    currentPage++
    setCurrentPage(currentPage)
  }

  const buttons = (totalPages) => {
    let content = []
    for (let i = 1; i <= totalPages; i++) {
      content.push(<button key={i} onClick={ () => setCurrentPage(i)}>{i}</button>)
    }
    return content
  }

  return (
    <div>
      <button onClick={() => prevPage()}>
        PREV
      </button>
      {
        buttons(totalPages)
      }
      <button onClick={() => nextPage()}>
        Next
      </button>
    </div>
  )
}