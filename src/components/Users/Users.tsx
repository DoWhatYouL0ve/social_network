import React from 'react'
import style from './users.module.css'
import image from './../../images/ava.jpg'
import { UsersPageType } from '../../redux/usersReducer'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersPageType
    setTotalUsersCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    toggleFollowingInProgress: (inProgress: boolean, userId: string) => void
    followingInProgress: Array<string>
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
                                <button
                                    disabled={props.followingInProgress.some(
                                        (id) => id === u.id
                                    )}
                                    onClick={() => {
                                        props.toggleFollowingInProgress(
                                            true,
                                            u.id
                                        )
                                        axios
                                            .delete(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY':
                                                            '025d03b5-09be-42be-a133-c9f36a02b000',
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingInProgress(
                                                    false,
                                                    u.id
                                                )
                                            })
                                    }}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingInProgress.some(
                                        (id) => id === u.id
                                    )}
                                    onClick={() => {
                                        props.toggleFollowingInProgress(
                                            true,
                                            u.id
                                        )
                                        axios
                                            .post(
                                                `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY':
                                                            '025d03b5-09be-42be-a133-c9f36a02b000',
                                                    },
                                                }
                                            )
                                            .then((response) => {
                                                if (
                                                    response.data.resultCode ===
                                                    0
                                                ) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingInProgress(
                                                    false,
                                                    u.id
                                                )
                                            })
                                    }}
                                >
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
