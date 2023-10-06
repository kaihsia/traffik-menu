import './Menu.css'

function MenuContainer({closeMenu, isOpen, openSubMenu}) {
    return (
        <div className={`menu ${isOpen ? 'showNav' : 'hideNav'}`}>
            <div className="categories">
                <div className="back-icon" onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
                        <path d="M0.445923 12C0.445923 11.2981 0.746722 10.6965 1.24805 10.2955L12.4779 0.46936C13.28 -0.232505 14.383 -0.132239 15.0848 0.669893C15.6864 1.47202 15.6864 2.57495 14.8843 3.17655L5.05818 11.7995C4.95791 11.8997 4.95791 12 5.05818 12.1003L14.8843 20.7232C15.6864 21.425 15.7867 22.528 15.0848 23.3301C14.383 24.1322 13.28 24.2325 12.4779 23.5306L12.3776 23.4304L1.24805 13.7045C0.746722 13.3035 0.445923 12.6016 0.445923 12Z" fill="#3E4147"/>
                    </svg>
                </div>
                <span>
                    All Categories
                </span>
            </div>
            <div className='menu-list'>
                <a href='#food' onClick={openSubMenu} >Food & Drink</a>
                <a href='#essential'>Essential</a>
                <a href='#apperal'>Apperal</a>
                <a href='#home'>Home</a>
                <a href='#sports'>Sports & Outdoors</a>
                <a href='#about'>Baby & Kids</a>
                <a href='#pets'>Pets</a>
                <a href='#wellness'>Wellness</a>
                <a href='#care'>Personal Care</a>
                <a href='#beauty'>Beauty</a>
                <a href='#books'>Books</a>
                <a href='#toys'>Toys & Games</a>
                <a href='#electronics'>Electronics</a>
                <a href='#automotive'>Automotive</a>
                <a href='#luggage'>Luggage</a>
                <a href='#seasonal'>Seasonal</a>
                <a href='#deals'>Deals</a>
                <a href='#gifts'>Gifts</a>
                <a href='#giftcards'>Gift cards</a>
                <a href='#services'>Services & Local</a>
            </div>
        </div>
    );
}
export default MenuContainer;