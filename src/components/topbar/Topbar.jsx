import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">KAPPA-Admin</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <NotificationsIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQGj6BI_3rWvcw/profile-displayphoto-shrink_200_200/0/1623190098921?e=1641427200&v=beta&t=iuyKZ8Q3amfcMGen5gOR48xgFzA0Jam1DUcA0HRp1VI" alt="" className="topbarAbatar" />
                </div>
            </div>
        </div>
    )
}
