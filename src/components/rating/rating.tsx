import styles from './rating.module.css';
import StarIco from "../star-ico/star-ico";

export default function Rating(){
    return (
        <>
            <div
                className={styles.container}
                children={
                    new Array(5)
                        .fill(0)
                        .map((item,index) => (
                            <StarIco
                                key={index}
                            />
                        ))
                }
            />
        </>
    )
}