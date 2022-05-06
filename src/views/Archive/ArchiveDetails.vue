<template>
  <div class="details">
    <!-- 头部 -->
    <div class="details-header">
      <div class="details-title">如何创建一个VueCli4脚手架</div>
      <div class="details-other">
        <span><i class="iconfont icon-account" /> THyo</span>
        <span><i class="iconfont icon-clock" /> 2021年11月19日 16:40:16</span>
        <span><i class="iconfont icon-browse" /> 999+</span>
        <span><i class="iconfont icon-atm" /> 12</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="detalis-content">
      <p>
        Vue CLI 是一个基于 Vue.js 进行快速开发的完整系统，提供： 通过 @vue/cli
        实现的交互式的项目脚手架。
      </p>
      <p>
        通过 @vue/cli + @vue/cli-service-global 实现的零配置原型开发。
        一个运行时依赖 (@vue/cli-service)，该依赖： 可升级； 基于 webpack
        构建，并带有合理的默认配置； 可以通过项目内的配置文件进行配置；
        可以通过插件进行扩展。
      </p>
      <p>一个丰富的官方插件集合，集成了前端生态中最好的工具。</p>
      <p>
        一套完全图形化的创建和管理 Vue.js 项目的用户界面。 Vue CLI 致力于将 Vue
        生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需
        eject。
      </p>
      <p>#该系统的组件 Vue CLI</p>
      <p>
        有几个独立的部分——如果你看到了我们的源代码，你会发现这个仓库里同时管理了多个单独发布的包。
      </p>
      <p>
        #CLI CLI (@vue/cli) 是一个全局安装的 npm 包，提供了终端里的 vue
        命令。它可以通过 vue create 快速搭建一个新项目，或者直接通过 vue serve
        构建新想法的原型。
      </p>
      <p>你也可以通过 vue ui 通过一套图形化界面管理你的所有项目。</p>
      <p>我们会在接下来的指南中逐章节深入介绍。</p>
      <p>
        #CLI 服务 CLI 服务 (@vue/cli-service) 是一个开发环境依赖。它是一个 npm
        包，局部安装在每个 @vue/cli 创建的项目中。
      </p>
      <p>CLI 服务是构建于 webpack 和 webpack-dev-server 之上的。</p>
      <p>它包含了： 加载其它 CLI 插件的核心服务；</p>
      <p>一个针对绝大部分应用优化过的内部的 webpack 配置；</p>
      <p>
        项目内部的 vue-cli-service 命令，提供 serve、build 和 inspect 命令。
        如果你熟悉 create-react-app 的话，@vue/cli-service 实际上大致等价于
        react-scripts，尽管功能集合不一样。
      </p>
      <p>CLI 服务章节涵盖了它的具体用法。</p>
      <p>
        #CLI 插件 CLI 插件是向你的 Vue 项目提供可选功能的 npm 包，例如
        Babel/TypeScript 转译、ESLint 集成、单元测试和 end-to-end 测试等。
      </p>
      <p>
        Vue CLI 插件的名字以 @vue/cli-plugin- (内建插件) 或 vue-cli-plugin-
        (社区插件) 开头，非常容易使用。
      </p>
      <p>
        当你在项目内部运行 vue-cli-service 命令时，它会自动解析并加载
        package.json 中列出的所有 CLI 插件。
      </p>
      <p>
        插件可以作为项目创建过程的一部分，或在后期加入到项目中。它们也可以被归成一组可复用的
        preset。我们会在插件和 preset 章节进行深入讨论。
      </p>
    </div>
    <!-- 评论 -->
    <div class="detalis-comment">
      <div class="detalis-comment-title web-font">
        <i class="iconfont icon-atm"></i> 发表评论
      </div>
      <div id="wangEditor"></div>
      <div class="wangEditor-btn">
        <el-button type="primary" class="web-font">发表评论</el-button>
      </div>
      <div class="detalis-comment-title web-font">
        <i class="iconfont icon-atm-away"></i> 精彩评价
      </div>
      <!-- 用户评价 -->
      <div class="detalis-comment-user">
        <el-timeline>
          <el-timeline-item
            timestamp="2021/4/12"
            placement="top"
            color="#bbcaf0"
            v-for="(item, key) in 4"
            :key="key"
          >
            <el-card>
              <h4>Update Github template</h4>
              <p>Tom committed 2021/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  setup(props) {
    onMounted(() => {
      let E = window.wangEditor;
      let editor = new E("#wangEditor");
      editor.create();
    });
  },
};
</script>
<style lang="less" scoped>
.details {
  .details-header {
    color: #525f7f;
    .details-title {
      text-align: center;
      font-size: 28px;
      font-weight: 600;
    }
    .details-other {
      font-weight: 600;
      margin-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      span {
        display: flex;
        align-items: center;
        margin-right: 25px;
        i {
          font-size: 20px;
        }
      }
    }
  }
  .detalis-content {
    margin-top: 50px;
    line-height: 30px;
    font-size: 16px;
    letter-spacing: 1px;
  }
  .detalis-comment {
    margin-top: 50px;
    .detalis-comment-title {
      font-weight: 700;
      font-size: 30px;
      padding: 20px 0;
      display: flex;
      align-items: center;
      color: #525f7f;
      .iconfont {
        font-size: 40px;
        margin-right: 4px;
      }
    }
    .wangEditor-btn {
      padding: 10px 0;
      display: flex;
      justify-content: flex-end;
      :deep(.el-button) {
        background: #97aee9;
        color: #fff;
        border: none;
        &:hover {
          background: #7997e2;
        }
      }
    }
  }
}
</style>