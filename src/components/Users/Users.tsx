import React from 'react'
import style from './users.module.css'
import image from './../../images/ava.jpg'
import { UsersPageType } from '../../redux/usersReducer'
import { NavLink } from 'react-router-dom'

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersPageType
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
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
            {props.users.users.map((u) => (
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={
                                        u.photos.small !== null
                                            ? u.photos.small
                                            : image
                                    }
                                    alt=""
                                    className={style.userPhoto}
                                />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? (
                                <button onClick={() => props.unfollow(u.id)}>
                                    Unfollow
                                </button>
                            ) : (
                                <button onClick={() => props.follow(u.id)}>
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}
