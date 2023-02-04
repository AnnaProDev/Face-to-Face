import React from "react"
import style from "./Paginator.module.css"
import { useState } from "react";

type PropsType = {
	totalItemsCount: number, 
	pageSize: number, 
	currentPage: number, 
	onPageChanged: (pageNumber: number) => void, 
	portionSize?:number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

		const pagesCount = Math.ceil(totalItemsCount / pageSize);

		const pages: Array <number> = [];
		for (let i=1; i <= pagesCount; i++ ) {
			pages.push(i);
		}

		const portionCount = Math.ceil(pagesCount / portionSize);
		const [portionNumber, setPortionNumber] = useState(1);
		const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
		const rightPortionPageNumber = portionNumber * portionSize;

		return <div className={style.pages}>
			{portionNumber > 1 && <button className={style.nav} onClick={() => {setPortionNumber(portionNumber-1)}}>
			<span className="material-symbols-outlined">arrow_back_ios</span></button>}
          {pages
			 .filter(page => page >= leftPortionPageNumber &&  page <= rightPortionPageNumber)
			 .map((page) => {
            return (<span className={currentPage === page ? style.active_page : pages}
				key={page} onClick={(e) => {onPageChanged(page)}}>{page}</span>)})}
				{portionCount > portionNumber && 
				<button className={style.nav} onClick={() => { setPortionNumber(portionNumber + 1) }}>
				<span className="material-symbols-outlined">arrow_forward_ios</span></button>}
        </div>
} 

export default Paginator;