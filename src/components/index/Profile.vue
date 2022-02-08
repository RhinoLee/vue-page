<template>
  <div class="profile-area">
    <div class="bg-area">
      <div class="wrap">
        <div class="share-area">
          <button class="share white-bg no-border">
            <img src="../../assets/images/icon/share.png" alt="share" />
          </button>
        </div>
        <div class="edit-area">
          <button class="edit white-bg no-border">
            <img src="../../assets/images/icon/edit.png" alt="edit" />
            <div>edit profile</div>
          </button>
          <button class="func white-bg no-border">
            <img
              src="../../assets/images/icon/setting_vertical.png"
              alt="setting"
            />
          </button>
        </div>
      </div>
    </div>
    <div class="info-area">
      <div class="wrap">
        <div class="avatar">
          <div class="avatar-wrap">
            <img
              src="../../assets/images/avatar/owl_bg.png"
              alt="Dmitry Kargaev"
            />
          </div>
        </div>
        <div class="profile">
          <div class="name-area">
            <div class="name">
              <h2>dmitry kargaev</h2>
              <a href="#" class="social icon">
                <img src="../../assets/images/icon/logo_gold.png" alt="in" />
              </a>
            </div>
            <div class="address">
              <a href="#" class="address icon">
                <img
                  src="../../assets/images/icon/location.png"
                  alt="Saint Petersburg, Russian Federation"
                />
              </a>
              <div>
                <span>Saint Petersburg, Russian Federation</span>
              </div>
            </div>
          </div>
          <div class="content-area">
            <p>
              Freelance UX/UI designer, 80+ projects in web design, mobile apps
              (iOS & android) and creative projects. Open to offers.
            </p>
          </div>
          <div class="button-area">
            <div href="#" class="btn blue-bg">
              <a href="#"><span>contact info</span></a>
            </div>
            <div href="#" class="btn white-bg">
              <a href="#"><span id="connections-num">1,043</span>connections</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile-area {
  .bg-area {
    position: relative;
    width: 100%;
    padding-top: 22%;
    background-image: url("~@/assets/images/pic/profile_bg.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    .wrap {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 20px;
      justify-content: space-between;
      img {
        width: 16px;
      }
    }
    .edit-area {
      display: flex;
    }
    button.edit {
      display: flex;
      align-items: center;
      margin-right: 10px;
      div {
        padding-left: 8px;
        text-transform: uppercase;
        font-size: 12px;
      }
    }
  }
  .info-area {
    position: relative;
    z-index: 1;
    padding-top: 26px;
    padding-bottom: 35px;
    background-color: #fff;
    .avatar {
      margin-top: -50px;
      width: 182px;
      padding-right: 12px;
      .avatar-wrap {
        width: 170px;
        height: 170px;
        border: 10px solid #ffffff;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    .profile {
      width: calc(100% - 182px);
      padding-left: 12px;
    }
    .content-area {
      p {
        line-height: 1.5; 
      }
    }
  }
  .name-area {
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
    .name {
      display: flex;
      h2 {
        margin: 0;
        padding-right: 8px;
        font-size: 18px;
        color: $text-dark;
        text-transform: capitalize;
      }
    }
    .address {
      display: flex;
      align-items: center;
      &.icon {
        padding-right: 8px;
      }
      span {
        vertical-align: middle;
        color: $text-dark;
      }
      img {
        width: 16px;
      }
    }
    a.social {
      display: block;
      img {
        width: 16px;
      }
    }
  }
  .button-area {
    display: flex;
    margin-top: 14px;
    .btn {
      width: 170px;
      justify-content: center;
    }
    .btn + .btn {
      margin-left: 15px;
    }
  }
}
</style>