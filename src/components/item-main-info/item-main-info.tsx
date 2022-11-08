import styles from './item-main-info.module.css';
import ItemI from "../../models/item";
import LocationIco from "../location-ico/location-ico";
import ItemAdditionInfo from "../item-addition-info/item-addition-info";

export default function ItemMainInfo({item}:{item:ItemI}){
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h4
                        className={styles.title}
                        children={item.title}
                    />
                    <span
                        className={styles.name}
                        children={item.name}
                    />
                    <div className={styles.location}>
                        <LocationIco/>
                        {item.address}
                    </div>
                </div>
                <ItemAdditionInfo item={item}/>
            </div>
        </>
    )
}