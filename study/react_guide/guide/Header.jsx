import React from 'react';
import { Link } from 'react-router-dom';

const gnbList = [
    '시작', '문법','라우터'
];

const Header = () => {
    return (
        <>
            <header>
                <h1>
                    <Link to="/">
                        <img className='logoImg' src="images/logo.svg" alt="로고" />
                        <span>REACT</span>
                    </Link>
                </h1>
                <ul>
                    {/* {this.gnbList.map((v) => {
                        return (
                            <li key={v}>{v}</li>
                        );
                    })} */}
                    <Link to="/Content1">문법</Link>
                    <Link to="/Content2">라우터</Link>
                </ul>
            </header>
        </>
    )  
}

export default Header;