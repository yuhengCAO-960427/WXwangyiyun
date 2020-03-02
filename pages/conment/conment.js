// pages/conment/conment.js
Page({
  data: {
  id:null
  },
  onLoad: function (options) {
      this.setData({
        id: options.id,
        url:null,
        num:null,
        headerUrl:null,
        txt:null,
        herderTxt:null,
        name:null,
        msg:null,
        fx_number:null,
        msg_number:null,
        sc_number:null,
        music_name:null,
        gs_name:null,
        all_number:null,
        list:null
      })
      // console.log(this.data.id)
      this.getData();
  },
getData(){
wx.request({
  // `?id=${this.data.id}`
  url: 'http://an-fine.cn:3001/playlist/detail'+ `?id=${this.data.id}`,
    header: {'content-type':'application/json'},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: (res) => {
      console.log(res.data.playlist)
      console.log(res.data.playlist.tracks[0].name)
      console.log(res.data.playlist.tracks[0].ar[0].name)
      console.log(res.data.playlist.tracks[0].al.name)
      this.setData({
        url: res.data.playlist.coverImgUrl,
        herderTxt: res.data.playlist.name,
        txt: res.data.playlist.description,
        name: res.data.playlist.creator.nickname,
        headerUrl: res.data.playlist.creator.avatarUrl,
        num: parseInt(res.data.playlist.playCount),
        fx_number: res.data.playlist.shareCount,
        msg_number: res.data.playlist.commentCount,
        all_number: res.data.playlist.tracks.length,
        list: res.data.playlist.tracks,
        sc_number: res.data.playlist.subscribedCount/10000
      })
      console.log(this.data.fx_number) //分享数
      console.log(this.data.msg_number) //消息数
      console.log(this.data.all_number) //歌单列表总数
      console.log(this.data.sc_number)
    },
  });
    
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