<template>
  <div class="skills-area">
    <div class="wrap vertical">
      <h2 class="title">Skills & Endoresments</h2>
      <div class="content">
        <div class="row">
          <div class="col-3 item">
            <div class="box">
              <div class="title-wrap">
                <span class="title">User experience (UX)</span>
                <span class="count">6</span>
              </div>
              <div class="people">
                <ul>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_1.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_2.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_3.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_4.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_5.png" alt="" />
                  </li>
                  <li class="col-2">
                    <div class="people-more"><span>+1</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-3 item">
            <div class="box">
              <div class="title-wrap">
                <span class="title">User experience (UX)</span>
                <span class="count">6</span>
              </div>
              <div class="people">
                <ul>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_1.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_2.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_3.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_4.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_5.png" alt="" />
                  </li>
                  <li class="col-2">
                    <div class="people-more"><span>+1</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-3 item">
            <div class="box">
              <div class="title-wrap">
                <span class="title">User experience (UX)</span>
                <span class="count">6</span>
              </div>
              <div class="people">
                <ul>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_1.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_2.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_3.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_4.png" alt="" />
                  </li>
                  <li class="col-2">
                    <img src="../../assets/images/pic/people_5.png" alt="" />
                  </li>
                  <li class="col-2">
                    <div class="people-more"><span>+1</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="more-wrap">
        <a href="#">show all (17)</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .skills-area {
    margin-top: 20px;
    padding-top: 30px;
    padding-bottom: 33px;
    background: #FFF;
  }
  .content {
    .box {
      border: 1px solid $border-gray;
      border-radius: 6px;
      padding: 14px; 
      padding-bottom: 16px;
    }
    .title-wrap {
      display: flex;
      justify-content: space-between;
    }
    span.title {
      font-size: 14px;
    }
    span.count {
      font-size: 14px;
      font-weight: bold;
      color: $text-blue;
    }
    .people {
      margin-top: 7px;
      ul {
        display: flex;
      }
      li {
        & + li {
          margin-left: -10px;
        }
        &:last-child {
          .people-more {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: $text-blue;
            span {
              color: #FFF;
            }
          }
        }
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .more-wrap {
    margin-top: 25px;
  }
</style>