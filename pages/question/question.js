// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hideNav: true,
    currentPage: 4,
  },
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

  }
})