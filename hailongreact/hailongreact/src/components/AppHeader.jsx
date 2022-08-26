import IconNavBar from "./IconNavBar";

export default function AppHeader() {
  const navbarIcons = [
     
  ];

  return (
    
    <div className="header">
            <div className="header__left">
                <img
                    src='https://rgl.mobi/ZjKtW'
                    alt="logo"/>
                <div className="header__input">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option">
                    <span className="material-symbols-outlined"> home </span>
                </div>
                <div className="header__option">
                    <span className="material-symbols-outlined"> flag </span>
                </div>
                <div className="header__option">
                    <span className="material-symbols-outlined"> subscriptions
                    </span>
                </div>
                <div className="header__option">
                    <span className="material-symbols-outlined"> storefront </span>
                </div>
                <div className="header__option">
                    <span className="material-symbols-outlined">
                        supervised_user_circle </span>
                </div>

            </div>
            <div className="header__middle2 an">

                <div className="header__option2 ">
                    <span className="material-symbols-outlined"
                        onClick={openNav}>
                        menu
                    </span>
                </div>
                <div id="myNav" className="overlay">
                    {/* href="javascript:void(0)" */}
                    <a  className="closebtn"
                        onClick={closeNav}>&times;</a>
                    <div className="overlay-content">
                        <a href="#">Long</a>
                        <a href="#">Bạn bè</a>
                        <a href="#">Nhóm</a>
                        <a href="#">Marketplace</a>
                    </div>
                </div>
            </div>

            <div className="header__right">
                <div className="header__option1">
                    <span className="material-symbols-outlined"> add </span>
                </div>
                <div className="header__option1">
                    <span className="material-symbols-outlined"> forum </span>
                </div>
                <div className="header__option1">
                    <span className="material-symbols-outlined">
                        notifications_active
                    </span>
                </div>
                <div className="header__option1">
                    <span className="material-symbols-outlined"> expand_more
                    </span>
                </div>
            </div>
        </div>
  );
}
