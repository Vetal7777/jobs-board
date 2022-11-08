import styles from './jobs-board.module.css'
import {useAppSelector} from "../../hooks/redux";
import {useEffect, useState} from "react";
import List from "../list/list";
import ReactPaginate from "react-paginate";
import PaginateStateI from "../../models/paginateState";
import ItemI from "../../models/item";
import ArrayIco from "../array-ico/array-ico";

export default function JobsBoard(){
    const showApp = useAppSelector((state) => !state.error && !state.isLoading);
    const list = useAppSelector(({jobsList}) => jobsList);

    const [state,setState] = useState<PaginateStateI>({
        offset: 0 ,
        perPage: 15,
        currentPage: 0,
    })

    function handlePageClick(selected:number){
        setState({...state, currentPage: selected,});
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        })
    }

    useEffect(()=> {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            {(showApp && list) && (
                <>
                    <div className={styles.container}>
                        <List
                            list={list.filter((item:ItemI,index:number) => (index <= (state.perPage * (state.currentPage + 1)) - 1) && (index >= state.perPage * (state.currentPage)))}
                        />
                        <ReactPaginate
                            previousLabel={<ArrayIco/>}
                            nextLabel={<ArrayIco/>}
                            previousClassName={!state.currentPage ? styles.disable : styles.previous}
                            nextClassName={state.currentPage === (Math.ceil(list.length/state.perPage) - 1)  ? styles.disable : styles.next}
                            breakLabel={"..."}
                            breakClassName={styles.break}
                            pageCount={Math.ceil(list.length/state.perPage)}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={5}
                            onPageChange={({selected}) => handlePageClick(selected)}
                            containerClassName={styles.pagination}
                            pageLinkClassName={styles.link}
                            activeLinkClassName={styles.active}
                        />
                    </div>
                </>
            )}
        </>
    )
}