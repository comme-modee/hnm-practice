import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    
    const userLogout = () => {
        setAuthenticate(false)
    }
    const search = () => {
        let keyword = inputValue.target.value;
        console.log("search", keyword);
        navigate(`/?q=${keyword}`)
    }
    const enterSearch = (e) => {
        if(e.key === "Enter") {
            search()
        }
    }
  return (
    <div className='nav-container'>
        <div className='login-btn'>
            {authenticate?
            <Link to='/'><FontAwesomeIcon icon={faUser} /><div onClick={userLogout}>logout</div></Link>
            :
            <Link to='/login'><FontAwesomeIcon icon={faUser}/><div>login</div></Link>}
        </div>
        <div className='main-logo'><Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png' alt=''/></Link></div>
        <div className='nav-bottom'>
            <div className='menu'><ul>{menuList.map((menu) => <li>{menu}</li>)}</ul></div>
            <div className='search'>
                <input id='search' type='text' placeholder='키워드를 입력하세요' onKeyDown={(e)=>enterSearch(e)} onChange={setInputValue}/>
                <FontAwesomeIcon icon={faSearch} onClick={search}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar