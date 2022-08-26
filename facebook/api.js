const baseURL = "https://62ebc1e5705264f263dfa66f.mockapi.io/v1/";

const _endpoint = {
  user: "user",
  posts: "posts",
  images: "images",
  friends: "friends",
};

const renderGridImage = (dataSource = [], renderItem, opts = {}) => {
  const isCustomRender = typeof renderItem === "function";
  const { radius = 16, ratio = 3, sizeImage = 128, space = 10 } = opts;
  const group = document.createElement("div");
  group.className = "group-image";

  group.style.width = sizeImage * ratio + space + "px";
  group.style.height = sizeImage * ratio + space + "px";
  group.style.borderRadius = radius + "px";
  dataSource.forEach((item) => {
    if (isCustomRender) {
      group.appendChild(
        renderItem({ ...item, radius, ratio, sizeImage, space })
      );
    } else {
      const _img = new Image();
      _img.src = item.imageUrl;
      _img.alt = item.metadata;
      _img.style.width = sizeImage + "px";
      _img.style.height = sizeImage + "px";
      _img.style.objectFit = "cover";
      group.appendChild(_img);
    }
  });

  return group;
};

function renderGridItemFriend(item) {
  const wrap = document.createElement("div");

  wrap.style.width = item.sizeImage + "px";
  wrap.style.height = item.sizeImage + "px";

  const name = document.createElement("span");
  wrap.classList = [
    "d-flex flex-column justify-content-center align-items-center",
  ];
  const _img = new Image();
  _img.src = item.avatar;
  _img.alt = item.name;
  _img.style.width = item.sizeImage - 24 + "px";
  _img.style.height = item.sizeImage - 24 + "px";
  _img.style.objectFit = "cover";
  _img.style.borderRadius = item.radius + "px";

  name.innerHTML = item.name;

  wrap.appendChild(_img);
  wrap.appendChild(name);

  return wrap;
}

function rawPostHtml(data) {
  return `
  <div class="post d-flex flex-column mt-3 p-3">
  <div class="post__heading d-flex justify-content-between">
      <div class="post-info d-flex ">
          <div class="post-info__avatar mr-2">
              <img src="./asset/avatar.jpg" data-avatar alt="avatar image" />
          </div>
          <div class="post-info__desc ">
              <div class="post-info__name font-weight-bold">${data.author}</div>
              <div class="post-info__timepost">${data.createdAt}</div>
          </div>

      </div>
      <div class="post__heading-link ">
          <span>
              <i class="fa-solid fa-ellipsis"></i>
          </span>
      </div>
  </div>
  <div class="post__image">
      <img src="${data.avatar}" alt="image" />
  </div>
  <div class="post__content">
      <p>
        ${data.content}
      </p>
  </div>
  <div class="post__button d-flex justify-content-center align-items-center mt-2 p-2">
      <div class="post__button-like d-flex flex-grow-1 justify-content-center">
          <span><i class="fa-regular fa-thumbs-up mr-2"></i></span>
          <p>Like</p>
      </div>
      <div class="post__button-cmt d-flex flex-grow-1 justify-content-center">
          <span><i class="fa-regular fa-comment mr-2"></i></span>
          <p>Comment</p>
      </div>
      <div class="post__button-share d-flex flex-grow-1 justify-content-center">
          <span><i class="fa-regular fa-share-from-square mr-2"></i></span>
          <p>Share</p>
      </div>
  </div>
  <div class="post__comment d-flex mt-3 align-items-center ">
      <div class="post__comment-avatar mr-2">
          <img src="./asset/avatar.jpg" alt="avatar image" data-avatar />
      </div>
      <div class="post__comment-input flex-grow-1">
          <input type="text" placeholder="Viết bình luận" class="pl-2">
          <div></div>
      </div>
  </div>
</div>
  
  `;
}

const makeRequestURL = (endpoint) => `${baseURL}${endpoint}`;

