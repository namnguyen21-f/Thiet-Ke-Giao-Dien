import {Fragment,useState} from 'react';
import './NavigationBar.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

//isVertical navigationbar direction is vertical
// data for navBar
//title
//navItem //data : {title,path, sub: nav nested in navItem}
//sub {title,path}

export default function NavigationBar({navData}){
    const [isMenuClick , setIsMenuClick] = useState(false);
    return(
        <div className="navBar">
            <div className="row">
                <div className="row">
                    <div className="logo">
                        <span>SHAI</span>
                    </div>
                    <div className="navContainer">
                        <ul className="d-flex">
                            {navData.map((item,index) => {
                                return (
                                    <li><Link to={item.path}>{item.title}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="d-flex searchBar">
                        <input type="text" placeholder="Hashtag hoặc danh hài..."></input>
                        <SearchIcon></SearchIcon>
                    </div>
                </div>
                <div className="row">
                    <a id="postBtn">Tải lên</a>
                    <Link id="loginBtn" to="/login">Đăng nhập</Link>
                    <div className="menu" onClick={() => {setIsMenuClick(!isMenuClick)}}>
                        <MenuIcon></MenuIcon>
                    </div>     
                </div>
            </div>
            {isMenuClick && <div className="mobileNav">
                <div className="navContainer">
                    <ul className="d-flex">
                        <li><Link to="/login">Đăng nhập</Link></li>
                        {navData.map((item,index) => {
                            return (
                                <li><Link to={item.path}>{item.title}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>}
        </div>
    )
}
