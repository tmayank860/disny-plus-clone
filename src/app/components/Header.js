import React from "react";
import styled from "styled-components";
import LogoImg from '../../assets/images/logo.svg'
import HomeIcon from '../../assets/images/home-icon.svg'
import SearchIcon from '../../assets/images/search-icon.svg';
import WatchListIcon from '../../assets/images/watchlist-icon.svg';
import MovieIcon from '../../assets/images/movie-icon.svg';
import OriginalIcon from '../../assets/images/original-icon.svg';
import SeriesIcon from '../../assets/images/series-icon.svg';

const Header = () => {
  return (
  <Nav>
    <Logo src={LogoImg}/>
    <NavMenu>
        <a>
            <img src={HomeIcon} alt="home"/>
            <span>HOME</span>
        </a>
        <a>
            <img src={SearchIcon} alt="home"/>
            <span>SEARCH</span>
        </a>
        <a>
            <img src={WatchListIcon} alt="home"/>
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src={OriginalIcon} alt="home"/>
            <span>ORIGINALS</span>
        </a>
        <a>
            <img src={MovieIcon} alt="home"/>
            <span>MOVIE</span>
        </a>
        <a>
            <img src={SeriesIcon} alt="home"/>
            <span>SERIES</span>
        </a>  
    </NavMenu>

    <UserImage src="https://yt3.ggpht.com/QQn51_oMK3KPZTgASfLFYRlYvww4kSpHA5MbwF-ERDS-Fk2KhNtEQyrMDQlpL80TCPb07J8rGiY=s900-c-k-c0x00ffffff-no-rj" />
  </Nav>);
};

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display:flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
    width:80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display:flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content:"";
                height:2px;
                background: white;
                position: absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin: left center;
                trainsition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
   
`
const UserImage= styled.img`
    width:48px;
    height:48px;
    border-radius: 50%;
    cursor: pointer;
`

export default Header;
