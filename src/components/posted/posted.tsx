import styles from './posted.module.css';
import {useEffect, useState} from "react";

export default function Posted({date}:{date:string}){
    const [diffInDays,setDiffInDays] = useState('')
    useEffect(() =>{
        const x = new Date();
        const y = new Date(date);
        const diff = Math.abs(x.getTime() - y.getTime());
        const days = Math.ceil(diff / (1000 * 3600 * 24));
        let data;
        switch (true){
            case days >=366:
                data = `${Math.round(days/366)} years`
                break;
            case days >=30:
                data = `${Math.round(days/30)} months`
            break;
        }
        setDiffInDays(`Posted ${data} ago`)
    })
    return (
        <>
            <span
                className={styles.container}
                children={`${diffInDays}`}
            />
        </>
    )
}