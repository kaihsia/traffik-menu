import './Submenu.css'

function SubMenuContainer({isOpen}) {
    return (
        <div className={`submenu ${isOpen ? 'showSubNav' : 'hideSubNav'}`}>
            <div className='food-image'>
            </div>
            <div className="food">
                <span>
                    Food & Drinks
                </span>
                <div className="shop-all">
                    Shop All
                </div>
            </div>
            <div className='submenu-list'>
                <a href='#alcohol' >Alcohol</a>
                <a href='#beverages'>Beverages</a>
                <a href='#bread'>Bread & Bakery</a>
                <a href='#breakfast'>Breakfast & Cereal</a>
                <a href='#coffee'>Coffee & Tea</a>
                <a href='#dairy'>Dairy & Eggs</a>
                <a href='#deli'>Deli</a>
                <a href='#frozen'>Frozen Foods</a>
                <a href='#meat'>Meat & Seafood</a>
                <a href='#pantry'>Pantry</a>
                <a href='#snacks'>Snacks & Sweets</a>
                <a href='#tobacco'>Tobacco</a>
            </div>
        </div>
    );
}
export default SubMenuContainer;