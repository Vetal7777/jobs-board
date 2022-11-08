import styles from './job-detailed.module.css'
import Location from "../location/location";
import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import ItemI from "../../models/item";
import DetailedContent from "../detailed-content/detailed-content";
import ArrayReturnIco from "../array-return-ico/array-return-ico";
import {useEffect} from "react";

export default function JobDetailed(){
    const params = useParams();
    const item:ItemI | undefined = useAppSelector(({jobsList}) => jobsList.find((item:ItemI) => item.id === params.id?.replace(':','')));
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <>
            {!!item && (
                <div className={styles.container}>
                    <DetailedContent
                        salary={item.salary}
                        images={item.pictures}
                        title={item.title}
                        createdAt={item.createdAt}
                        description={item.description}
                        employmentType={item.employment_type}
                        benefits={item.benefits}
                    />
                    <Location
                        address={item.address}
                        title={item.name}
                        location={item.location}
                        phone={item.phone}
                        email={item.email}
                    />
                    <Link
                        to="/"
                        className={styles.return}
                    >
                        <ArrayReturnIco/>
                        RETURN TO JOB BOARD
                    </Link>
                </div>
            )}
        </>
    )
}