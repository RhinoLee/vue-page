<template>
  <div class="courses-area"> 
    <div class="box">
      <h3 class="title">You may like these courses</h3>
      <div class="courses-box">
        <ul>
          <li>
            <div class="pic">
              <img src="../../assets/images/pic/courses_1.png" alt="">
            </div>
            <div class="intro">
              <h4 class="title">UX Foundations:Prototyping</h4>
              <span>27,959 viewers</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../../assets/images/pic/courses_2.png" alt="">
            </div>
            <div class="intro">
              <h4 class="title">Designing withAdobe XD and pro</h4>
              <span>9,122 viewers</span>
            </div>
          </li>
          <li>
            <div class="pic">
              <img src="../../assets/images/pic/courses_1.png" alt="">
            </div>
            <div class="intro">
              <h4 class="title">UX Foundations:Styles and GUIs</h4>
              <span>13,858 viewers</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="more-wrap">
        <a href="#">See all recomendations</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .courses-area {
    margin-top: 20px;
    .courses-box {
      padding-top: 20px;
      li {
        display: flex;
        align-items: center;
        & + li {
          padding-top: 15px;
        }
        .pic {
          margin-right: 15px;
          width: 80px;
        }
        .intro {
          width: calc(100% - 95px);
          h4.title {
            font-size: 14px;
          }
        }
      }
    }
    .more-wrap {
      margin-top: 25px;
    }
  }
</style>