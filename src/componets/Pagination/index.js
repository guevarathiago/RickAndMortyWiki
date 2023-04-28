import React from "react";
import "./Pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  

  return <ReactPaginate 
  pageCount={props.info?.pages} 
  className="pagination"
  nextLabel='Next'
  previousLabel='Prev'
  nextClassName="button"
  previousClassName="button"
  pageClassName="page-item"
  pageLinkClassName="page-link"
  activeClassName="page-active"
  forcePage={props.pageNumber===1?0 : props.pageNumber - 1}
  onPageChange={(data)=>{
    props.setPageNumber(data.selected + 1)}}

  />
};

export default Pagination;
