import React from "react"
import style from "./Paginator.module.css"

class Paginator extends React.Component{

	render() {
		const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		const pages = [];
		for (let i=1; i <= pagesCount; i++ ) {
			pages.push(i);
		}

		return <div className={style.pages}>
          {pages.map((page) => {
            return (<span className={this.props.currentPage === page ? style.active_page : pages}
            onClick={(e) => {this.props.onPageChanged(page)}}>	{page} </span>)})}
        </div>
	}
} 

export default Paginator;