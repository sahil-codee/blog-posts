import React from 'react'

function Pagination({ postsPerPage, totalPosts, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination' style={{ justifyContent: "right", marginRight: "6rem" }}>
                {pageNumbers.map(number => (
                     <li key={number} className="page=item">
                        <a href='!#' onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination