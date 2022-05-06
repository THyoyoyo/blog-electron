<template>
  <div class="article-item">
    <!-- 鼠标未进入 -->
    <div class="article-item-leave">
      <img src="@/static/images/img-4.jpg" alt="" />
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
        <span><i class="iconfont icon-clock" /> 2021年11月19日 16:40:16</span>
        <span><i class="iconfont icon-atm" /> 学习了学习了，真的不错~~！</span>
        <span><i class="iconfont icon-browse" /> 999+</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.article-item {
  position: relative;
  width: 100%;
  height: 150px;
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;
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
    font-size: 22px;
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
      height: 40px;
      line-height: 23px;
      text-overflow: ellipsis; /*设置隐藏部分为省略号*/
      overflow: hidden; /*设置隐藏*/
      display: -webkit-box;
      -webkit-line-clamp: 2; /*设置显示行数，此处为2行，可设置其他数字*/
      -webkit-box-orient: vertical;
    }
    .article-info {
      height: 40px;
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
      top: 15%;
      letter-spacing: 1px;
    }
    .article-item-enter {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
</style>