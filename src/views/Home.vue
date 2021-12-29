<template>
  <div class="box">
    <div class="box-column">
      <div class="column-img">
        <img src="../assets/tou.jpg" />
        <p>梁家顺</p>
      </div>
      <div class="column-text">
        <p><i class="iconfont icon-weizhi"></i>广东-珠海</p>
        <p>2019年毕业于广州商学院</p>
        <p>是一枚前端工程师</p>
      </div>
      <div class="column-text">
        <a><i class="iconfont icon-github-fill"></i> liangjiashun</a>
      </div>
      <div class="column-button">
        <button><span>订阅</span> <i class="iconfont icon-dingyue"></i></button>
      </div>
      <div class="wire"></div>
      <div class="column-bottom">
        <div class="column-bottom-text">
          <div class="infoItem-count">7</div>
          <div class="infoItem-text">博文</div>
        </div>
        <div class="column-bottom-text">
          <div class="infoItem-count">7</div>
          <div class="infoItem-text">博文</div>
        </div>
        <div class="column-bottom-text">
          <div class="infoItem-count">7</div>
          <div class="infoItem-text">博文</div>
        </div>
      </div>
      <div class="wires"></div>
    </div>
    <div class="content-right">
      <div class="shadow-1 blog-item">
        <div class="blog-box">
          <div class="blog-title"><a href="">webpack4.0 Mode 配置项学习和总结</a></div>
          <div class="blog-text">
            <div class="item-span"><i class="iconfont icon-shijian"></i>2021-12-29</div>
            <div class="item-span"><i class="iconfont icon-shuaxin"></i>2021-12-29</div>
            <div class="item-span"><i class="iconfont icon-wenjianjia"></i>webpack</div>
          </div>
          <div class="blog-summary">
            production 模式下的配置项和 development 模式下的配置项是一样的，只是值不同。对比一下就可以发现，production 模式更看重的是性能，安全，大小。而 development 模式更重视打包后代码的可阅读性和报错的实时性。
            <a href="" class="read-more">阅读全文</a>
          </div>
          <div class="blog-bottom">
            <div class="blog-bottom-left">
              <div class="tag">
                <i class="iconfont icon-biaoqian"></i><span>webpack</span>
              </div>
            </div>
            <div class="blog-bottom-right">
              <div class="item-span"><i class="iconfont icon-chakan"></i><span>(41)</span></div>
              <div class="item-span"><i class="iconfont icon-liuyan"></i><span>(0)</span></div>
              <div class="item-span"><i class="iconfont icon-aixin"></i><span>(3)</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
}
</script>

<style lang='scss' scoped>
.box {
  display: flex;
}
.box-column {
  width: 300px;
  height: 488px;
  background: #fff;
  margin-left: 140px;
  margin-top: 20px;
  /* position: relative;
  top: 20px; */
}
.column-img {
  border-radius: 50%;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    margin-top: 30px;
    border-radius: 50%;
  }
}
.column-text {
  text-align: center;
  margin-top: 20px;
  p {
    font-size: 13px;
    color: #b3b3b3;
  }
  a {
    font-size: 14px;
    color: #333;
  }
}
.column-text a:hover {
  color: #b3b3b3;
}
.column-button {
  text-align: center;
  padding-top: 20px;
  button {
    background-color: #2462e6;
    border: none;
    color: white;
    padding: 5px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
  }
}
.wire {
  border-top: 3px solid #ccc;
  margin: 12px 24px 0;
}
.column-bottom {
  display: flex;
  padding: 10px 0;
}
.column-bottom-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  line-height: 1.6em;
}
.infoItem-count {
  font-size: 28px;
  height: 40px;
  line-height: 40px;
}
.infoItem-text {
  font-size: 12px;
  text-align: center;
  color: #ccc;
}
.column-bottom-text {
  text-align: center;
  p {
    line-height: 4px;
    font-size: 24px;
  }
}
.column-bottom-text p:nth-child(2) {
  color: #ccc;
  font-size: 13px;
}
.wires {
  border-top: 3px solid #ccc;
  margin: 0 24px;
}
.content-right {
  margin-left: 20px;
  margin-top: 20px;
  .shadow-1 {
    background: #fff;
    width: 865px;
    height: 244px;
    .blog-box {
      background-color: #fff;
      padding: 20px 30px;
      margin-bottom: 20px;
      .blog-title {
        font-size: 24px;
        a {
          cursor: pointer;
          color: inherit;
          text-decoration: none;
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
          text-decoration: underline;
          font-size: 13px;
          color: #333;
        }
      }
      .blog-summary a:hover {
        color: #888888;
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
