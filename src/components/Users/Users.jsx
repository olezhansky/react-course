import React from 'react'
import userPhoto from '../../assets/images/user.png'
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return ( 
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage} onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={styles.usersPhoto} src={user.photos.small !== null ? user.photos.small : userPhoto} alt={user.name}/>
                            </NavLink>
                            </div>
                            <div>           
                                {
                                    user.followed ? 
                                    <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, user.id)
                                        props.unfollow(user.id)
                                       
                                    }}>Unfollow</button> : 
                                    <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, user.id)
                                        props.follow(user.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </span>   
                        <span>
                            <span>
                                <div>{user.name}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>  
                    </div>
                )
            })}
        </div> 
        )
}

export default Users