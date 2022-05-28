import React from 'react'
import { UsersPropsType } from './UsersContainer'
import style from './users.module.css'
import image from './../../images/ava.jpg'
import axios from 'axios'

export class Users extends React.Component<UsersPropsType, any> {
    constructor(props: UsersPropsType) {
        super(props)
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    getUsers = () => {
        if (this.props.users.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    this.props.setUsers(response.data.items)
                })
        }
    }
    render() {
        return (
            <div>
                {this.props.users.users.map((u) => (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img
                                    src={
                                        u.photos.small !== null
                                            ? u.photos.small
                                            : image
                                    }
                                    alt=""
                                    className={style.userPhoto}
                                />
                            </div>
                            <div>
                                {u.followed ? (
                                    <button
                                        onClick={() =>
                                            this.props.unfollow(u.id)
                                        }
                                    >
                                        Unfollow
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => this.props.follow(u.id)}
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
}
