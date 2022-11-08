import styles from './list.module.css'
import Item from "../item/item";
import ItemI from "../../models/item";

export default function List({list}:{list:ItemI[]}){
    return (
        <>
            <div className={styles.container}>
                {list.map((item,index) => (
                    <Item item={item} key={index}/>
                ))}
            </div>
        </>
    )
}