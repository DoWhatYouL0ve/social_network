import React from 'react'
import { UsersPropsType } from './UsersContainer'
import style from './users.module.css'
import image from './../../images/ava.jpg'

export const Users = (props: UsersPropsType) => {
    if (props.users.users.length === 0) {
        props.setUsers([
            {
                userId: '1',
                photoUrl: image,
                fullName: 'William Ross',
                status: 'Hi there!',
                followed: true,
                location: { city: 'Wroclaw', country: 'Poland' },
            },
            {
                userId: '2',
                photoUrl: image,
                fullName: 'Bob Ross',
                status: 'Hi there!',
                followed: false,
                location: { city: 'Nice City', country: 'Australia' },
            },
            {
                userId: '3',
                photoUrl: image,
                fullName: 'Leo Ross',
                status: 'Hi there!',
                followed: true,
                location: { city: 'San Diego', country: 'United States' },
            },
        ])
    }
    return (
        <div>
            {props.users.users.map((u) => (
                <div key={u.userId}>
                    <span>
                        <div>
                            <img
                                src={u.photoUrl}
                                alt=""
                                className={style.userPhoto}
                            />
                        </div>
                        <div>
                            {u.followed ? (
                                <button
                                    onClick={() => props.unfollow(u.userId)}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button onClick={() => props.follow(u.userId)}>
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}
