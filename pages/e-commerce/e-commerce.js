Page({

  data: {
    bg:"/images/img/bg.png",
    title:"电商小程序",
    entitle:"E-commerce applet",
    pic:"/images/img/e-commerce.png",
    line:"/images/img/line.png",
    hideNav: true
  },
  //展示 
  showNav: function () {
    this.setData({
      hideNav: !this.data.hideNav
    })
  },
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
})