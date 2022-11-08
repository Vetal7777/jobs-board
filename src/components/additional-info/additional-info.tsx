import styles from './additional-info.module.css'

export default function AdditionalInfo({employmentType,benefits}:{employmentType:string[],benefits:string[]}){
    return (
        <>
            <div className={styles.container}>
                <h2
                    className={styles.title}
                    children={'Additional info'}
                />
                <div className={styles.content}>
                    <div className={styles.info}>
                        <span
                            children={'Employment type'}
                            className={styles.name}
                        />
                        <div className={styles.list}>
                            {employmentType.map((item,index) => (
                                <span
                                    className={styles.item}
                                    children={item}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.info} ${styles.benefits}`}>
                        <span
                            children={'Benefits'}
                            className={styles.name}
                        />
                        <div className={styles.list}>
                            {benefits.map((item,index) => (
                                <span
                                    className={styles.item}
                                    children={item}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}