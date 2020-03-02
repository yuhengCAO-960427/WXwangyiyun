//app.js
//App()是创建一个app对象
App({
  //当小程序启动的时候会执行onLaunch
  onLaunch: function () {
    //在小程序里面没有window和document
    console.log(window,"aaaaaaa")
    console.log(document, "aaaaaaa")
  },
  globalData: {
    //全局对象，在任何页面都可以使用
    userInfo: "zhangsan"
  }
})