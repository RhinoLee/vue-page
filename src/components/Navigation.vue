<template>
  <div id="header">
    <div class="nav-bar">
      <div class="logo-area">
        <h1 class="logo">
          <router-link :to="{ name: 'Index' }">
            <img src="../assets/images/icon/logo.png" alt="Linkedin" />
          </router-link>
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
            <li class="nav-item chat">
              <a href="#">
                <img src="../assets/images/icon/chat.png" alt="chat" />
                <p>chat</p>
                <div class="chat-count">3</div>
              </a>
              <!-- <a href="#">
                <img src="../assets/images/icon/chat.png" alt="chat" />
                <p>chat</p>
                <div class="chat-count">3</div>
              </a> -->
            </li>
            <li class="nav-item" :class="{ active: props.nowRouteName === 'notice' }">
              <router-link :to="{ name: 'Notice' }">
                <img src="../assets/images/icon/notices.png" alt="notices" />
                <p>notices</p>
              </router-link>
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
            <img src="../assets/images/avatar/owl_bg.png" alt="" />
          </div>
          <div class="info">
            <div class="name">
              <span>d.kargaev</span>
              <span>you</span>
            </div>
            <div class="count">
              <span>367 views today</span>
              <span id="counter"
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

<script>
export default {
  props: {
    nowRouteName: {
      type: String,
    }
  },
  setup(props) {

    return { props }
  }
}
</script>

<style lang="scss" scoped>
#header {
  border-bottom: 1px solid $border-gray;
  height: 80px;
  background-color: #fff;
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
      position: relative;
      width: 20%;
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -17px;
        width: 0%;
        height: 2px;  
        background: $border-blue;
        transition: .3s linear all;
      }
      &:hover, &.active {
        &::after {
          width: 100%;
        }
        > a {
          p {
            color: $text-blue;
          }
        }
      }
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        width: 24px;
        line-height: 0.9;
        p {
          padding-top: 10px;
          text-align: center;
          color: $text-dark;
          font-size: 12px;
          text-transform: uppercase;
        }
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
  .logo-area {
    border-right: 1px solid $border-gray;
    padding-left: 40px;
    padding-right: 40px;
    width: 130px;
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
    max-width: unset;
    .nav-area {
      padding-left: 13px;
      padding-right: 13px;
      width: 40%;
      .nav-item {
        &.chat {
          a {
            position: relative;
            .chat-count {
              position: absolute;
              top: -6px;
              right: -6px;
              width: 16px;
              height: 16px;
              background: linear-gradient(
                215.49deg,
                #ffb75e 5.4%,
                #ed8f03 93.45%
              );
              color: #fff;
              font-size: 12px;
              line-height: 16px;
              text-align: center;
              border-radius: 50%;
            }
          }
        }
      }
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
        height: 42px;
        border-radius: 50%;
        overflow: hidden;
      }
      .info {
        padding-left: 15px;
        width: calc(100% - 42px);
      }
      .name {
        span {
          &:first-child {
            color: $text-dark;
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
          color: #02b033;
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
    width: 90px;
  }
}
</style>