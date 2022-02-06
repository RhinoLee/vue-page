<template>
  <div id="header">
    <div class="nav-bar">
      <div class="logo-area">
        <h1 class="logo">
          <img src="../assets/images/icon/logo.png" alt="Linkedin" />
        </h1>
      </div>
      <div class="container">
        <div class="nav-area">
          <ul>
            <li class="nav-item">
              <a href="#">
                <img src="../assets/images/icon/feed.png" alt="feed" />
                <p>feed</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#">
                <img src="../assets/images/icon/network.png" alt="network" />
                <p>network</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#">
                <img src="../assets/images/icon/jobs.png" alt="jobs" />
                <p>jobs</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#">
                <img src="../assets/images/icon/chat.png" alt="chat" />
                <p>chat</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#">
                <img src="../assets/images/icon/notices.png" alt="notices" />
                <p>notices</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="search-area">
          <div class="icon">
            <img src="../assets/images/icon/search.png" alt="" />
          </div>
          <div class="input-area">
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div class="user-area">
          <div class="avatar">
            <img src="../assets/images/icon/avatar_small.png" alt="" />
          </div>
          <div class="info">
            <div class="name">
              <span>d.kargaev</span>
              <span>you</span>
            </div>
            <div class="count">
              <span>367 views today</span>
              <span
                id="counter"
                >+32 <img src="../assets/images/icon/arrow.png" alt=""
              /></span>
            </div>
          </div>
        </div>
      </div>
      <div class="other-area">
        <ul>
          <li class="nav-item">
            <a href="#">
              <img src="../assets/images/icon/setting.png" alt="" />
              <p>other</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#header {
  border-bottom: 1px solid $border-gray;
  height: 80px;
}
.logo-area,
.container > div,
.other-area {
  padding-top: 17px;
  padding-bottom: 17px;
}
.nav-bar {
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    height: 100%;
    li {
      width: 20%;
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 24px;
        line-height: 0.9;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
      p {
        padding-top: 10px;
        text-align: center;
        color: #181818;
        font-size: 12px;
        text-transform: uppercase;
      }
    }
  }
  .logo-area {
    border-right: 1px solid $border-gray;
    padding-left: 40px;
    padding-right: 40px;
    width: 10%;
    img {
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 46px;
    }
  }
  .container {
    display: flex;
    height: 100%;
    .nav-area {
      padding-left: 13px;
      padding-right: 13px;
      width: 40%;
    }
    .search-area {
      position: relative;
      border-left: 1px solid $border-gray;
      padding-left: 30px;
      width: 30%;
      .icon {
        position: absolute;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        img {
          display: block;
          width: 100%;
        }
      }
      .input-area {
        padding-left: 30px;
        width: 100%;
        height: 100%;
        input {
          border: none;
          width: 100%;
          height: 100%;
          outline: none;
          color: #cecece;
          font-size: 16px;
          text-transform: capitalize;
        }
      }
    }
    .user-area {
      display: flex;
      padding-left: 34px;
      border-left: 1px solid $border-gray;
      width: 30%;
      .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 42px;
        img {
          display: block;
          width: 100%;
        }
      }
      .info {
        padding-left: 15px;
        width: calc(100% - 42px);
      }
      .name {
        span {
          &:first-child {
            color: #181818;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
          }
          & + span {
            margin-left: 10px;
            font-size: 12px;
            color: rgba(24, 24, 24, 0.2);
            text-transform: uppercase;
          }
        }
      }
      .count {
        display: flex;
        align-items: center;
        padding-top: 10px;
        span {
          display: block;
          color: #747474;
          font-size: 12px;
        }
        #counter {
          display: flex;
          align-items: center;
          padding-left: 4px;
          color: #02B033;
          img {
            display: block;
            width: 12px;
          }
        }
      }
    }
  }
  .other-area {
    display: flex;
    justify-content: center;
    border-left: 1px solid $border-gray;
    border-right: 1px solid $border-gray;
    margin-right: 40px;
    width: 8%;
  }
}
</style>