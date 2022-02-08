<template>
  <div class="victors-area"> 
    <div class="box">
      <div class="title-area">
        <h3 class="title">victors</h3>
        <a href="#">view all</a>
      </div>
      <div class="victors-box">
        <ul>
          <li>
            <div class="pic">
              <img src="../../assets/images/pic/victors_1.png" alt="">
            </div>
            <div class="intro">
              <h4 class="title">Darlene Black</h4>
              <span>HR-manager, 10 000 connec...</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../../assets/images/pic/victors_2.png" alt="">
            </div>
            <div class="intro">
              <h4 class="title">Theresa Steward</h4>
              <span>iOS developer</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../../assets/images/pic/victors_3.png" alt="">
            </div>
            <div class="intro">
              <h4 class="title">Brandon Wilson</h4>
              <span>Senior UX designer</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../../assets/images/pic/victors_4.png" alt="">
            </div>
            <div class="intro">
              <h4 class="title">Kyle Fisher</h4>
              <span>Product designer at Com...</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../../assets/images/pic/victors_5.png" alt="">
            </div>
            <div class="intro">
              <h4 class="title">Audrey Alexander</h4>
              <span>Team lead at Google</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .victors-area {
    margin-top: 20px;
    .title-area {
      a {
        border-bottom: none;
      }
    }
    .victors-box {
      padding-top: 20px;
      li {
        display: flex;
        align-items: center;
        & + li {
          padding-top: 15px;
        }
        .pic {
          margin-right: 15px;
          width: 52px;
        }
        .intro {
          width: calc(100% - 67px);
          h4.title {
            font-size: 14px;
          }
        }
      }
    }
  }
</style>