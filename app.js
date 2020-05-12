//app.js
App({
  // 拨打电话
  toCallTelPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '020-29075170',
    })
  },
  // 拨打手机
  toCallMobilePhone: function () {
    wx.makePhoneCall({
      phoneNumber: '18011971195',
    })
  },
  globalData: {
    userInfo: null,
    apiSever: "https://shopplatform.gzhotcen.com/"
  },
  
})