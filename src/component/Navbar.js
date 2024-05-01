import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

  const navigate = useNavigate();
  
  const goToLogin = () => {
    navigate("/login");
  }

  const goToLogout = () => {
    navigate("/");
    setAuthenticate(false);
  }

  const search = (event) => {
    if (event.key === "Enter") {
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
        <div>
            <div className="login-button" onClick={!authenticate ? goToLogin : goToLogout}>
                <FontAwesomeIcon icon={faUser} />
                <div>{!authenticate ? "로그인" : "로그아웃"}</div>
            </div>
        </div>
        <div className="nav-section">
            <Link to="/">
                <img width={100} src="https://th.bing.com/th?id=OIP.VbSGrjHEDPN1F4YZiGM7yAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="H&M" />
            </Link>
        </div>
                <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu, index)=>{
                    return (
                        <li key="index">{menu}</li>
                    )
                })}
            </ul>
            <div>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={(event)=>search(event)}></input>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
