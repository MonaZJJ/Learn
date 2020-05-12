// pages/home/home.js
Page({
  data: {
    //轮播图
    indicatorDots: true, //小点
    swiperH: "", //swiper高度
    nowIdx: 1, //当前swiper索引
    sIdx: 1,
   
    imgList: [ //图片列表
      {
        aurl: "/pages/proHotel/proHotel",
        bgColor: "#f98756",
        ctitle: "酒店小程序",
        etitle: "Hotel applet",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/hotel.png",
      }, {
        aurl: "/pages/e-commerce/e-commerce",
        bgColor: "#5393fe",
        ctitle: "电商小程序",
        etitle: "E-commerce applet",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/e-commerce.png",
      }, {
        aurl: "/pages/proCatering/proCatering",
        bgColor: "#f25674",
        ctitle: "餐饮小程序",
        etitle: "Catering applet",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/eat.png",
      }, {
        aurl: "/pages/proBeauty/proBeauty",
        bgColor: "#4e8bf1",
        ctitle: "美妆小程序",
        etitle: "Beauty makeup applet",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/beauty.png",
      }, {
        aurl: "/pages/proMedical/proMedical",
        bgColor: "#12e3fa",
        ctitle: "医疗小程序",
        etitle: "Medical applet",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/medical.png",
      }, {
        aurl: "/pages/proEducation/proEducation",
        bgColor: "#8bacf1",
        ctitle: "教育小程序",
        etitle: "Education applet",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/edu.png",
      }, {
        aurl: "/pages/proCar/proCar",
        bgColor: "#5393fe",
        ctitle: "汽车小程序",
        etitle: "Car applet",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/car.png",
      }, {
        aurl: "/pages/proProperty/proProperty",
        bgColor: "#ff8d94",
        ctitle: "物业小程序",
        etitle: "Property applet",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/property.png",
      }, {
        aurl: "/pages/proWedding/proWedding",
        bgColor: "#e380a1",
        ctitle: "婚庆小程序",
        etitle: "Wedding celebration applet",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/wedding.png",
      },
      {
        aurl: "/pages/settle/settle",
        bgColor: "transparent",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/more.png",
      }
    ],
    swiperList: [{
      aurl: "/pages/orderFood/orderFood",
        stitle: "广州酒家校园订餐小程序",
        content: "随着餐饮行业市场情况瞬息万变，广州酒家为了向校园进军，开拓校园市场，与广州互诚科技达成协议",
        src: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/product-01.png",
        txt: "查看更多 >"
      },
      {
        aurl: "/pages/homeSource/homeSource",
        stitle: "合富置业房源",
        content: "为满足O2O需求，互诚科技与合富置业签订战略合作协议，开发线上线下服务场景打通的房地产小程序，线下房源信息",
        src: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/product-02.png",
        arrow: "/images/img/arrow.png"
      },
      {
        aurl: "/pages/wxFans/wxFans",
        stitle: "微信粉丝CRM管理小程序",
        content: "广州太古汇购物中心因业务发展需要，就微信公众号面向第三方服务商寻找项目开发合作伙伴，最终选中广州互诚科技，为其开发微信公众号CRM粉丝管理系统",
        src: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/product-03.png",
        txt: "查看更多 >"
      },
      {
        aurl: "/pages/successCases/successCases",
        src: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/more.png",
      }
    ],
    currentPage: 1,
    hideNav: true,
    //滚动条数据
    customerList: [{
      ImgUrl: "/images/img/customer01.png",
    }, {
      ImgUrl: "/images/img/customer02.png",
    }, {
      ImgUrl: "/images/img/customer03.png",
    }, {
      ImgUrl: "/images/img/customer04.png",
    }, {
      ImgUrl: "/images/img/customer05.png",
    }, {
      ImgUrl: "/images/img/customer06.png",
    }, {
      ImgUrl: "/images/img/customer07.png",
    }, {
      ImgUrl: "/images/img/customer08.png",
    }, ],

  },

  //获取swiper高度
  getHeight: function(e) {
    var winWid = wx.getSystemInfoSync().windowWidth; //获取当前屏幕的宽度
    var imgh = e.detail.height; //图片高度
    var imgw = e.detail.width;
    var sH = winWid * imgh / imgw + "px"
    this.setData({
      swiperH: sH //设置高度
    })
  },

  //swiper滑动事件
  swiperChange: function(e) {
    this.setData({
      nowIdx: e.detail.current
    })
  },

  //swiper滑动事件
  successChange: function(e) {
    this.setData({
      sIdx: e.detail.current
    })
  },

  // 拨打电话
  toCallTelPhone: function() {
    wx.makePhoneCall({
      phoneNumber: '020-29075170',
    })
  },

  // 拨打手机
  toCallMobilePhone: function() {
    wx.makePhoneCall({
      phoneNumber: '18011971195',
    })
  },

  //展示 
  showNav: function() {
    this.setData({
      hideNav: !this.data.hideNav
    })
  },

  //第一
  goApply: function() {
    wx.navigateTo({
      url: '/pages/apply/apply',
    })
  },
  //第二
  goPrice: function() {
    wx.navigateTo({
      url: '/pages/price/price',
    })
  },
  //第三
  goReceive: function() {
    wx.navigateTo({
      url: '/pages/receive/receive',
    })
  },
  //第四
  goWork: function() {
    wx.navigateTo({
      url: '/pages/work/work',
    })
  },
  //第五
  goMoney: function() {
    wx.navigateTo({
      url: '/pages/money/money',
    })
  },

  //第六
  goDetail: function() {
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function (res) {
    var that = this;
    return {
      title: '互诚科技',
      path: '/pages/home/home' ,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})