import { ForwardedRef, forwardRef } from "react";
import "./scss/Announcement.css";
import { imageStyle, titleRole } from "./types";

interface AnnouncementImageProps {
    id: string;
    name: string;
    department: string;
    photo?: string;
    styleMode: imageStyle;
    role: titleRole;
}


const AnnouncementImage = forwardRef((props: AnnouncementImageProps, ref: ForwardedRef<HTMLDivElement>) => {
    return(
        <div {...props} ref={ref} className={props.styleMode}>
            <div className={`background box announcementContainer ${props.styleMode}`}>
                <div className="left-third" />
                <div className="right-third">
                    <img src={props.photo} alt={props.name} className={"photo"}/>
                </div>
            </div>
            <div className='foreground box announcementContainer'>
                <p className="number number10_font">10</p>
                <div className="namesection section">
                    <p className="therthon announcement-content bold">The RT HON</p>
                    <p className={`namemp announcement-content bold ${props.styleMode}`}><span className="name">{props.name}</span> MP</p>
                </div>
                <div className="secstatesection section">
                    <p className="appointed announcement-content">Appointed</p>
                    <p className={`secstate announcement-content bold ${props.styleMode}`}>{props.role}</p>
                    <p className={`for announcement-content bold ${props.styleMode}`}>{props.role=='Secretary of State' && 'For'} <span>{props.department}</span></p>
                </div>
            </div>
        </div>
    )
});


export default AnnouncementImage;
