// pages/aboutUs/aboutUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperH: "", //swiper高度
    nowIdx: 1, //当前swiper索引
    hideNav: true,
    currentPage: 5,
    imgList: [ 
      {
        ctitle: "管理团队",
        etitle: "分为公司运营管理层团队以及项目管理团队针对公司内外管理需求而设立 ",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/team02.png",
      }, {

        ctitle: "运营团队",
        etitle: "基于公司运营需求及客户代运营需求而设立的运营团队，主攻互联网营销",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/team01.png",
      }, {

        ctitle: "技术团队",
        etitle: "技术成员涵盖项目开发所需的设计师、开发工程师、测试工程师、技术运维人员",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/team04.png",
      }, {

        ctitle: "售后团队",
        etitle: "针对项目上线后出现一系列问题予以解答与对接，如技术指导，维护需求对接",
        imgsrc: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/team03.png",
      }
    ],
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  showNav: function() {
    this.setData({
      hideNav: !this.data.hideNav
    })
  }
})