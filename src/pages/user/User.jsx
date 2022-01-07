import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/7971557/pexels-photo-7971557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityIcon className='userShowIcon'/>
                            <span className="userShoeInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                            <CakeIcon className='userShowIcon'/>
                            <span className="userShoeInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneIphoneIcon className='userShowIcon'/>
                            <span className="userShoeInfoTitle">+1 123 435 45</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutlineIcon className='userShowIcon'/>
                            <span className="userShoeInfoTitle">annabecker99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationCityIcon className='userShowIcon'/>
                            <span className="userShoeInfoTitle">New York, USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItems">
                                <label>Username</label>
                                <input type="text" placeholder='annabeck99' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItems">
                                <label>Full Name</label>
                                <input type="text" placeholder='Anna Becker' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItems">
                                <label>Email</label>
                                <input type="text" placeholder='annabecker99@gmail.com' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItems">
                                <label>Phone Number</label>
                                <input type="text" placeholder='+1 123 435 45' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItems">
                                <label>Address</label>
                                <input type="text" placeholder='New York, USA' className='userUpdateInput'/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.pexels.com/photos/7971557/pexels-photo-7971557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="userUpdateImage" />
                                <label htmlFor="file"><PublishIcon className='userUpdateIcon' /></label>
                                <input type="file" id='file' style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
