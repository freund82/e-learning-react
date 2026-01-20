import './pagination.css';
import LeftSvg from "../../../assets/icons/left.svg";
import RightSvg from "../../../assets/icons/right.svg";

const Pagination = ({ coursesPerPage, currentPage, totalCourses, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-container">
      <button className='page-link prev' onClick={() => paginate(currentPage - 1)}disabled={currentPage === 1}><img src={LeftSvg} alt="left" /></button>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} onClick={() => paginate(number)} className={number === currentPage ? 'page-item activePage' : 'page-item'}>
            <a href='#!' className={`page-link ${number === currentPage ? 'activePage' : ''}`}>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <button className='page-link next' onClick={() => paginate(currentPage + 1)}disabled={currentPage === pageNumbers.length}><img src={RightSvg} alt="right"/></button>
    </nav>
  );
};

export default Pagination;