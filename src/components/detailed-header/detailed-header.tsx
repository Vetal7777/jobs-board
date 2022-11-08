import styles from './detailed-header.module.css';
import FlagIco from "../flag-ico/flag-ico";
import ShapeIco from "../shape-ico/shape-ico";

export default function DetailedHeader(){
    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}>Job details</h2>
                <div className={styles.links}>
                    <a
                        href="#"
                        className={styles.save}
                    >
                        <FlagIco/>
                        Save to my list
                    </a>
                    <a
                        href="#"
                        className={styles.share}
                    >
                        <ShapeIco/>
                        Share
                    </a>
                </div>
            </div>
        </>
    )
}