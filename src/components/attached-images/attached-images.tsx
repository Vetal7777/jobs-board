import styles from './attached-images.module.css';

export default function AttachedImages({images}:{images:string[]}){
    return (
        <>
            <div className={styles.container}>
                <h2
                    className={styles.title}
                    children={'Attached images'}
                />
                <div className={styles.list}>
                    {images.map((item,index) => (
                        <img
                            alt={'Attached image'}
                            src={item + `?random=${index}`}
                            className={styles.item}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}