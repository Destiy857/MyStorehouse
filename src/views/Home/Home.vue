<template>
  <div class="box">
    <div class="box-column">
      <dataCard />
    </div>
    <div class="content-right">
      <div class="shadow-1 blog-item" v-for="(item,index) in articleList" :key="index">
        <div class="blog-box">
          <div class="blog-title" @click="jumpTo"><span>{{item.title}}</span></div>
          <div class="blog-text">
            <div class="item-span"><i class="iconfont icon-shijian"></i>{{item.createdAt | formatDates}}</div>
            <div class="item-span"><i class="iconfont icon-shuaxin"></i>{{item.updatedAt | formatDates}}</div>
            <div class="item-span"><i class="iconfont icon-wenjianjia"></i>{{item.category}}</div>
          </div>
          <div class="blog-summary">
            {{item.summary}}
            <span class="read-more" @click="jumpTo">阅读全文</span>
          </div>
          <div class="blog-bottom">
            <div class="blog-bottom-left">
              <div class="tag" v-for="obj,i in item.tagNames" :key="i">
                <i class="iconfont icon-biaoqian"></i><span>{{obj}}</span>
              </div>
            </div>
            <div class="blog-bottom-right">
              <div class="item-span"><i class="iconfont icon-chakan"></i><span>({{ item.viewCount }})</span></div>
              <div class="item-span"><i class="iconfont icon-liuyan"></i><span>({{ item.commentCount }})</span></div>
              <div class="item-span"><i class="iconfont icon-aixin"></i><span>({{ item.likeCount }})</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getList } from '../../../mock/index.js'
import dataCard from '../../components/dataCard.vue'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    dataCard
  },
  data () {
    return { articleList: [] }
  },
  created () {
    getList()
      .then((res) => {
        this.articleList = res.data
        console.log(this.articleList)
      })
      .catch((err) => {
        alert(err)
      })
  },
  methods: {
    jumpTo () {
      this.$router.push('/homeDetails')
    }
  }
}
</script>

<style lang='scss' scoped>
.box {
  display: flex;
}
.box-column {
  width: 300px;
  height: 100%;
  background: #fff;
  margin-left: 140px;
  margin-top: 20px;
  /* position: relative;
  top: 20px; */
}
.content-right {
  margin-left: 20px;
  margin-top: 20px;
  // display: flex;
  // flex-flow: column;
  // flex-wrap: wrap;
  .shadow-1 {
    background: #fff;
    width: 865px;
    height: 244px;
    margin-bottom: 12px;
    .blog-box {
      background-color: #fff;
      padding: 20px 30px;
      margin-bottom: 20px;
      .blog-title {
        font-size: 24px;
        span {
          cursor: pointer;
        }
      }
      .blog-text {
        display: flex;
        line-height: 2rem;
        color: #999;
        font-size: 13px;
        .item-span {
          margin-right: 12px;
          i {
            margin-right: 5px;
          }
        }
      }
      .blog-summary {
        line-height: 1.6em;
        margin: 15px 0 25px;
        .read-more {
          margin: 0 10px;
          font-size: 13px;
          color: #333;
        }
      }
      .blog-summary span:hover {
        color: #888888;
        cursor: pointer;
      }
      .blog-bottom {
        display: flex;
        line-height: 1.6em;
        color: #999;
        font-size: 13px;
        .blog-bottom-left {
          flex-grow: 1;
          display: flex;
          .tag {
            color: #ccc;
          }
        }
        .blog-bottom-right {
          flex-shrink: 0;
          display: flex;
          .item-span {
            margin-right: 12px;
          }
        }
      }
    }
  }
}
</style>
