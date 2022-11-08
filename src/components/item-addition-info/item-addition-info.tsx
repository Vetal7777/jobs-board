import styles from './item-addition-info.module.css'
import ItemI from "../../models/item";
import Rating from "../rating/rating";
import FlagIco from "../flag-ico/flag-ico";
import Posted from "../posted/posted";

export default function ItemAdditionInfo({item}:{item:ItemI}){
    return (
        <>
            <div className={styles.container}>
                {
                    !!(+item.id
                        .split('')
                        .filter(item => !isNaN(+item))
                        .join('') % 2)
                    &&
                    (<Rating/>)
                }
                <div className={styles.info}>
                    <button
                        className={styles.save}
                        children={<FlagIco/>}
                    />
                    <Posted date={item.createdAt}/>
                </div>
            </div>
        </>
    )
}