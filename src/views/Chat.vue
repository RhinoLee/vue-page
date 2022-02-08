<template>
  <div class="container reverse">
    <div class="side-area">
      <div class="notifications-area">
        <ul>
          <li class="active">
            <a href="#">Notifications</a>
          </li>
          <li>
            <a href="#">Notification settings</a>
          </li>
        </ul>
      </div>
      <Dashboard></Dashboard>
    </div>
    <div class="main-area">
      <div class="activity-area">
        <div class="recent-area">
          <div class="title-area">
            <h2 class="title">recent</h2>
          </div>
          <div class="box">
            <ul>
              <li>
                <div class="pic">
                  <img src="@/assets/images/pic/logo_1.png" alt="" />
                  <img src="@/assets/images/pic/logo_2.png" alt="" />
                  <img src="@/assets/images/pic/logo_3.png" alt="" />
                </div>
                <div class="content">
                  <p><b>You appeared in 9 searches</b> this week</p>
                  <span>3 hours</span>
                </div>
                <div class="more">
                  <a href="#"
                    ><img src="@/assets/images/icon/setting.png" alt=""
                  /></a>
                </div>
              </li>
              <li>
                <div class="pic">
                  <img src="@/assets/images/pic/people_6.png" alt="" />
                  <img src="@/assets/images/pic/people_7.png" alt="" />
                  <img src="@/assets/images/pic/people_8.png" alt="" />
                </div>
                <div class="content">
                  <p>
                    Audrey Alexander and 10 others<b> viewed your profile</b>
                  </p>
                  <span>9 hours</span>
                </div>
                <div class="more">
                  <a href="#"
                    ><img src="@/assets/images/icon/setting.png" alt=""
                  /></a>
                </div>
              </li>
              <li>
                <div class="pic">
                  <img src="@/assets/images/pic/people_8.png" alt="" />
                  <img src="@/assets/images/pic/people_9.png" alt="" />
                  <img src="@/assets/images/pic/people_10.png" alt="" />
                </div>
                <div class="content">
                  <p>
                    Eduardo Russel and 4 others
                    <b
                      >liked your post «1,000 connections! My network growth, so
                      many»</b
                    >
                  </p>
                  <span>12 hours</span>
                </div>
                <div class="more">
                  <a href="#"
                    ><img src="@/assets/images/icon/setting.png" alt=""
                  /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="earlier-area">
          <div class="title-area">
            <h2 class="title">earlier</h2>
          </div>
          <div class="box">
            <ul>
              <li>
                <div class="pic">
                  <img src="@/assets/images/pic/logo_1.png" alt="" />
                  <img src="@/assets/images/pic/logo_2.png" alt="" />
                  <img src="@/assets/images/pic/logo_3.png" alt="" />
                </div>
                <div class="content">
                  <p><b>You appeared in 9 searches</b> this week</p>
                  <span>3 hours</span>
                </div>
                <div class="more">
                  <a href="#"
                    ><img src="@/assets/images/icon/setting.png" alt=""
                  /></a>
                </div>
              </li>
              <li>
                <div class="pic">
                  <img src="@/assets/images/pic/people_6.png" alt="" />
                  <img src="@/assets/images/pic/people_7.png" alt="" />
                  <img src="@/assets/images/pic/people_8.png" alt="" />
                </div>
                <div class="content">
                  <p>
                    Audrey Alexander and 10 others<b> viewed your profile</b>
                  </p>
                  <span>9 hours</span>
                </div>
                <div class="more">
                  <a href="#"
                    ><img src="@/assets/images/icon/setting.png" alt=""
                  /></a>
                </div>
              </li>
              <li>
                <div class="pic">
                  <img src="@/assets/images/pic/people_8.png" alt="" />
                  <img src="@/assets/images/pic/people_9.png" alt="" />
                  <img src="@/assets/images/pic/people_10.png" alt="" />
                </div>
                <div class="content">
                  <p>
                    Eduardo Russel and 4 others
                    <b
                      >liked your post «1,000 connections! My network growth, so
                      many»</b
                    >
                  </p>
                  <span>12 hours</span>
                </div>
                <div class="more">
                  <a href="#"
                    ><img src="@/assets/images/icon/setting.png" alt=""
                  /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "@/components/index/Dashboard.vue";
export default {
  components: {
    Dashboard,
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
}
.notifications-area {
  border: 1px solid transparent;
  border-radius: 4px;
  margin-bottom: 20px;
  a {
    color: $text-dark;
    font-size: 12px;
  }
  li {
    a {
      display: block;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 20px;
      background: #fff;
      position: relative;
      transition: 0.2s linear all;
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 10px;
        height: 0%;
        background: $text-blue;
        transition: 0.2s linear all;
      }
    }
    & + li {
      border-top: 1px solid $border-gray;
    }
    &.active,
    &:hover {
      a {
        padding-left: 40px;
        color: rgba(24, 24, 24, 0.6);
        &::after {
          height: 100%;
        }
      }
    }
  }
}
.activity-area {
  .title-area {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    &::after,
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: block;
      width: 42%;
      height: 1px;
      background: $border-gray-light;
    }
    &::after {
      right: 0;
    }
    &::before {
      left: 0;
    }
    h2.title {
      margin-bottom: 0;
      text-transform: uppercase;
      font-size: 12px;
    }
  }
  .box {
    li {
      display: flex;
      align-items: center;
      padding: 20px 30px;
      background: #fff;
      & + li {
        margin-top: 10px;
      }
      .pic {
        display: flex;
        align-items: center;
        width: 58px;
        img {
          display: block;
          width: 32px;
          & + img {
            margin-left: -35%;
          }
        }
      }
      .content {
        padding-left: 12px;
        padding-right: 25px;
        width: calc(100% - 82px);
        p,
        b {
          font-size: 14px;
        }
        span {
          color: rgba(24, 24, 24, 0.6);
        }
      }
      .more {
        width: 24px;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}
.earlier-area {
  margin-top: 40px;
}
</style>