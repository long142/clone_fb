export default function MainProfile() {
  return ( 
    <div>
    <section className="cover-image-section">
    <header className="cover-hader-site">

        <img id="background" src="http://nhandaovadoisong.com.vn/wp-content/uploads/2019/05/anh-thien-nhien-dep.jpg."/>

        <div className="cover-image-div">
            <div className="cover-image-edite-btn an1">
                <button>
                    <i className="fas fa-camera"></i>
                    Edit Covar Photo
                </button>
                <button className="an">
                    <i className="fas fa-camera"></i>
                </button>
            </div>
            <div className="cover-image-edite-btn an">
                <button>
                    <i className="fas fa-camera"></i>
                </button>
            </div>
        </div>

    </header>
</section>
        <section className="profile-section">
        <div className="profile-section-in">

            <div className="profile-image-site">
                <div className="profile-image-div">
                    <a href="#" id="profile-link">
                        <img id="avatar"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                    </a>
                    <span className="fas fa-camera"></span>
                </div>
            </div>
            <div className="profile-name-info">
                <h1>
                    <span className="pro-txt" id="username">MD Mehedi Hasan</span>
                    <span id="nik-name"></span>
                </h1>
                <p>
                    <span className="fir-count-txt">
                        <span id="friend_count">3.9K</span> Friends
                    </span>
                </p>

                <div className="friends-img-div">

                    <div className="firend-img a">
                        <img id="frind-image-1"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                    </div>
                    <div className="firend-img b">
                        <img id="frind-image-2"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                    </div>
                    <div className="firend-img c">
                        <img id="frind-image-3"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                    </div>
                    <div className="firend-img d">
                        <img id="frind-image-4"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                    </div>
                    <div className="firend-img e">
                        <img id="frind-image-5"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                    </div>
                    <div className="firend-img f">
                        <img id="frind-image-6"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                    </div>
                    <div className="firend-img g">
                        <img id="frind-image-7"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                    </div>
                    <div className="firend-img last-fi-div h">
                        <img id="frind-image-8"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                        <span className="fas fa-ellipsis-h"></span>
                    </div>

                </div>

            </div>
            <div className="profile-button-site">
                <div className="btn-site-pro">
                    <span>
                        <i className="fas fa-plus-circle"></i>
                        Add to Storry
                    </span>
                    <span className="edit-profile-btn"> 
                        <i className="bi bi-pencil-fill"></i>
                        Edit Profile
                    </span>
                </div>
            </div>

        </div>
    </section>
    <section className="full-navbar">
            <nav className="navbar-site">

                <ul compact="txt-color-c">
                    <a href="#">
                        <li className="txt-cc activ-navbar">Posts</li>
                    </a>
                    <a href="#">
                        <li className="txt-cc">About</li>
                    </a>
                    <a href="#">
                        <li className="txt-cc">Friends</li>
                    </a>
                    <a href="#" id="photo-nav">
                        <li className="txt-cc">Photo</li>
                    </a>
                    <a href="#" id="video-nav">
                        <li className="txt-cc">Video</li>
                    </a>
                    <a href="#" id="likes-nav">
                        <li className="txt-cc">Likes</li>
                    </a>
                    <a href="#">
                        <li className="txt-cc">More <i className="fas fa-caret-down"></i></li>
                    </a>
                </ul>

                <div className="nav-btn">
                    <i className="fas fa-ellipsis-h"></i>
                </div>

            </nav>


        </section>
        <section className="post-section">
            <div className="post-section-in">

                <section className="info-section">
 
                    <div className="about-info">
                        <h4>Intro</h4>

                        <p id="bio-text">Mehedi Hasan</p>
                        {/* <div className="bio-btn-click">
                            <input className="input-box" type="text"  
                                 />
                            <p className="length-count-txt">
                                <span id="length-count">101</span> characters
                                remaining</p>
                            <div className="putlic-c-o-btn">
                                <div>
                                    <p><span className="fas fa-globe-europe"></span>
                                        Public</p>
                                </div>
                                <div className="button-site-js">
                                    <button id="cencel-btn">Cancel</button>
                                    <button id="save-btn">Save</button></div>
                            </div>
                        </div> */}
                        <button id="bio-edit-btn" className="edit-bio btn">Edit Bio</button>
                        <ul>
                            <li><i className="fas fa-briefcase"></i> Works at
                                <a href="#"> HN</a>
                            </li>

                            <li><i className="fas fa-graduation-cap"></i> Went to
                                <a href="#"> HN</a>
                            </li>

                            <li><i className="fas fa-home"></i> Lives in
                                <a href="#"> HN</a>
                            </li>

                            <li><i className="fas fa-map-marker-alt"></i> From
                                <a href="#"> VN</a>
                            </li>
                            <li><i className="fas fa-heart"></i> Single</li>
                            <li><i className="fas fa-globe"></i> <a href="#">
                                     
                                </a></li>
                        </ul>

                        <button className="edit-bio btn">Edit Details</button>

                        <div className="Hobbies-show">
                            <span><i className="fas fa-laptop-code"></i> Learning to
                                Code</span>

                            <span><i className="fas fa-laptop-code"></i>Code</span>
                            <span><i className="fas fa-book"></i>Learning</span>
                            <span><i className="fas fa-camera-retro"></i>Photography</span>
                        </div>

                        <button className="edit-bio btn">Edit Hobbies</button>

                        <div className="Featured-site">

                            <div className="Featured-img-div">
                                <img id="post-image-12" 
                                    src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="Featured-img-div">
                                <img id="post-image-11"
                                    src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>
                            </div>

                            <div className="Featured-img-div">
                                <img id="post-image-9"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="Featured-img-div">
                                <img id="post-image-8"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                        </div>

                        <button className="edit-bio btn">Edit Featured</button>
                    </div>

                    <div className="box-design images-site">

                        <span>Photos</span>

                        <div className="see-all-images"><a href="#">See All Photos</a></div>
                        <div className="at9-images">

                            <div className="images-div">
                                <img id="post-image-12"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="images-div">
                                <img id="post-image-2"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="images-div">
                                <img id="post-image-3"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="images-div">
                                <img id="post-image-4"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="images-div">
                                <img id="post-image-5"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="images-div">
                                <img id="post-image-6"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="images-div">
                                <img id="post-image-7"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="images-div">
                                <img id="post-image-8"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                            <div className="images-div">
                                <img id="post-image-9"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                            </div>

                        </div>

                    </div>

                    <div className="box-design friends-site">

                        <span>Friends <br/>
                            <p>
                                <span>
                                    3641
                                </span>
                                Friends
                            </p>
                        </span>

                        <div className="see-all-images"><a href="#">See All Friends</a></div>
                        <div className="at9-images">

                            <div className="images-div">
                                <img id="frind-image-1"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                <p><a href="#">Mehei Hasan</a></p>
                            </div>

                            <div className="images-div">
                                <img id="frind-image-2"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                <p><a href="#">salma akter</a></p>
                            </div>

                            <div className="images-div">
                                <img id="frind-image-3"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                <p><a href="#">abu bakker</a></p>
                            </div>

                            <div className="images-div">
                                <img id="frind-image-4"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                <p><a href="#">bangladesh</a></p>
                            </div>

                            <div className="images-div">
                                <img id="frind-image-5"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                <p><a href="#">japan</a></p>
                            </div>

                            <div className="images-div">
                                <img id="frind-image-6"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                <p><a href="#">hello Bangladesh</a></p>
                            </div>

                            <div className="images-div">
                                <img id="frind-image-7"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                <p><a href="#">sad mia</a></p>
                            </div>

                            <div className="images-div">
                                <img id="frind-image-8"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                <p><a href="#">china</a></p>
                            </div>

                            <div className="images-div">
                                <img id="frind-image-9"
                                     src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                <p><a href="#">sad mia</a></p>
                            </div>

                        </div>

                    </div>

                </section>

                <section className="post-info">

                    <div className="box-design">
                        <div className="post-upload-T">
                            <div className="profil-ing-div">
                                <a href="#" id="profile-link">
                                    <img id="avatar3"
                                         src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                </a>
                            </div>
                            <div className="text-post">
                                <span>What's on your mind?</span>
                            </div>
                        </div>
                        <div className="photo-upload">
                            <div className="post-upl">
                                <p><i className="fas fa-video"></i> Live Video</p>
                            </div>
                            <div className="post-upl">
                                <p><i className="fas fa-images"></i> Photo/Video</p>
                            </div>
                            <div className="post-upl">
                                <p><i className="fas fa-flag"></i> Life Event</p>
                            </div>
                        </div>
                    </div>

                    <div className="box-design post-filter">

                        <div className="filter-site">
                            <span>Posts</span>
                            <div className="fil-ter">
                                <button><i className="fas fa-sliders-h"></i> Filters</button>
                                <button><i className="fas fa-cog"></i> Manager Posts</button>
                            </div>
                        </div>

                        <div className="list-type">
                            <div className="fil-list activ-navbar">
                                <i className="fas fa-bars"></i> List View
                            </div>
                            <div className="fil-list">
                                <i className="fas fa-th-large"></i> Grid View
                            </div>
                        </div>

                    </div>

 

                    <div className="box-design post-div">
                        <div className="post-infarmation">
                            <div>
                                <div className="profil-ing-div post-profile-img">
                                    <a href="#" id="profile-link">
                                        <img id="avatar2"
                                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                    </a>
                                </div>
                            </div>
                            <div className="post-three-dot">
                                <h2><a href="#" id="username1">MD Meheid
                                        Hasan</a></h2>
                                <div>
                                    <a href="%">5d</a>
                                    <span>
                                        <i id="public-btn-i" className="fas
                                            fa-user-friends"></i>

                                        <div className="Select-audience">
                                            <div className="header-popap">
                                                <p className="h-pop">Select audience</p>
                                                <span id="popup-close-btn"
                                                    className="fas fa-times"></span>
                                            </div>

                                            <div className="content-popaap">
                                                <ul>
                                                    <li id="public-btn">
                                                        <div className="icon-div">
                                                            <i className="fas
                                                                fa-globe-europe"></i>
                                                        </div>
                                                        <div className="text-aria">
                                                            <h2>Public</h2>
                                                            <p>Anyone on or off
                                                                Facebook</p>
                                                            <i
                                                                id="public-li-icon"
                                                                className="far
                                                                fa-circle"></i>
                                                        </div>
                                                    </li>

                                                    <li className="activ-li-div"
                                                        id="friends-btn">
                                                        <div className="icon-div">
                                                            <i className="fas
                                                                fa-user-friends
                                                                frind-icon"></i>
                                                        </div>
                                                        <div className="text-aria">
                                                            <h2>Friends</h2>
                                                            <p>Your friends on
                                                                Facebook</p>
                                                            <i
                                                                id="friends-li-icon"
                                                                className="far
                                                                fa-dot-circle
                                                                activ-li-icon"></i>
                                                        </div>
                                                    </li>

                                                    <li id="lock-btn">
                                                        <div className="icon-div">
                                                            <i className="fas
                                                                fa-lock"></i>
                                                        </div>
                                                        <div className="text-aria">
                                                            <h2 className="onlu-me">Only
                                                                Me</h2>
                                                            <i id="lock-li-icon"
                                                                className="far
                                                                fa-circle"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </span>
                                </div>

                                <span className="thre-dto-btn fas fa-ellipsis-h"></span>
                            </div>
                        </div>

                        <p className="post-hader-text" id="post_h_T">Hello World.</p>
                        <img id="avatar4" className="post-images"
                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                        <div className="post-info-input">

                            <div className="lilowow-cs">
                                <div className="llw-count">
                                    <div className="icon-show top">
                                        <img
                                            src="https://i.pinimg.com/originals/1a/74/83/1a74838c83ed34bab7d12fb5f424827f.png"/>
                                    </div>
                                    <div className="icon-show mid like-icon-bg">
                                        <i className="fas fa-thumbs-up"></i>
                                    </div>
                                    <div className="icon-show low love-icon-bg">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div><p className="l-count"><span>11</span></p></div>
                                </div>

                                <div>
                                    <p>
                                        <a href="#">1 Comments</a>

                                        <a href="#">1 Share</a>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="actavite">
                            <div className="lcs-btn lcs-btn_i">
                                <p>
                                    <i id="post-icon-btn_i" className="far
                                        fa-thumbs-up"></i>
                                    <span id="post-icon-text_i">Like</span>
                                </p>
                            </div>
                            <div className="lcs-btn">
                                <p><i className="far fa-comment-alt"></i> Comment</p>
                            </div>
                            <div className="lcs-btn">
                                <p><i className="fas fa-share"></i> Share</p>
                            </div>
                        </div>


                        <div className="comment-site">
                            <div className="profil-ing-div">
                                <a href="#" id="profile-link">
                                    <img id="avatar1"
                                         src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                </a>
                            </div>
                            <div className="comment-input">
                                <input type="text"
                                    placeholder="Write a comment…"/>
                                <div className="comment-icon-div">
                                    <div> 
                                        <span className="material-symbols-outlined">
                                            mood
                                        </span>
                                    </div>
                                    <div>
                                        <i className="fas fa-camera"></i>
                                    </div>
                                    <div>
                                        <i className="fas fa-camera"></i>
                                    </div>
                                    <div>
                                        <i className="fas fa-camera"></i>
                                    </div>
                                    {/* <div>
                                        <img src="./assets/images/icon/gif.jpg"/>
                                    </div>
                                    <div>
                                        <img
                                            src="./assets/images/icon/sticer.jpg"/>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="box-design post-div">
                        <div className="post-infarmation">
                            <div>
                                <div className="profil-ing-div post-profile-img">
                                    <a href="#" id="profile-link">
                                        <img id="Profile_images"
                                             src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                    </a>
                                </div>
                            </div>
                            <div className="post-three-dot">
                                <h2><a href="#" id="profile_name">MD Meheid
                                        Hasan</a></h2>
                                <p>
                                    <a href="%">5d</a>
                                    <span><i className="fas fa-user-friends"></i></span>
                                </p>

                                <span className="thre-dto-btn fas fa-ellipsis-h"></span>
                            </div>
                        </div>
                        <p className="post-hader-text" id="post_h_PLUS_I">Hello
                            World.</p>
                        <div className="post-background-img">
                            <div>
                                <div className="one-or-two">
                                    <img id="post-image-10"
                                         src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                </div>
                                <div className="one-or-two">
                                    <img id="post-image-11"
                                         src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                </div>
                            </div>

                            <div>
                                <div className="one-or-two">
                                    <img id="post-image-1"
                                         src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                </div>
                                <div className="one-or-two ofverflow-images">
                                    <img id="post-image-2"
                                         src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                    <div className="ove-img-div">
                                        <p>15</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-info-input">

                            <div className="lilowow-cs">
                                <div className="llw-count">
                                    <div className="icon-show top">
                                        <img src="https://i.pinimg.com/originals/1a/74/83/1a74838c83ed34bab7d12fb5f424827f.png"/>
                                    </div>
                                    <div className="icon-show mid like-icon-bg">
                                        <i className="fas fa-thumbs-up"></i>
                                    </div>
                                    <div className="icon-show low love-icon-bg">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                    <div><p className="l-count"><span>35</span></p></div>
                                </div>

                                <div>
                                    <p>
                                        <a href="#">11 Comments</a>

                                        <a href="#">6 Share</a>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="actavite">
                            <div className="lcs-btn lcs-btn_plus_i">
                                <p>
                                    <i id="post-icon-btn_plus_i" className="far
                                        fa-thumbs-up"></i>
                                    <span id="post-icon-text_plus_i">Like</span>
                                </p>
                            </div>
                            <div className="lcs-btn">
                                <p><i className="far fa-comment-alt"></i> Comment</p>
                            </div>
                            <div className="lcs-btn">
                                <p><i className="fas fa-share"></i> Share</p>
                            </div>
                        </div>


                        <div className="comment-site">
                            <div className="profil-ing-div">
                                <a href="#" id="profile-link">
                                    <img id="Profile_images"
                                         src="https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"/>

                                </a>
                            </div>
                            <div className="comment-input">
                                <input type="text"
                                    placeholder="Write a comment…"/>
                                <div className="comment-icon-div">
                                    <div>
                                        <span className="material-symbols-outlined">
                                            mood
                                        </span>
                                    </div>
                                    <div>
                                        <i className="fas fa-camera"></i>
                                    </div>
                                    <div>
                                        <i className="fas fa-camera"></i>
                                    </div>
                                    <div>
                                        <i className="fas fa-camera"></i>
                                    </div>
                                    {/* <div>
                                        <img src="./assets/images/icon/gif.jpg"/>
                                    </div>
                                    <div>
                                        <img
                                            src="./assets/images/icon/sticer.jpg"/>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>

                </section>

            </div>
        </section>

    </div>
  );
}
