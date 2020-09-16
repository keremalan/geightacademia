import React from 'react'
import '../css/homepage.css'

import NewsImage1 from '../img/ai.png'
import NewsImage2 from '../img/ka.png'
import GeightLogo from '../img/geightlogo.png'
import ContactImage from '../img/sectioncontact.png'
import EgitimImage from '../img/egitim1.png'
import InternationlImage from '../img/international1.png'
import IsImage from '../img/is1.png'
import MelekImage from '../img/melek1.png'
import SurprizImage from '../img/surpriz1.png'
import UniversiteImage from '../img/universite1.png'
import UrunImage from '../img/urun1.png'
import UzmanImage from '../img/uzman1.png'


const Homepage = () => (
    <main>
        <section className="section__main">
            <h1 className="sm__h1">Geleceğe doğru, birlikte koşalım!</h1>
            <h4 className="sm__h4">Academia'da her yol geleceğe çıkıyor!</h4>
            <div className="sm__input--search">
                <span className="smi__span smi__span--uppercase smi__span--0">Hepsi</span>
                <span className="smi__span smi__span--uppercase">Yazılım</span>
                <span className="smi__span smi__span--uppercase">Tasarım</span>
                <span className="smi__span smi__span--uppercase">İş Geliştirme</span>
                <span className="smi__span smi__span--uppercase">Üniversite Hazırlık</span>
                <span className="smi__span smi__span--uppercase smi__span--5">Meslek Eğitimi</span>
                <input className="smi__input" type="name" placeholder="Almak istediğiniz eğitimi seçin.." />
            </div>
        </section>
        <section className="section__about">
            <h2 className="sa__h2 sa__h2--uppercase">Academia<span className="sa__h2--thin">Nedir?</span></h2>
            <p className="sa__p">
            Register a domain name and create your online identity. Use our advanced domain name generator to get your ideal choice right away. Already have a domain registered somewhere else? No problem — domain transfers are free and easy.
            </p>
        </section>
        <section className="section__whatis">
            <h2 className="sa__h2 sa__h2--uppercase sa__h2--nelersaglar">Academia<span className="sa__h2--thin">Neler Sağlar?</span></h2>
            <div className="sa__grid">
                <div className="left__box">
                    <div className="lb__item lb__item--0 bg--0">
                        Ürün ve İş Geliştirme
                    </div>
                    <div className="lb__item lb__item--1 bg--1">
                        Uzman ve Mentör Desteği
                    </div>
                    <div className="lb__item lb__item--2 bg--2">
                        Melek Yatırımcı Bağlantıları
                    </div>
                </div>
                <div className="mid__box">
                    <div className="mb__item bg--3">
                        Eğitimler
                    </div>
                </div>
                <div className="right__box">
                    <div className="rb__item rb__item--0 bg--4">
                        Yurt Dışı Bağlantıları
                    </div>
                    <div className="rb__item rb__item--1 bg--5">
                        Sürpriz Ödüller
                    </div>
                    <div className="rb__item rb__item--2 bg--6">
                        İş Bağlantıları
                    </div>
                    <div className="rb__item rb__item--3 bg--7">
                        Üniversite Bağlantıları
                    </div>
                </div>
            </div>
        </section>
        <section className="section__whatis--mobile">
            <h2 className="sa__h2 sa__h2--uppercase sa__h2--nelersaglar">Academia<span className="sa__h2--thin">Neler Sağlar?</span></h2>
            <div className="wh--m__flex">
                <div className="wh--m__flex__item bg--0">
                    Ürün ve İş Geliştirme
                </div>
                <div className="wh--m__flex__item bg--1">
                    Uzman ve Mentör Desteği
                </div>
                <div className="wh--m__flex__item bg--2">
                    Melek Yatırımcı Bağlantıları
                </div>
                <div className="wh--m__flex__item bg--3">
                    Eğitimler
                </div>
                <div className="wh--m__flex__item bg--4">
                    Yurt Dışı Bağlantıları
                </div>
                <div className="wh--m__flex__item bg--5">
                    Sürpriz Ödüller
                </div>
                <div className="wh--m__flex__item bg--6">
                    İş  Bağlantıları
                </div>
                <div className="wh--m__flex__item bg--7">
                    Üniversite Bağlantıları
                </div>
            </div>
        </section>
        <section className="section__featured">
            <h2 className="sa__h2 sa__h2--uppercase sa__h2--nelersaglar">Öne Çıkanlara<span className="sa__h2--thin">Göz At ></span></h2>
            <div className="sf__flex">
                <div  className="sf__flex__item">
                    <img className="sf__flex__item__img" src={NewsImage1}/>
                    <div className="sf__flex__item__explain">
                        <span className="sf__flex__item__explain__span sf__flex__item__explain__span--uppercase">
                            Yazılım
                        </span>
                        <h2 className="sf__flex__item__explain__h2">Yapay Zekaya Giriş Eğitim Seti Yayınlandı</h2>
                        <span className="sf__flex__item__explain__date sf__flex__item__explain__date--uppercase">23, Eylül 2020</span>
                    </div>
                </div>
                <div  className="sf__flex__item sfi--1">
                    <img className="sf__flex__item__img" src={NewsImage2}/>
                    <div className="sf__flex__item__explain">
                        <span className="sf__flex__item__explain__span sf__flex__item__explain__span--uppercase">
                            Yazılım
                        </span>
                        <h2 className="sf__flex__item__explain__h2">Yapay Zekaya Giriş Eğitim Seti Yayınlandı</h2>
                        <span className="sf__flex__item__explain__date sf__flex__item__explain__date--uppercase">23, Eylül 2020</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="section__sponsored">
            <h2 className="sa__h2 sa__h2--uppercase sa__h2--nelersaglar">Sponsorlarımız<span className="sa__h2--thin"></span></h2>
            <img className="ss__img" src={GeightLogo}/>
        </section>
        <section className="section__contact">
            <div className="sc__left">
                <h2 className="sc__left__h2">Mesaj Gönder</h2>
                <a className="sc__left__a" href="mailto:mail@harmoniadynamics.com">mail@harmoniadynamics.com</a>
            </div>
            <div className="sc__mid">
                <p className="sc__mid__p">
                Türkiye’de şunu şunu yapan şu şu şu kişiler şu şu şekilde şu şu şu işte böhyle bu yazı yaz yaz bitmez benim uyku gelir ama işler beklemez ne yapacaksın kardeşlik çalış çalış karıya bak bebek büyüt iş geliştir ailene bak ev kur yatırım yap hayat böyle işte sen bize ulaş yeter ki.
                </p>
                <span className="sc__mid__span--phone">
                    <span className="sc__mid__span--phone--bold">Telefon:</span> +90 (264) 743 22 22
                </span>
            </div>
            <div className="sc__right">
                <img className="sc__right__img" src={ContactImage} />
            </div>
        </section>

    </main>
)

export default Homepage