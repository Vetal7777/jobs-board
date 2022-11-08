import styles from './location.module.css'
import LocationIco from "../location-ico/location-ico";
import LocationPropsI from "../../models/locationProps";
import GoogleMapReact from 'google-map-react';
import theme from "../../shared/consts/theme"
import Marker from "../marker/marker";

export default function Location({title,location,phone,email,address}:LocationPropsI){
    return (
        <>
            <div className={styles.container}>
                <h6
                    children={'Contacts'}
                    className={styles.title}
                />
                <div className={styles.frame}>
                    <span className={styles.circle}/>
                    <div className={styles.content}>
                        <h5
                            className={styles.name}
                            children={title}
                        />
                        <span className={styles.location}>
                        <LocationIco/>
                            {address}
                    </span>
                        <div className={styles.contacts}>
                        <span
                            children={phone}
                            className={styles.phone}
                        />
                            <span
                                children={email}
                                className={styles.email}
                            />
                        </div>
                    </div>
                    <div className={styles.map}>
                        <GoogleMapReact
                            bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_KEY as string}}
                            defaultCenter={{
                                lat: location.lat,
                                lng: location.long
                            }}
                            options={{
                                rotateControl:false,
                                zoomControl:false,
                                clickableIcons:false,
                                disableDefaultUI: true,
                                styles: theme,
                            }}
                            defaultZoom={1}
                            yesIWantToUseGoogleMapApiInternals
                        >
                            <Marker
                                lat={location.lat}
                                lng={location.long}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </>
    )
}