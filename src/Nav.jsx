import './Nav.css';

function Nav(props) {
    const { openMenu } = props;
    return (
        <>
            <div className='topnav'>
                <div className='nav-list'>
                    <div className='logo' onClick={openMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3.78261 4.56445H20.2174C20.2174 4.56445 21 4.56445 21 5.34706V6.12967C21 6.12967 21 6.91228 20.2174 6.91228H3.78261C3.78261 6.91228 3 6.91228 3 6.12967V5.34706C3 5.34706 3 4.56445 3.78261 4.56445Z" fill="#3E4147"/>
                            <path d="M3.78261 10.8262H20.2174C20.2174 10.8262 21 10.8262 21 11.6088V12.3914C21 12.3914 21 13.174 20.2174 13.174H3.78261C3.78261 13.174 3 13.174 3 12.3914V11.6088C3 11.6088 3 10.8262 3.78261 10.8262Z" fill="#3E4147"/>
                            <path d="M3.78261 17.0859H20.2174C20.2174 17.0859 21 17.0859 21 17.8685V18.6512C21 18.6512 21 19.4338 20.2174 19.4338H3.78261C3.78261 19.4338 3 19.4338 3 18.6512V17.8685C3 17.8685 3 17.0859 3.78261 17.0859Z" fill="#3E4147"/>
                        </svg>
                        <span>All</span>
                    </div>
                    <a href='#food' >Food & Drink</a>
                    <a href='#essential'>Essential</a>
                    <a href='#apperal'>Apperal</a>
                    <a href='#home'>Home</a>
                    <a href='#sports'>Sports & Outdoors</a>
                    <a href='#about'>Baby & Kids</a>
                    <a href='#pets'>Pets</a>
                </div>
            </div>
        </>
    );
}

export default Nav;