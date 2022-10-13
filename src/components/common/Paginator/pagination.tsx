import style from './paginator.module.css'
import React from 'react'

export const Paginator = (props: any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.pagination}>
            {pages.map((p) => (
                <span
                    onClick={() => props.setCurrentPage(p)}
                    className={
                        props.currentPage === p
                            ? `${style.pageNumber} ${style.selectedPage}`
                            : `${style.pageNumber}`
                    }
                    key={p}
                >
                    {p}
                </span>
            ))}
        </div>
    )
}
