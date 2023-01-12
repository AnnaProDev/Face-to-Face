import React from "react";
import style from "./Users.module.css";
import userIcon from "../../img/user_icon.png";
import { NavLink } from "react-router-dom";

class User extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <div className={style.wrapper} key={user.id}>
            <div className={style.icon}>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : userIcon}
                  alt="user-img"
                />
              </NavLink>
              {user.followed ? (
                <button
                  className={style.button}
                  disabled={this.props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    this.props.unFollow(user.id);
                  }}
                >
                  Following{" "}
                </button>
              ) : (
                <button
                  className={style.fbutton}
                  disabled={this.props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    this.props.follow(user.id);
                  }}
                >
                  + Follow{" "}
                </button>
              )}
            </div>
            <div className={style.info}>
              <div className={style.status}>
                <div className={style.name}>{user.name}</div>
                <h4>{user.status}</h4>
              </div>
              <div className={style.location}>
                <h4>{"City"},</h4>
                <h4 className={style.country}>{"Country"}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default User;
