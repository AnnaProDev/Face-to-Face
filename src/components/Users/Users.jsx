import React from "react"
import style from "./Users.module.css"
import userIcon from "../../img/user_icon.png"
import { NavLink } from "react-router-dom";
import axios from "axios";


class Users extends React.Component{

	render() {
		const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		const pages = [];
		for (let i=1; i <= pagesCount; i++ ) {
			pages.push(i);
		}

		return (
      <div className={style.users}>
        <div className={style.pages}>
          {pages.map((page) => {
            return (<span className={this.props.setUsersPage === page ? style.activePage : page}
                onClick={(e) => {this.props.onPageChanged(page)}}>{page}</span>)})}
        </div>
        {this.props.users.map((user) => (
          <div className={style.wrapper} key={user.id}>
            <div className={style.icon}>
              <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userIcon} alt="user-img"/>
              </NavLink>
              {user.followed 
				  	? <button className={style.button} onClick={() => {
						axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
							withCredentials: true
						})
							.then(response => {
								if (response.data.resultCode === 0) {
									this.props.unFollow(user.id);;
								}
							});
						}}>
                  Following </button>
					: <button className={style.fbutton} onClick={() => {
						axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
							withCredentials: true
						})
							.then(response => {
								if (response.data.resultCode === 0) {
									this.props.follow(user.id);
								}
							});
						}}>
                  + Follow </button>}
            </div>
            <div className={style.info}>
              <div className={style.status}>
                <div className={style.name}>{user.name}</div>
                <h4>{user.status}</h4>
              </div>
              <div className={style.location}>
                <h4>{"Washington"},</h4>
                <h4 className={style.country}>{"USA"}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
	}
} 

export default Users;