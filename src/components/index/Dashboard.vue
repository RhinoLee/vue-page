<template>
  <div class="dashboard-area"> 
    <div class="box">
      <div class="title-area">
        <h3 class="title">your dashboard</h3>
        <a href="#">GO TO STATS</a>
      </div>
      <div class="count-area">
        <ul>
          <li>
            <span class="count">367</span>
            <span class="cate">views today</span>
          </li>
          <li>
            <span class="count">15</span>
            <span class="cate">posts views</span>
          </li>
          <li>
            <span class="count">9</span>
            <span class="cate">search appereances</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dashboard-area {
    // .box {
    //   padding-top: 25px;
    //   padding-bottom: 30px;
    //   padding-left: 30px;
    //   padding-right: 30px;
    //   background: #FFF;
    // }
    // .title-area {
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   border-bottom: 1px solid $border-gray;
    //   padding-bottom: 20px;
    //   h3, a {
    //     // line-height: 1;
    //     // vertical-align: bottom;
    //     font-size: 12px;
    //     text-transform: uppercase;
    //   }
    //   a {
    //     display: block;
    //     border-bottom: 1px solid $border-blue;
    //     color: $text-blue;
    //   }
    // }
    .count-area {
      padding-top: 20px;
      li {
        & + li {
          padding-top: 18px;
        }
        .count {
          display: flex;
          flex-direction: column;
          font-size: 52px;
          font-weight: bold;
          color: $text-blue
        }
      }
    }
  }
</style>