import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentpage } from '../rtk/action/movieAction';

function Pag() {
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();

  useEffect(()=>{
    setPageCount(pages)
  },[])

  const pages = useSelector((state) => state.pageCount)

  //get cureent page
  const getPageMovie = (page) => {
    dispatch(getCurrentpage(page))
  };

    const handlePageClick = (data)=>{
      console.log(data.selected + 1);   
      getPageMovie(data.selected + 1)
    }
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName='page-item'
        nextClassName='page-item'
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        activeClassName='active'
      />
  )
}

export default Pag