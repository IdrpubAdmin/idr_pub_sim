import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navList = useSelector((state) => state.nav.navList)

  return (
    <div className="header-wrap">
      <header className='main-header'>
        <h1 className='logo'>
            <Link to="/">
              <svg width="202" height="22" viewBox="0 0 202 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.137 1.094 11.25 15.53l5.086-14.437h5.387V21h-4.116v-5.441l.41-9.393L12.646 21H9.828L4.468 6.18l.41 9.379V21h-4.1V1.094h5.359zm35.52 10.404c0 1.96-.347 3.678-1.04 5.154-.692 1.477-1.686 2.616-2.98 3.418-1.285.802-2.762 1.203-4.43 1.203-1.65 0-3.122-.396-4.416-1.189-1.294-.793-2.297-1.923-3.008-3.39-.71-1.477-1.07-3.172-1.08-5.087v-.984c0-1.96.351-3.682 1.053-5.168.71-1.495 1.709-2.639 2.994-3.432C30.044 1.221 31.52.82 33.18.82c1.659 0 3.13.401 4.416 1.203 1.294.793 2.292 1.937 2.994 3.432.71 1.486 1.066 3.204 1.066 5.154v.889zm-4.157-.902c0-2.088-.374-3.673-1.121-4.758s-1.814-1.627-3.2-1.627c-1.376 0-2.438.538-3.185 1.613-.747 1.067-1.125 2.634-1.135 4.703v.971c0 2.033.374 3.61 1.121 4.73.748 1.122 1.823 1.682 3.227 1.682 1.376 0 2.434-.538 3.172-1.613.738-1.085 1.112-2.662 1.121-4.73v-.971zm23.488.902c0 1.96-.346 3.678-1.039 5.154-.692 1.477-1.686 2.616-2.98 3.418-1.285.802-2.762 1.203-4.43 1.203-1.65 0-3.122-.396-4.416-1.189-1.294-.793-2.297-1.923-3.008-3.39-.71-1.477-1.07-3.172-1.08-5.087v-.984c0-1.96.351-3.682 1.053-5.168.71-1.495 1.709-2.639 2.994-3.432 1.294-.802 2.77-1.203 4.43-1.203 1.659 0 3.13.401 4.416 1.203 1.294.793 2.292 1.937 2.994 3.432.71 1.486 1.066 3.204 1.066 5.154v.889zm-4.156-.902c0-2.088-.374-3.673-1.121-4.758s-1.814-1.627-3.2-1.627c-1.376 0-2.437.538-3.185 1.613-.747 1.067-1.126 2.634-1.135 4.703v.971c0 2.033.374 3.61 1.121 4.73.748 1.122 1.823 1.682 3.227 1.682 1.376 0 2.434-.538 3.172-1.613.738-1.085 1.112-2.662 1.121-4.73v-.971zM63.969 21V1.094h6.125c1.75 0 3.313.396 4.69 1.19 1.385.783 2.465 1.904 3.24 3.362.774 1.45 1.162 3.1 1.162 4.95v.916c0 1.85-.383 3.495-1.149 4.935-.756 1.44-1.827 2.557-3.213 3.35-1.385.793-2.948 1.194-4.69 1.203H63.97zM68.07 4.416v13.29h1.983c1.604 0 2.83-.525 3.678-1.573.847-1.048 1.28-2.548 1.298-4.498v-1.053c0-2.023-.419-3.555-1.257-4.594-.84-1.048-2.065-1.572-3.678-1.572H68.07zm20.371 5.646 4.143-8.968h4.484L90.533 13.78V21h-4.17v-7.219L79.828 1.094h4.498l4.115 8.969zm27.741 5.715c0-.774-.274-1.367-.821-1.777-.547-.42-1.531-.857-2.953-1.313-1.422-.464-2.547-.92-3.377-1.367-2.26-1.221-3.39-2.866-3.39-4.935 0-1.076.3-2.033.902-2.871.611-.848 1.481-1.509 2.611-1.983 1.14-.474 2.416-.71 3.828-.71 1.422 0 2.689.26 3.801.779 1.112.51 1.974 1.235 2.584 2.173.62.94.93 2.006.93 3.2h-4.102c0-.912-.287-1.618-.861-2.12-.574-.51-1.381-.765-2.42-.765-1.003 0-1.782.214-2.338.642-.556.42-.834.976-.834 1.668 0 .648.324 1.19.971 1.627.656.438 1.618.848 2.885 1.23 2.333.703 4.033 1.573 5.099 2.612 1.067 1.04 1.6 2.333 1.6 3.883 0 1.723-.652 3.076-1.955 4.06-1.304.976-3.058 1.463-5.264 1.463-1.531 0-2.926-.278-4.183-.834-1.258-.565-2.22-1.335-2.885-2.31-.656-.975-.985-2.106-.985-3.39h4.116c0 2.196 1.312 3.294 3.937 3.294.975 0 1.736-.196 2.283-.588.547-.4.821-.957.821-1.668zM138.07 4.416h-6.097V21h-4.102V4.416h-6.016V1.094h16.215v3.322zm17.418-3.322v13.111c0 2.179-.683 3.901-2.05 5.168-1.359 1.267-3.218 1.9-5.579 1.9-2.324 0-4.17-.615-5.537-1.845s-2.064-2.922-2.092-5.073V1.095h4.102v13.138c0 1.304.31 2.256.93 2.858.629.592 1.495.889 2.597.889 2.306 0 3.478-1.213 3.514-3.637V1.094h4.115zM158.852 21V1.094h6.125c1.75 0 3.313.396 4.689 1.19 1.385.783 2.466 1.904 3.24 3.362.775 1.45 1.162 3.1 1.162 4.95v.916c0 1.85-.382 3.495-1.148 4.935-.757 1.44-1.828 2.557-3.213 3.35-1.385.793-2.949 1.194-4.689 1.203h-6.166zm4.101-16.584v13.29h1.983c1.604 0 2.83-.525 3.677-1.573.848-1.048 1.281-2.548 1.299-4.498v-1.053c0-2.023-.419-3.555-1.258-4.594-.838-1.048-2.064-1.572-3.677-1.572h-2.024zM181.424 21h-4.102V1.094h4.102V21zm20.166-9.502c0 1.96-.347 3.678-1.039 5.154-.693 1.477-1.686 2.616-2.981 3.418-1.285.802-2.761 1.203-4.429 1.203-1.65 0-3.122-.396-4.416-1.189-1.295-.793-2.297-1.923-3.008-3.39-.711-1.477-1.071-3.172-1.08-5.087v-.984c0-1.96.351-3.682 1.052-5.168.711-1.495 1.709-2.639 2.995-3.432 1.294-.802 2.77-1.203 4.429-1.203 1.659 0 3.131.401 4.416 1.203 1.295.793 2.293 1.937 2.994 3.432.711 1.486 1.067 3.204 1.067 5.154v.889zm-4.156-.902c0-2.088-.374-3.673-1.122-4.758-.747-1.085-1.813-1.627-3.199-1.627-1.376 0-2.438.538-3.185 1.613-.748 1.067-1.126 2.634-1.135 4.703v.971c0 2.033.374 3.61 1.121 4.73.747 1.122 1.823 1.682 3.227 1.682 1.376 0 2.433-.538 3.171-1.613.739-1.085 1.112-2.662 1.122-4.73v-.971z" fill="#323334"/>
              </svg>
            </Link>
        </h1>
        <ul className='header-icon-list'>
        {['search','user','bag','like'].map((v)=>{
          return (
          <li className={`icon-item ${v}-icon`} key={v}>
            <img src={require(`../assets/images/${v}.png`)} alt="아이콘" />
          </li>
          )
        })}
        </ul>
      </header>
      <nav className='main-nav'>
        <ul className='nav-list'>
          {navList.map((v, i)=>{
            return (
              <li className='nav-item' key={v.id}>
                <h2 className='txt-p-b'><Link to={v.path}>{v.name}</Link></h2>
              </li>
            )
          })}
        </ul>
      </nav>
    </div> 
  );
}

export default Header;