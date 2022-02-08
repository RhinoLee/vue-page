<template>
  <div class="experience-area">
    <div class="wrap vertical">
      <h2 class="title">experience</h2>
      <div class="content">
        <div class="item">
          <div class="pic">
            <img src="@/assets/images/pic/experience_1.png" alt="" />
          </div>
          <div class="info">
            <h3 class="title">Freelance UX/UI designer</h3>
            <div class="sub-title">
              <span>Self Employed</span>
              <span>Around the world</span>
            </div>
            <div class="date">
              <span>Jun 2016 — Present</span>
              <span>3 yrs 3 mos</span>
            </div>
            <p class="desc">
              Work with clients and web studios as freelancer. Work in next
              areas: eCommerce web projects; creative landing pages; iOs and
              Android apps; corporate web sites and corporate identity
              sometimes.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <img src="@/assets/images/pic/experience_2.png" alt="" />
          </div>
          <div class="info">
            <h3 class="title">UX/UI designer</h3>
            <div class="sub-title">
              <span>Upwork</span>
              <span>International</span>
            </div>
            <div class="date">
              <span>Jun 2016 — Present</span>
              <span>3 yrs 3 mos</span>
            </div>
            <p class="desc">
              New experience with Upwork system. Work in next areas: UX/UI
              design, graphic design, interaction design, UX research.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.experience-area {
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
      .sub-title,
      .date {
        font-size: 0;
        span {
          display: inline-block;
          font-size: 12px;
          & + span {
            padding-left: 10px;
          }
        }
      }
      .sub-title {
        margin-bottom: 5px;
      }
      .date {
        span {
          & + span {
            color: $text-blue;
            font-weight: bold;
          }
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