import React from 'react';
import { Link } from 'react-router-dom';

const gnbList = [
    { gnb: '설치', router: 'Install'},
    { gnb: '시작', router: 'Start'},
    { gnb: '문법', router: 'Grammar'},
    { gnb: '라우터', router: 'Routerr'}
];

const Header = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <h1>
                        <img className='logoImg' src="images/logo.svg" alt="로고" />
                        <span>REACT</span>
                    </h1>
                </Link>  
                <ul>
                    {gnbList.map((v) => {
                        return (
                            <li key={v.gnb}><Link to={v.router}>{v.gnb}</Link></li>
                        );
                    })}
                </ul>
            </header>
        </>
    )  
}

export default Header;