import styles from './item.module.css'
import ItemI from "../../models/item";
import {Link} from "react-router-dom";
import ItemMainInfo from "../item-main-info/item-main-info";

export default function Item({item}:{item: ItemI}){
    return (
        <>
            <Link
                to={`:${item.id}`}
                className={styles.container}

            >
                <img
                    className={styles.image}
                    src={item.pictures[0] + `?random=${Math.round(Math.random() * 4)}`}
                    alt={'Title image'}
                />
                <ItemMainInfo item={item}/>
            </Link>
        </>
    )
}