<template>
  <div id="footer">
    <div class="container">
      <div class="main-area">
        <div class="logo-area">
          <div class="logo-pic">
            <img src="../assets/images/icon/logo.png" alt="Linkedin" />
          </div>
          <div class="logo-text">Linked<span>In</span></div>
        </div>
        <div class="navigation-area">
          <h4 class="title">navigation</h4>
          <div class="box">
            <div class="item col-3">
              <ul>
                <li><a href="#">about</a></li>
                <li><a href="#">careers</a></li>
                <li><a href="#">advertising</a></li>
                <li><a href="#">small business</a></li>
              </ul>
            </div>
            <div class="item col-3">
              <ul>
                <li><a href="#">talent solutions</a></li>
                <li><a href="#">marketing solutions</a></li>
                <li><a href="#">sales solutions</a></li>
                <li><a href="#">safery center</a></li>
              </ul>
            </div>
            <div class="item col-3">
              <ul>
                <li><a href="#">community guidelines</a></li>
                <li><a href="#">privacy & terms</a></li>
                <li><a href="#">mobile app</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="access-area">
          <h4 class="title">fast access</h4>
          <div class="button-area">
            <button class="blue-bg">
              <span>questions?</span
              ><i><img src="../assets/images/icon/help_circle.png" alt="" /></i>
            </button>
            <button class="white-bg">
              <span>settings</span
              ><i><img src="../assets/images/icon/settings.png" alt="" /></i>
            </button>
          </div>
        </div>
      </div>
      <div class="side-area">
        <div class="language-area">
          <h4 class="title">language</h4>
          <div class="selector">
            <select>
              <option value="en">english</option>
              <option value="tw">taiwanese</option>
              <option value="jp">japanese</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
}
#footer {
  border-top: 1px solid $border-gray-light;
  margin-top: 40px;
  padding-top: 30px;
  padding-bottom: 53px;
  background: #f7f9fb;
  h4.title {
    margin-bottom: 20px;
  }
  .main-area, .side-area {
    padding-top: 0;
  }
  .main-area {
    display: flex;
    .logo-area {
      margin-right: 8%;
      width: 7%;
      .logo-pic {
        margin-bottom: 12px;
        img {
          display: block;
          width: 46px;
        }
      }
      .logo-text,
      .logo-text span {
        font-size: 14px;
        font-weight: bold;
        line-height: 0;
      }
      .logo-text {
        display: flex;
        align-items: flex-end;
        flex-wrap: nowrap;
        padding-top: 12px;
        span {
          color: $text-blue;
        }
      }
    }
    .navigation-area {
      margin-right: 7%;
      width: 57%;
      .box {
        display: flex;
        margin-left: -18px;
        margin-right: -18px;
        .col-3 {
          margin-left: 18px;
          margin-right: 18px;
        }
        .item {
          a {
            color: $text-dark;
            text-transform: capitalize;
          }
          li + li {
            margin-top: 10px;
          }
        }
      }
    }
    .access-area {
      width: 21%;
      .button-area {
        button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding-right: 17px;
          padding-left: 17px;
          & + button {
            margin-top: 10px;
          }
          i {
            width: 16px;
            img {
              display: block;
              width: 100%;
            }
          }
        }
      }
    }
  }
  .language-area {
    .selector {
      position: relative;
      &::after {
        content: url("~@/assets/images/icon/chevron-down.png");
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 14px;
        height: 14px;
        pointer-events: none;
      }
    }
    select {
      position: relative;
      border: none;
      padding: 10px 15px;
      width: 100%;
      outline: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      -webkit-appearance: none;
      -moz-appearance: none;
    }
  }
}
</style>