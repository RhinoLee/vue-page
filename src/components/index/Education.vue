<template>
  <div class="education-area">
    <div class="wrap vertical">
      <h2 class="title">education</h2>
      <div class="content">
        <div class="item">
          <div class="pic">
            <img src="../../assets/images/pic/education.png" alt="" />
          </div>
          <div class="info">
            <h3 class="title">Moscow State Linguistic University</h3>
            <p class="intro">
              Bachelor's degree Field Of StudyComputer and Information Systems
              Security/Information Assurance
            </p>
            <div class="date">
              <span>2013 - 2017</span>
            </div>
            <p class="desc">
              Additional English classes and UX profile courses​.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.education-area {
  margin-top: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
  background: #fff;
  .content {
    .item {
      padding-top: 20px;
      padding-bottom: 25px;
      display: flex;
      & + .item {
        border-top: 1px solid $border-gray;
      }
      h3.title {
        margin-bottom: 10px;
      }
      .pic {
        width: 54px;
      }
      .info {
        padding-left: 16px;
        width: calc(100% - 54px);
      }
      .date {
        span {
          font-size: 12px;
        }
      }
      p.desc {
        margin-top: 10px;
        line-height: 1.5;
      }
    }
  }
}
</style>