<template>
  <div class="archive">
    <div class="archive-header top-padding">
      <div class="archive-haeder-title web-font">
        <p>文章归档</p>
        <p>The Article Archive</p>
      </div>
    </div>
    <div class="archive-content particles">
      <div
        class="archive-content-layout"
        :class="
          $route.name == 'ArchiveDetails'
            ? 'archive-content-details-layout'
            : ''
        "
      >
        <div class="archive-content-left">
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
        <div class="archive-content-right" v-archiveRightScroll>
          <!-- 标签 -->
          <div class="archive-label">
            <div class="archive-right-title web-font">标签</div>
            <div class="archive-right-content">
              <ul class="archive-labe-ul">
                <li
                  v-for="(item, key) in labels"
                  :key="key"
                  @click="goRouter('archive/list')"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>
          <!-- 分类 -->
          <div class="archive-class">
            <div class="archive-right-title web-font">分类</div>
            <div class="archive-right-content">
              <el-menu
                default-active="1-1"
                class="archive-right-menu"
                active-text-color="#525f7f"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <i class="iconfont icon-HTML"></i>
                    <span>前端技术栈</span>
                  </template>
                  <el-menu-item index="1-1" @click="goRouter('archive/list')"
                    >CSS样式</el-menu-item
                  >
                  <el-menu-item index="1-2" @click="goRouter('archive/list')"
                    >HMTL教程</el-menu-item
                  >
                  <el-menu-item index="1-3" @click="goRouter('archive/list')"
                    >JavaScript进阶</el-menu-item
                  >
                </el-sub-menu>
                <el-sub-menu index="2">
                  <template #title>
                    <i class="iconfont icon-houduankaifa"></i>
                    <span>后端技术栈</span>
                  </template>
                  <el-menu-item index="2-1" @click="goRouter('archive/list')"
                    >Java编程</el-menu-item
                  >
                </el-sub-menu>
                <el-menu-item index="3" @click="goRouter('archive/list')">
                  <i class="iconfont icon-all1"></i>
                  <span>其他</span>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
        </div>
        <span class="msg web-font" />
      </div>
    </div>
  </div>
</template>
<script>
import { nextTick, onMounted, reactive, ref } from "vue";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
export default {
  setup(props) {
    //  标签
    let labels = reactive([
      { name: "Vue" },
      { name: "SEO" },
      { name: "JavaScript" },
      { name: "CSS" },
      { name: "HTML" },
      { name: "编程" },
      { name: "网站优化" },
      { name: "Nuxt.js" },
      { name: "React" },
    ]);
    // 打字机效果
    let typed = null;
    onMounted(() => {
      typed = new Typed(".msg", {
        strings: ["很好! 目前共计 132 篇日志。 继续努力。"],
        startDelay: 100,
        loop: false,
        loopCount: 1,
        backDelay: 3000,
        typeSpeed: 150,
      });
    });

    const router = useRouter();
    function goRouter(url) {
      router.push(`/${url}`);
    }

    // 背景重置

    // 路由监听

    return {
      goRouter,
      labels,
    };
  },
  directives: {
    archiveRightScroll: {
      mounted: function (el) {
        window.addEventListener("scroll", () => {
          // 滚动距离
          var scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop > 300) {
            el.style.transform = `translateY(${scrollTop - 400 + 100}px)`;
          } else {
            el.style.transform = `translateY(0px)`;
          }
        });
      },
    },
  },
};
</script>
<style lang="less" scoped>
.archive {
  background: rgb(252, 252, 252);
  .archive-header {
    position: relative;
    z-index: 1;
    height: 500px;
    background-image: linear-gradient(#000000e5 5%, rgba(27, 27, 27, 0.048) 55%),
      url("../../static/images/archive-1.jpg");
    background-repeat: no-repeat;
    background-position-x: center;
    background-blend-mode: darken;
    background-size: 1920px;
    .archive-haeder-title {
      margin-top: 100px;
      p {
        font-weight: 700;
        font-size: 35px;
        text-align: center;
        color: #fff;

        &:nth-child(1) {
          letter-spacing: 3px;
        }
        &:nth-child(2) {
        }
      }
    }
  }
  .archive-content {
    position: relative;
    .archive-content-layout {
      position: relative;
      z-index: 1;
      width: 1210px;
      margin: 0 auto;
      transform: translateY(-100px);
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      transition: all 0.2s;
      .archive-content-left {
        width: 870px;
        min-height: 500px;
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        padding: 30px;
        box-sizing: border-box;
        transition: all 0.2s;
      }
      .archive-content-right {
        width: 300px;
        height: 100%;
        right: 0;
        transition: all 0.2s;
        .archive-label {
          // height: 200px;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
          border-radius: 5px;
          box-sizing: border-box;
          padding: 10px 10px 20px 10px;
          .archive-labe-ul {
            display: flex;
            flex-wrap: wrap;
            li {
              color: #fff;
              flex: none;
              padding: 5px 8px;
              background: #bbcaf0;
              margin-top: 10px;
              margin-right: 6px;
              border-radius: 5px;
              cursor: pointer;
            }
          }
        }
        .archive-class {
          margin-top: 20px;
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
          border-radius: 5px;
          box-sizing: border-box;
          padding: 10px;
        }
        .archive-right-title {
          text-align: center;
          font-size: 20px;
          color: #525f7f;
          border-bottom: 2px solid #bbcaf0;
          padding-bottom: 10px;
        }
        .archive-right-content {
          :deep(.archive-right-menu) {
            border-right: none;
            background-color: transparent;
            .el-menu {
              background-color: transparent;
            }
            .el-sub-menu__title,
            .el-menu-item {
              color: #525f7f;
            }
            .iconfont {
              margin-right: 3px;
              font-size: 18px;
            }
          }
        }
      }
      .msg {
        position: absolute;
        top: -23px;
        left: 0;
        color: whitesmoke;
        letter-spacing: 1px;
        display: inline-block;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>