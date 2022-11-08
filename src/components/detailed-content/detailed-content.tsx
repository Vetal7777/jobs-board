import styles from './detailed-content.module.css'
import AdditionalInfo from "../additional-info/additional-info";
import DetailedHeader from "../detailed-header/detailed-header";
import DetailedDescription from "../detailed-description/detailed-description";
import DetailedContentI from "../../models/detailedContent";
import AttachedImages from "../attached-images/attached-images";

export default function DetailedContent({title,createdAt,description,employmentType,benefits,images,salary}:DetailedContentI){
    return (
        <>
            <div className={styles.container}>
                <DetailedHeader/>
                <button
                    className={styles.apply}
                    children={'Apply now'}
                />
                <DetailedDescription
                    salary={salary}
                    description={description}
                    createdAt={createdAt}
                    title={title}
                />
                <button
                    className={styles.apply}
                    children={'Apply now'}
                />
                <AdditionalInfo
                    employmentType={employmentType}
                    benefits={benefits}
                />
                <AttachedImages
                    images={images}
                />
            </div>
        </>
    )
}