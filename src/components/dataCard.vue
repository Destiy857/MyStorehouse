<template>
  <div>
    <div class="column-img">
      <img src="../assets/123.jpg" />
      <p>梁家顺</p>
    </div>
    <div class="column-text">
      <p><i class="iconfont icon-weizhi"></i>广东-珠海</p>
      <p>2019年毕业于广州商学院</p>
      <p>是一枚前端工程师</p>
    </div>
    <div class="column-text">
      <a href="https://github.com/Destiy857/MyStorehouse"><i class="iconfont icon-github-fill"></i> liangjiashun <i class="iconfont icon-fenxiang"></i></a>
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.box-column {
  width: 300px;
  height: 100%;
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
    text-decoration: none;
  }
}
.column-text a:hover {
  color: #b3b3b3;
  transform: #000;
}
.column-button {
  text-align: center;
  padding-top: 20px;
  button {
    background-color: #2462e6;
    border: none;
    color: white;
    padding: 6px 36px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s;
  }
}
.column-button button:hover {
  background-color: #4c80f0;
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
  margin: 0 24px 12px;
}
</style>
