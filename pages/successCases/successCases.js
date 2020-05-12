const app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideNav: true,
    currentPage: 3,
    currentTab: 0,
    // navTab: [{
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success01.png",
    //     text: "全部",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success01-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success07.png",
    //     text: "酒店",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success07-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success02.png",
    //     text: "电商",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success02-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success03.png",
    //     text: "餐饮",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success03-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success08.png",
    //     text: "美妆",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success08-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success11.png",
    //     text: "医疗",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success11-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success06.png",
    //     text: "教育",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success06-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success09.png",
    //     text: "汽车",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success09-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success10.png",
    //     text: "物业",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success10-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success05.png",
    //     text: "婚庆",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success05-on.png"
    //   },
    //   {
    //     imgUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success04.png",
    //     text: "房产",
    //     clickUrl: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/success04-on.png"
    //   },
    // ],
    caseList: [{
        aurl: "/pages/homeSource/homeSource",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/item03.png",
        title: "合富置业房源小程序",
        detail: "为满足O2O需求，互诚科技与合富置业签订战略合作协议，开发线上线下服务场景打通的房地产小程序，线下房源信息"
      },
      {
        aurl: "/pages/wxFans/wxFans",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/item04.png",
        title: "微信粉丝CRM管理小程序",
        detail: "广州太古汇购物中心因业务发展需要，就微信公众号面向第三方服务商寻找项目开发合作伙伴，最终选中广州互诚科技为其开发"
      },
      {
        aurl: "/pages/photos/photos",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/item01.png",
        title: "玩转手摄电商小程序",
        detail: "互诚科技在与优客科技沟通后，此项目旨在为手机摄影爱好者谋福利，故全力配合开发。此小程序为手机摄影爱好者"
      },
      {
        aurl: "/pages/play/play",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/item02.png",
        title: "丹尼熊享购小程序",
        detail: "为开发市场以及提升品牌效应，熊呗科技与互诚科技达成战略合作协议，共同合作开发出一款全新的丹尼熊分享购微信小程序商城"
      },
      {
        aurl: "/pages/orderFood/orderFood",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/item05.png",
        title: "广州酒家校园订餐小程序",
        detail: " 随着餐饮行业市场情况瞬息万变，广州酒家为了向校园进军，开拓校园市场，与广州互诚科技达成协议，为了向校园师生提供订餐服务"
      },
      {
        aurl: "/pages/sell/sell",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/item06.png",
        title: "康美时代新零售商城小程序",
        detail: "为开发市场以及提升品牌效应，熊呗科技与互诚科技达成战略合作协议，共同合作开发出一款全新的丹尼熊分享购微信小程序商城"
      },
      {
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/item07.png",
        title: "渔牌小程序",
        detail: " 随着餐饮行业市场情况瞬息万变，广州酒家为了向校园进军，开拓校园市场，与广州互诚科技达成协议，为了向校园师生提供订餐服务"
      }, {
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/item08.png",
        title: "品牌中国小程序",
        detail: "为开发市场以及提升品牌效应，熊呗科技与互诚科技达成战略合作协议，共同合作开发出一款全新的丹尼熊分享购微信小程序商城"
      }
    ]
  },
  select: {
    page: 1,
    size: 6,
    isEnd: false
  },
  //分组点击
  currentTab(e) {
    var that = this;
    if (that.data.currentTab == e.currentTarget.dataset.idx) {
      return;
    } else {
      that.setData({
        currentTab: e.currentTarget.dataset.idx
      })
    }
    that.select = {
      page: 1,
      size: 6,
      isEnd: false
    }
    that.data.caseList = [];
    that.getCaseList()
  },
  showNav: function() {
    this.setData({
      hideNav: !this.data.hideNav
    })
  },
  getCaseList: function() {
    var that = this;
    if (that.select.isEnd) {
      return
    }
    var type = that.data.currentTab == 0 ? 'all' : that.data.currentTab == 1 ? 'WAIT_DELIVER' : 'DELIVER';
    // util.request(`你的接口地址，后面的是参数` + type + `/` + this.select.page + `/` + this.select.size, {}, 'GET', function(res) {
    //   that.setData({
    //     caseList: (that.data.caseList).concat(content)
    //   })
    //   if (content.length > 0) {
    //     caseList.select.page++
    //   } else {
    //     caseList.select.isEnd = true
    //   }
    // })
  },
  //常见问题
  goDetail: function() {
    wx.navigateTo({
      url: '/pages/detail/detail',
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
    this.getCaseList()
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

  }
})