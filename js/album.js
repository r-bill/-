new Vue({
  el: "#app",
  data: {
    timer: null, //定时器
    active_index: 0, //当前轮播下标
    is_prev: false, //是否点击上一张(控制吃豆人朝向)
    // 轮播图数据(json格式)
    list: [
      {
        title: "八年级合照",
        image: "../img/1-img/1-1.jpg",
        bottom_color: "rgb(35, 11, 11)",
        
      },
      {
        title: "预约直播送泳装手办！",
        image: "../img/6-img/2.webp",
        bottom_color: "rgb(133, 158, 184)",
      },
      {
        title: "【周杰伦】《红颜如霜》MV首播!",
        image: "../img/6-img/3.webp",
        bottom_color: "rgb(70, 53, 53)",
      },
      {
        title: "没事我先挂了，下个世界见",
        image: "../img/6-img/4.webp",
        bottom_color: "rgb(64, 77, 109)",
      },
      {
        title: "4台手机自由落体……进来围观！>>",
        image: "../img/6-img/5.webp",
        bottom_color: "rgb(40, 31, 25)",
      },
      {
        title: "在殡仪馆拍婚纱照原来也可以这么美",
        image: "../img/6-img/6.webp",
        bottom_color: "rgb(164, 141, 110)",
      },
      {
        title: "打扰一下，请问您听过虚拟主播的天籁之音吗？",
        image: "../img/6-img/7.webp",
        bottom_color: "rgb(136, 110, 90)",
      },
      {
        title: "写笔记，拿奖金，争做笔记课代表！",
        image: "../img/6-img/8.webp",
        bottom_color: "rgb(147, 164, 198)",
      },
      {
        title: "从此，龙王有了专属BGM！",
        image: "../img/6-img/9.webp",
        bottom_color: "rgb(54, 45, 27)",
      },
    ],
  },
  methods: {
    // 停止轮播
    stopAutoPlay() {
      // 清空定时器
      for (let i = 0; i <= this.timer; i++) {
        clearInterval(i);
      }
    },
    // 开始轮播
    startAutoPlay() {
      // 停止轮播
      this.stopAutoPlay();
      let _t = this;
      this.timer = setInterval(function () {
        _t.active_index++;
        if (_t.active_index > _t.list.length - 1) {
          _t.active_index = 0;
        }
        _t.is_prev = false;
        _t.changeBanner(_t.active_index);
      }, 3000);
    },
    // 切换banner 参数:index=轮播下标(点击上一张,下一张按钮时,该值为-1;点击指示器时,该值为对应的轮播下标),is_prev=是否上一张(true为上一张,false为下一张)
    changeBanner(index, is_prev) {
      if (index >= 0) {
        // 点击指示器时
        // 默认是下一张,吃豆人向右
        this.is_prev = false;
        if (index < this.active_index) {
          // 点击时轮播下标小于当前轮播下标时,则为上一张,吃豆人向左
          this.is_prev = true;
        }
        // 设置当前轮播下标
        this.active_index = index;
      } else {
        // 点击按钮时
        if (is_prev) {
          // 上一张
          this.active_index--;
          if (this.active_index < 0) {
            this.active_index = this.list.length - 1;
          }
        } else {
          // 下一张
          this.active_index++;
          if (this.active_index > this.list.length - 1) {
            this.active_index = 0;
          }
        }
        // 指明上一张或下一张
        this.is_prev = is_prev;
      }
      // --m-left,--c-color是css的自定义属性,可通过var函数进行调用
      // 设置偏移量以达到显示指定图片的目的
      document
        .querySelector(".img-box")
        .style.setProperty("--m-left", this.active_index);
      // 设置图片底部的渐变效果
      document
        .querySelector(".bottom-box")
        .style.setProperty(
          "--b-color",
          this.list[this.active_index].bottom_color
        );
    },
  },
  mounted() {
    // 初始化,自动轮播
    this.startAutoPlay();
  },
});
