import c from './ProfileInfo.module.css'
import userPhoto from '../../../assets/Images/user.png'
import ProfileStatus from "../ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={c.descriptionBlock}>
                {props.profile.photos.large ? <img className={c.avaPhoto} src={props.profile.photos.large} alt=""/> :
                    <img className={c.avaPhoto} src={userPhoto} alt=""/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {/*<div>{props.profile.aboutMe}</div>*/}
            </div>
        </div>
    )
}
export default ProfileInfo;