const _axios = {
  get(endpoint, opts = {}) {
    return fetch(makeRequestURL(endpoint), {
      method: "GET",
      ...opts,
    });
  },
  post(endpoint, payload, opts = {}) {
    return fetch(makeRequestURL(endpoint), {
      method: "POST",
      body: payload,
      ...opts,
    });
  },
  put(endpoint, payload, opts = {}) {
    return fetch(makeRequestURL(endpoint), {
      method: "PUT",
      body: payload,
      ...opts,
    });
  },
  patch(endpoint, payload, opts = {}) {
    return fetch(makeRequestURL(endpoint), {
      method: "PATCH",
      body: payload,
      ...opts,
    });
  },
  delete(endpoint, opts = {}) {
    return fetch(makeRequestURL(endpoint), {
      method: "DELETE",
      ...opts,
    });
  },
  request(endpoint, opts = {}) {
    return fetch(endpoint, opts);
  },
};

const _servicesApi = {
  fetchUserInfo() {
    return new Promise((resolve, reject) => {
      _axios
        .get(_endpoint.user)
        .then((res) => res.json())
        .then((data) => {
          if (data.length && typeof data == "object") {
            resolve(data[0]);
          } else {
            reject(data);
          }
        })
        .catch((_err) => {
          reject(_err);
        });
    });
  },
  fetchPosts() {
    return new Promise((resolve, reject) => {
      _axios
        .get(_endpoint.posts)
        .then((res) => res.json())
        .then((posts) => resolve(posts))
        .catch((_err) => reject(_err));
    });
  },
  fetchFriends() {
    return new Promise((resolve, reject) => {
      _axios
        .get(_endpoint.friends)
        .then((res) => res.json())
        .then((friends) => resolve(friends))
        .catch((_err) => reject(_err));
    });
  },
  fetchImages() {
    return new Promise((resolve, reject) => {
      _axios
        .get(_endpoint.images)
        .then((res) => res.json())
        .then((images) => resolve(images))
        .catch((_err) => reject(_err));
    });
  },
};

const _serviceDom = {
  updateUserInfo(user) {
    const username = document.getElementById("username");
    const background = document.getElementById("background");

    username.innerHTML = user.name;
    background.src = user.background;

    this.updateAllAvatar(user.avatar);
  },
  updateAllAvatar(url) {
    const nodeList = document.querySelectorAll("img[data-avatar]");
    if (nodeList.length) {
      nodeList.forEach((elm) => {
        elm.src = url;
      });
    }
  },
  updateFriends(friendList = [], count) {
    if (!friendList.length) {
      return;
    }
    const _domFriendsCount = document.getElementById("friendsCount");
    _domFriendsCount.innerHTML = count + " Bạn bè";

    const _viewFriendList = document.querySelector(".info-listimg");
    friendList.forEach((friend) => {
      const item = document.createElement("div");
      item.className = "info-listimg__item";
      const img = new Image();
      img.src = friend.avatar;
      item.appendChild(img);
      _viewFriendList.appendChild(item);
    });
  },
  updateImages(images) {
    const originDiv = document.getElementById("myImages");
    originDiv.appendChild(renderGridImage(images.slice(0, 9)));
  },
  updateGridFriends(images) {
    const originDiv = document.getElementById("myFriends");
    originDiv.appendChild(renderGridImage(images, renderGridItemFriend, {}));
  },
  updatePosts(posts, avatar) {
    const originDiv = document.getElementById("postList");
    let _trick = "";
    posts.forEach((post) => {
      _trick += rawPostHtml(post);
    });
    originDiv.innerHTML = _trick;
    this.updateAllAvatar(avatar);
  },
};

window.addEventListener("DOMContentLoaded", function () {
  const _promises = [
    _servicesApi.fetchUserInfo(),
    _servicesApi.fetchFriends(),
    _servicesApi.fetchImages(),
    _servicesApi.fetchPosts(),
  ];

  Promise.all(_promises)
    .then(([user, friends, images, posts]) => {
      _serviceDom.updateUserInfo(user);

      _serviceDom.updateFriends(friends.slice(0, 8), friends.length);
      _serviceDom.updateGridFriends(friends.slice(0, 9));

      _serviceDom.updateImages(images);

      _serviceDom.updatePosts(posts.slice(0, 12), user.avatar);
    })
    .catch((e) => {
      $("#modalError").modal("show");
    });
});
