 首页背景图：尺寸 1920px  1080px 
 
<template>
  <div class="Home">
    <div class="Home-header top-padding" ref="homeHeader">
      <!-- 个人信息 -->
      <div class="userInfo" @click="cutBack">
        <img src="../static/images/thyo-photo.jpg" alt="" />
        <p class="name web-font">THYO'S BLOG</p>
        <span class="signature web-font"></span>
      </div>
    </div>
    <div class="Home-content particles">
      <!-- 文章 -->
      <div class="article">
        <div class="article-item" v-for="(item, key) in 2" :key="key">
          <!-- 鼠标未进入 -->
          <div class="article-item-leave">
            <img src="../static/images/img-1.jpg" alt="" />
          </div>
          <!-- 标题 -->
          <div class="article-item-title">如何创建一个VueCli4脚手架</div>
          <!-- 鼠标进入显示 -->
          <div class="article-item-enter">
            <div class="article-brief">
              Vue (读音 /vjuː/，类似于 view)
              是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue
              被设计为可以自底向上逐层应用。Vue
              的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue
              也完全能够为复杂的单页应用提供驱动。 Vue 提供了一个官方的
              CLI，为单页面应用 (SPA)
              快速搭建繁杂的脚手架。它为现代前端工作流提供了功能齐备的构建设置。
            </div>
            <div class="article-info">
              <span><i class="iconfont icon-account" /> THyo</span>
              <span
                ><i class="iconfont icon-clock" /> 2021年11月19日 16:40:16</span
              >
              <span
                ><i class="iconfont icon-atm" />
                学习了学习了，真的不错~~！</span
              >
              <span><i class="iconfont icon-browse" /> 999+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  setup(props) {
    let homeHeader = ref(null);
    let backIndex = 1; //背景图Index
    // 切换背景图
    function cutBack() {
      let img = require(`../static/images/img-${backIndex}.jpg`);
      homeHeader.value.style.backgroundImage = `linear-gradient(#000000e5 5%, rgba(27, 27, 27, 0.048) 55%),url(${img})`;
      if (backIndex >= 5) {
        backIndex = 1;
      } else {
        backIndex++;
      }
    }
    // 打字机效果
    let typed = null;
    onMounted(() => {
      typed = new Typed(".signature", {
        strings: [
          "我知你饱览过名山大川",
          "而我只是江南一座低矮的青山",
          "但轻舟过万重",
          "青山依旧在",
        ],
        startDelay: 100,
        loop: false,
        loopCount: 1,
        backDelay: 3000,
        typeSpeed: 100,
        showCursor: true,
        onComplete: (res) => {
          setTimeout(() => {
            if (document.querySelector(".typed-cursor") != null) {
              document.querySelector(".typed-cursor").style.opacity = "0";
            }
          }, 700);
        },
      });
    });
    return {
      homeHeader,
      cutBack,
    };
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.Home {
  .Home-header {
    position: relative;
    z-index: 1;
    background-image: linear-gradient(#000000e5 5%, rgba(27, 27, 27, 0.048) 55%),
      url("../static/images/img-4.jpg");
    background-repeat: no-repeat;
    background-position-x: center;
    background-blend-mode: darken;
    background-size: 1920px;
    height: 1080px;
    .userInfo {
      margin-top: 250px;
      text-align: center;
      color: #fff;
      img {
        width: 120px;
        border-radius: 50%;
      }
      .name {
        margin-top: 10px;
        font-weight: 700;
        font-size: 40px;
        letter-spacing: 1px;
      }
      .signature {
        margin-top: 50px;
        font-size: 20px;
        letter-spacing: 1px;
      }
    }
  }
  .Home-content {
    .article {
      z-index: 1;
      position: relative;
      width: 1000px;
      margin: 0px auto 0 auto;
      transform: translate(0, -100px);
      .article-item {
        position: relative;
        width: 100%;
        height: 350px;
        background: rgb(255, 255, 255);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        border-radius: 10px;
        overflow: hidden;
        cursor: pointer;
        box-sizing: border-box;
        padding: 20px;
        margin-bottom: 40px;
        .article-item-leave {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 350px;
          filter: brightness(70%);
          transition: all 0.25s;
          img {
            transition: all 0.25s;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
          }
        }
        .article-item-title {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-weight: 700;
          font-size: 30px;
          color: #fff;
          transition: all 0.25s;
        }
        .article-item-enter {
          position: absolute;
          left: 0;
          bottom: 0;
          color: #fff;
          padding: 0 20px;
          opacity: 0;
          transition: all 0.25s;
          transform: translateY(50px);
          .article-brief {
            border-bottom: 1px solid #fff;
            padding-bottom: 10px;
            line-height: 23px;
          }
          .article-info {
            height: 50px;
            display: flex;
            align-items: center;
            span {
              display: flex;
              align-items: center;
              margin-right: 35px;
              i {
                font-size: 20px;
                margin-right: 3px;
              }
            }
          }
        }
        &:hover {
          .article-item-leave {
            filter: brightness(70%) blur(5px);
            img {
              width: 110%;
            }
          }
          .article-item-title {
            top: 35%;
            letter-spacing: 1px;
          }
          .article-item-enter {
            opacity: 1;
            transform: translateY(0px);
          }
        }
      }
    }
  }

  .typed-cursor {
    opacity: 1;
  }
  .typed-cursor.typed-cursor--blink {
    animation: typedjsBlink 0.7s infinite;
    -webkit-animation: typedjsBlink 0.7s infinite;
    animation: typedjsBlink 0.7s infinite;
  }
  @keyframes typedjsBlink {
    50% {
      opacity: 0;
    }
  }
  @-webkit-keyframes typedjsBlink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
:deep(.typed-cursor) {
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  opacity: 1;
  animation: typedjsBlink 0.7s infinite;
  -webkit-animation: typedjsBlink 0.7s infinite;
  animation: typedjsBlink 0.7s infinite;
  @keyframes typedjsBlink {
    50% {
      opacity: 0;
    }
  }
}
</style>
 