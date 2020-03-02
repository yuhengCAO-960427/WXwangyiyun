// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telValue: '',
    getInput: '',
    passwordValue: '',
    getpassword: '',
    msg: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  login() {
    // this.getLogin(); 
    wx.reLaunch({
      url: '/pages/index/index?id=1' ,
    })
    console.log("xxxxxxxxxxx")
    wx.setStorage({
      key: 'userInfo',
      data: {
        phone: this.data.telValue,
        password: this.data.passwordValue,
        flag:false,
        flag:true
      }
    })
  },
  getInput(e) {
    //获取输入的账号
    this.setData({
      telValue: e.detail.value
    })
    // console.log(this.data.telValue)
  },
  getpassword(e) {
    //获取输入的密码
    this.setData({
      passwordValue: e.detail.value
    })
    // console.log(this.data.passwordValue)
  },
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})