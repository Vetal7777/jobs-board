import styles from './detailed-benefits.module.css';

export default function DetailedBenefits({benefits}:{benefits:string[]}){
    return (
        <>
            <div className={styles.container}>
                <span
                    className={styles.article}
                    children={'Compensation & Benefits:'}
                />
                    {benefits.map((benefit,index) => (
                        <span
                            children={benefit}
                            key={index}
                            className={styles.benefit}
                        />
                    ))}
            </div>
        </>
    )
}