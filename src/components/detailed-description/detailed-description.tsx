import styles from './detailed-description.module.css';
import {useEffect, useState} from "react";
import Posted from "../posted/posted";
import DetailedBenefits from "../detailed-benefits/detailed-benefits";

export default function DetailedDescription({description,createdAt,title,salary}:{description:string,createdAt:string,title:string,salary:string}){
    const [mainText,setMainText] = useState('')
    const [resp,setResp] = useState('');
    const [benefits,setBenefits] = useState<string[]>([])
    const [state,setState] = useState(description.split(' ').filter(item => item !== '').join(' '))
    useEffect(() => {
        if(!mainText){
            setMainText(filterText('Responsopilities:'));
        }
        if(!resp && !!mainText && !state.includes(mainText)){
            setResp(filterText('Benefits:').replace('Compensation &','').replace('Responsopilities:',''))
        }
        if(state.includes(mainText)){
            setState(state.replace(mainText,''))
        }
        if(!!resp && !!mainText && !benefits.length){
            setBenefits(filterText(undefined,'Benefits:').replaceAll('\n','').split('.').filter(item => item !== ''))
        }
    },[mainText,state,resp])

    function filterText(lastVerb:string | undefined = undefined,firstVerb:string | undefined = undefined):string{
        let data:string | string[] = state.split(' ');
        let i = NaN;
        if (lastVerb !== undefined){
            data = data
                .map((verb, index) => {
                    if (verb.includes(lastVerb)) {
                        i = index;
                    }
                    return index >= i ? '' : verb;
                })
                .filter(item => item !== '')
            i = NaN;
        }
        if(firstVerb !== undefined){
            data = data
                .map((verb, index) => {
                    if(verb.includes(firstVerb)){
                        i = index + 1;
                    }
                    return index >= i ? verb : '';
                })
                .filter(item => item !== '')
        }
        return data.join(' ');
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h6 children={title}/>
                    <span className={styles.salary}>
                        {'€ '+salary.replaceAll('k',' 000')}
                        <span
                            children={'Brutto, per year'}
                            className={styles.info}
                        />
                    </span>
                    <Posted date={createdAt}/>
                </div>
                <div className={styles.description}>
                    <p
                        className={styles.main}
                        children={mainText}
                    />
                    <div className={styles.resp}>
                            <span
                                className={styles.article}
                                children={'Responsopilities'}
                            />
                        <p
                            className={styles.main}
                            children={resp}
                        />
                    </div>
                    <DetailedBenefits benefits={benefits}/>
                </div>
            </div>
        </>
    )
}