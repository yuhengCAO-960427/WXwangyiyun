//index.js
//获取应用实例
//Page()是创建一个页面对象
Page({
  //data中是页面自己用到的数据
  data: {
    phone: '',
    password: '',
    msg: null,
    flag: true,
    flags: false,
    list: null,
    id:null
  },

  //函数方法
  //当页面加载完毕的时候自动执行onLoad()方法
  onLoad: function (options) {
    this.getList()
    var that = this

    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        that.setData({
          flag: false,
          flags: true
        })
        console.log(res.data.phone)
        console.log(res.data.password)
        wx.request({
          url: 'http://an-fine.cn:3001/login/cellphone' + `?phone=${res.data.phone}&password=${res.data.password}`,
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            // console.log(res.data.profile)
            that.setData({
              msg: res.data.profile,
            })
            console.log(that.data.msg)
          }
        })
      }
    })
    // wx.request({
    //   url: 'http://an-fine.cn:3001/top/playlist/highquality', 
    //   dataType:"json",
    //   success: function (res) {
    //     console.log(res.data);
    //     var data = res.data.replace(/\s+/g,"");
    //     console.log(data,"ppppp")
    //     var obj = JSON.parse(data);
    //     console.log(obj)
    //     that.setData({
    //       list: obj.playlists
    //     })
    //   }
    // })

  },
  //立即登录的方法
  handelLogin() {
    //跳转到登录页面
    wx.navigateTo({
      url: "../login/login"
    })
  },
  handelConment(){
    wx.navigateTo({
      url:"../conment/conment?id="+`${this.data.id}`
    })
  },
  handelOut() {
    console.log("xxxxxxxx")
    this.outLogin()
  },
  getList() {
    var that = this
    wx.request({
      url: 'http://an-fine.cn:3001/personalized',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData({
          list: res.data.result,
        })
        console.log(res.data.result)
      }
    })
  },
  outLogin() {
    var that = this
    wx.request({
      url: "http://an-fine.cn:3001/logout",
      success(res) {
        console.log(res.data)
        that.setData({
          flag: true,
          flags: false
        })
        wx.clearStorage(wx.clearStorageSync)
      }

    })
  }
})
