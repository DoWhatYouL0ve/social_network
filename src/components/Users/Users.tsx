import React from 'react'
import style from './users.module.css'
import image from './../../images/ava.jpg'
import { UsersPageType } from '../../redux/usersReducer'
import { NavLink } from 'react-router-dom'
import { Paginator } from '../common/Paginator/pagination'

export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UsersPageType
    setCurrentPage: (currentPage: number) => void
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    toggleFollowingInProgress: (inProgress: boolean, userId: string) => void
    followingInProgress: Array<string>
    followTC: (userId: string) => void
    unfollowTC: (userId: string) => void
}

export const Users = (props: UsersPropsType) => {
    return (
        <div className={style.userWrapper}>
            <Paginator
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
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
                                        props.unfollowTC(u.id)
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
                                        props.followTC(u.id)
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
