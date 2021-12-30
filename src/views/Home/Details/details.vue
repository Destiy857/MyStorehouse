<template>
  <div class="articleBox">
    <div class="article-left">
      <div class="article-text">
        <ul>
          <li class="menu-title">目录</li>
          <li class="menu-item menu-item--lv2">用法</li>
          <li class="menu-item menu-item--lv2">配置</li>
          <li class="menu-item menu-item--lv3">development</li>
          <li class="menu-item menu-item--lv3">production</li>
          <li class="menu-item menu-item--lv3">none</li>
          <li class="menu-item menu-item--lv2">其他 NODE_ENV</li>
          <li class="menu-item menu-item--lv2">总结</li>
          <li class="menu-item menu-item--lv2">参考</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleById } from '../../../../mock/index.js'
export default {
  created () {
    getArticleById('1231231')
      .then((res) => {
        console.log('res', res)
      })
      .catch((err) => {
        alert(err)
      })
  }
}
</script>
<style lang="scss" scoped>
@import "highlight.js/scss/monokai-sublime.scss";
.articleBox {
  display: flex;
  position: relative;
}
.article-left {
  width: 300px;
  height: 100%;
  background: #fff;
  margin-left: 140px;
  margin-top: 20px;
  .article-text {
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 12px;
    color: #333;
    .menu-title {
      font-size: 20px;
      color: #333;
      border-bottom: 1px solid #ccc;
      padding: 8px 0;
    }
    ul li {
      list-style: none;
      padding: 5px 0;
    }
    .menu-item--lv2 {
      padding-left: 1em;
    }
    .menu-item--lv3 {
      padding-left: 2em;
    }
  }
  .article-text ul li:not(:first-child):hover {
    cursor: pointer;
  }
}
</style>
