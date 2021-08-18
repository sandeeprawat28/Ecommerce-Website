import React from "react"; 
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/GW/Event_hero_Teaser_PC_1500X600_eng._CB664069228_.jpg" alt=""/> 
           <div className="home__row">
           <Product
            id="689972"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Middle Class Do Not!."
            price={11.52}
            rating={5}
            image ="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SY344_BO1,204,203,200_.jpg" alt=""
            />
            <Product
            id="129972"
            title="The Midnight Library: The No.1 Sunday Times bestseller and worldwide phenomenon."
            price={11.52}
            rating={5}
            image ="https://m.media-amazon.com/images/I/41RVW4vaHdL._SY346_.jpg" alt=""
            />
            <Product
            id="865972"
            title="The Book Thief: The life-affirming number one international bestseller."
            price={13.02}
            rating={5}
            image ="https://m.media-amazon.com/images/I/51NaEUWDJEL._SY346_.jpg" alt=""
            />
           </div>  
           <div className="home__row">
           <Product
            id="68552"
            title="Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX Nikkor 18-55mm f/3.5-5.6G VR & AF-P DX Nikkor 70-300mm f/4.5-6.3G ED (Black)Sensor: APS-C CMOS Sensor with 24.2 MP."
            price={68.72}
            rating={5}
            image ="https://m.media-amazon.com/images/I/61A4tg5IFhL._SL1000_.jpg" alt=""
            />
           <Product
            id="68552"
            title="SYGA 1 Piece Orange Coloured DSLR Camera Shoulder Strap Good design - Alled camera neck shoulder belt strap has an comfortable elastic section around the neck to reduce neck tension."
            price={48.32}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/I/41GnhNo8OOL._SX300_SY300_QL70_FMwebp_.jpg" alt=""
            />
           </div>
           <div className="home__row">
           <Product
            id="68552"
            title="B M C Smart Watch Bluetooth Smartwatch Android Smartwatch with Camera/SIM Card Slot."
            price={58.32}
            rating={5}
            image ="https://m.media-amazon.com/images/I/61U7aWUoIvL._SL1001_.jpg" alt=""
            />
            <Product
            id="630552"
            title="Bluetooth DZ09 Golden Smart Watch with Touchscreen, Multifunctional TF & SIM Card Support Camera."
            price={24.52}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/I/41jUl0bbK6L._SX300_SY300_QL70_FMwebp_.jpg" alt=""
            />
            <Product
            id="674152"
            title="HONOR Magic Watch 2 (Charcoal Black) 14-Days Battery, BT Calling & Music Playback, AMOLED Touch Screen."
            price={29.49}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/I/51aejDeyXuL._SX300_SY300_QL70_FMwebp_.jpg" alt=""
            />
           </div>     
           <div className="home__row">
           <Product
            id="689972"
            title="Zebronics Zeb-Thunder Wireless BT Headphone Comes with 40mm Drivers, AUX Connectivity, Built in FM, Call Function, 9Hrs* Playback time and Supports Micro SD Card (Red)."
            price={11.52}
            rating={5}
            image ="https://m.media-amazon.com/images/I/81cJ1kUT1LL._SY450_.jpg" alt=""
            />
            <Product
            id="865972"
            title="pTron Studio Lite Stereo Sound Wired Headphones, Ergonomic Over-Ear Headset for Work from Home, Adjustable Mic & Integrated Volume Control, 3.5mm Aux Jack & 1.3 Meter Tangle-Free Cord."
            price={13.02}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/I/418vULMAb-L._SX300_SY300_QL70_FMwebp_.jpg" alt=""
            />
           </div>
           <div className="home__row">
           <Product
            id="688572"
            title="HP Pavilion Gaming 15.6-inch FHD Gaming Laptop (Ryzen 5-4600H/8GB/1TB HDD SSD/Windows10."
            price={30.52}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/I/412hYHFcGjL._SX300_SY300_QL70_FMwebp_.jpg" alt=""
            />
            <Product
            id="600552"
            title="Lenovo IdeaPad Gaming 3 Intel Core i5 10th Gen 15.6-inch FHD 120Hz IPS Gaming Laptop (SSD/Windows 10)."
            price={28.32}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/I/51hpsGSvHRL._SX300_SY300_QL70_FMwebp_.jpg" alt=""
            />
            <Product
            id="688572"
            title="ASUS ZenBook Duo UX481 Intel Core i5 10th Gen 14-inch FHD Thin & Light Laptop (8GB RAM/512GB)."
            price={30.52}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/I/41g7hgWH3fS._SX300_SY300_QL70_FMwebp_.jpg" alt=""
            />
           </div>
           <div className="home__row">
           <Product
            id="239972"
            title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED TV X50|L50M6-RA (Black) (2021 Model)."
            price={28.22}
            rating={5}
            image ="https://images-na.ssl-images-amazon.com/images/I/81sscKjSPiL._SX569_.jpg" alt=""
            /> 
            <Product
            id="279972"
            title="TCL 126 cm (50 inches) AI 4K Ultra HD Certified Android Smart LED TV 50P715 (Silver) (2020 Model) | With Remote Less Voice Control."
            price={38.22}
            rating={5}
            image ="https://images-na.ssl-images-amazon.com/images/I/91H1WyZLcfS._SL1500_.jpg" alt=""
            /> 
           </div>
           <div className="home__row">
           <Product
            id="602552"
            title="I KALL K500 Smartphone (6.26 Waterdrop Display, 4GB Ram, 64GB Storage, 4G Volte, Dual Sim) (Red)."
            price={18.32}
            rating={5}
            image ="https://m.media-amazon.com/images/I/61hQ5cr1gEL._SL1100_.jpg" alt=""
            />
            <Product
            id="6320552"
            title="OnePlus Nord CE 5G (Charcoal Ink, 12GB RAM, 256GB Storage)."
            price={14.52}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/I/41e1JcORdNS._SX300_SY300_QL70_FMwebp_.jpg" alt=""
            />
            <Product
            id="680152"
            title="New Apple iPhone 12 Pro (128GB) - Pacific Blue."
            price={19.49}
            rating={5}
            image ="https://images-eu.ssl-images-amazon.com/images/I/41OjTfcarKL._SY445_SX342_QL70_FMwebp_.jpg" alt=""
            />
           </div> 
        </div>
    );
}
 
export default Home  
