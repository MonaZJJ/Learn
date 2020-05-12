const app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideNav: true,
    currentPage: 2,
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
        aurl: "/pages/proHotel/proHotel",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/hotel.png",
        title: "酒店小程序",
        detail: "随着商业经济的发展、人民消费水平的提高以及消费观念的转变,传统酒店服务效率急需提高,酒店行业服务领域拓宽,移动端发展的科学合理化推动酒店转型"
      },
      {
        aurl: "/pages/e-commerce/e-commerce",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/e-commerce.png",
        title: "电商小程序",
        detail: "具有线上商城的所有基本功能，其玩法众多，开发模式可选项丰富，可以适配更多企业商家的需求"
      },
      {
        aurl: "/pages/proCatering/proCatering",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/eat.png",
        title: "餐饮小程序",
        detail: "大数据统计显示，在移动化互联网以及O2O经营模式的浪潮冲击下，餐饮行业是移动化与开拓线上线下结合发展模式速度最快的行业，触网已经成为餐饮商家提升竞争力的重要手段"
      },
      {
        aurl: "/pages/proBeauty/proBeauty",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/beauty.png",
        title: "美妆小程序",
        detail: "美容行业随着社会经济的发展、消费观念的转变、消费需求的不断增加给到行业更为广阔的发展空间。传统的美容实体店商家只能提供基本的美容服务，无法满足消费者的需求，需要商家扩展发展领域"
      },
      {
        aurl: "/pages/proMedical/proMedical",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/medical.png",
        title: "医疗小程序",
        detail: " 移动医疗的出现与发展，使得医疗行业走进移动化，卫生部将移动医疗作为行业重点关注项目，并且移动医疗的商业模式已经进入探索阶段，未来的移动医疗建设将会不断加速"
      },
      {
        aurl: "/pages/proEducation/proEducation",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/edu.png",
        title: "教育小程序",
        detail: "采用移动网络化的经营模式去经营教育服务企业，除了能更加符合现代人群的生活方式、学习方式之外，同时也降低了教育行业的经营成本与营销成本，给教育行业的服务商的利益带来一定的保障效果"
      },
      {
        aurl: "/pages/proCar/proCar",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/car.png",
        title: "汽车小程序",
        detail: " 传统汽车行业仅以实体店为主要营销服务场所，汽车行业的企业商家只能在行业中的众多方面选择某些模块进行经营，影响并限制了汽车行业商家的全面性发展"
      }, {
        aurl: "/pages/proProperty/proProperty",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/property.png",
        title: "物业小程序",
        detail: "移动医疗的出现与发展，使得医疗行业走进移动化，卫生部将移动医疗作为行业重点关注项目，并且移动医疗的商业模式已经进入探索阶段，未来的移动医疗建设将会不断加速"
      }, {
        aurl: "/pages/proWedding/proWedding",
        caseImg: "https://shopplatform.gzhotcen.com/upload/OfficialWebSite/wedding.png",
        title: "婚庆小程序",
        detail: "现阶段的婚庆行业消费主力军为80后与90后，这一年轻群体的消费方式、消费理念与以前的消费者有者明显的时代差别，随着消费主力军改变,服务也进行转型"
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