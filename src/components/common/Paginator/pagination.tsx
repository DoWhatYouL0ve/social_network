import style from './paginator.module.css'
import React, { useState } from 'react'

type PropsType = {
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    totalItemsCount: number
    pageSize: number
    portionSize: number
}

export const Paginator = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize

    return (
        <div className={style.pagination}>
            <button
                onClick={() => setPortionNumber(portionNumber - 1)}
                disabled={portionNumber === 1}
            >
                prev
            </button>
            {pages
                .filter(
                    (p) =>
                        p >= leftPortionPageNumber &&
                        p <= rightPortionPageNumber
                )
                .map((p) => (
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
            <button
                onClick={() => setPortionNumber(portionNumber + 1)}
                disabled={portionCount === portionNumber}
            >
                next
            </button>
        </div>
    )
}
