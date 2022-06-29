import c from './ProfileInfo.module.scss'
import userPhoto from '../../../assets/Images/user.png'
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import {useSelector} from "react-redux";

const ProfileInfo = (props) => {
    const status = useSelector(state => state.profilePage.status)
    return (
        <div>
            <div className={c.descriptionBlock}>
                {props.profile.photos.large ? <img className={c.avaPhoto} src={props.profile.photos.large} alt=""/> :
                    <img className={c.avaPhoto} src={userPhoto} alt=""/>}
                <ProfileStatus status={status}/>
            </div>
        </div>
    )
}
export default ProfileInfo;