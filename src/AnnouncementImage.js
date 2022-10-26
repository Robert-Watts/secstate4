import * as React from "react";
import "./Announcement.scss";

const AnnouncementImage = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} {...props}>
            <div className="background box">
                <div className="left-third">
                </div>
                <div className="right-third">
                    <img src={props.photo} alt={props.name} className={"photo"}/>
                </div>
            </div>
            <div className="foreground box">
                <p className="number number10_font">10</p>
                <div className="namesection section">
                    <p className="therthon announcement-content bold">The RT HON</p>
                    <p className="namemp announcement-content bold"><span className="name">{props.name}</span> MP</p>
                </div>
                <div className="secstatesection section">
                    <p className="appointed announcement-content">Appointed</p>
                    <p className="secstate announcement-content bold">Secretary of State</p>
                    <p className="for announcement-content bold">For <span>{props.department}</span></p>
                </div>
            </div>
        </div>
    )
});


export default AnnouncementImage;
