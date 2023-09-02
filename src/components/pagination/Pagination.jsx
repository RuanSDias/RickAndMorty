import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({info, numPag, setNumPag}) => {

  const [largura, setLargura] = useState(window.innerWidth);

  let ajustarTamanho = _ => {
    setLargura(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', ajustarTamanho);
    return _ =>  window.removeEventListener('resize', ajustarTamanho);
  })

  return (
      <ReactPaginate 
        className='pagination gap-4 my-4 justify-content-center' 
        previousLabel='Anterior' 
        nextLabel='Proximo'
        previousClassName='previousLabel ant'
        nextClassName='nextLabel prox'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        activeClassName='active'
        marginPagesDisplayed={largura < 576 ? 2 : 5}
        pageRangeDisplayed={largura < 576 ? 1 : 4}
        onPageChange={(pagina) => {
          setNumPag(pagina.selected + 1)
        }}
        forcePage={numPag === 1 ? 0 : numPag -1}
        pageCount={info?.pages}
    />
  )
}

export default Pagination