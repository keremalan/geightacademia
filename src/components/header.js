import React from 'react'
import '../css/header.css'

import BrandLogo from '../img/brand.png'

const Header = () => (
    <>
    <header>
        <div className="header__brand">
            <img className="header__brand__img" src={BrandLogo}/>
        </div>
        <div className="header__nav">
            <a className="header__nav__a" href="#">Academia Nedir?</a>
            <a className="header__nav__a" href="#">Girişimler</a>
            <div className="dropdown">
                <a className="header__nav__a" href="#">Eğitimler</a>
                <div className="dropdown-content">
                    <a className="" href="#">Yazılım Dersleri</a>
                    <a href="#">Tasarım Dersleri</a>
                    <a href="#">Akademik Eğitimler</a>
                    <a href="#">Meslek Eğitimleri</a>
                    <a href="#">İş Geliştirme Dersleri</a>
                    <a href="#">İlham Köşesi</a>
                </div>
            </div>
            <a className="header__nav__a hna__3" href="#">İletişim</a>
        </div>
        <div className="header__button">
            <a className="header__button__a">Giriş Yap</a>
        </div>
    </header>
    </>
)

export default Header;