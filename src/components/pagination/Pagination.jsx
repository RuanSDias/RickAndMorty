import React from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({info, numPag, setNumPag}) => {
  return (

      <ReactPaginate 
        className='pagination gap-4 my-4' 
        previousLabel='Anterior' 
        nextLabel='Proximo'
        previousClassName='previousLabel'
        nextClassName='nextLabel'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        onPageChange={(pagina) => {
          setNumPag(pagina.selected + 1)
        }}
        forcePage={numPag === 1 ? 0 : numPag -1}
        pageCount={info?.pages}
    />


  )
}

export default Pagination