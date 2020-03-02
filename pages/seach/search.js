Page({
  data: {
    hasMore: true,
    msg: [],
    flag: true,
    list:null,

  },
  onLoad: function (options) {
    this.setData({
      search: this.search.bind(this),
    })
      this.getData();
   
  },
  getMusic(){
    //获取歌曲详情
    console.log("xxxxxxxxx")
  },
  getData() {
    wx.request({
      url: 'http://an-fine.cn:3001/search/hot',
      data: {},
      header: { 'content-type': 'application/json' },
      success: (res) => {
        console.log(res.data.result.hots)
        this.setData({
          list: res.data.result.hots
        })
      }

    })
  },
  search(value) {
    
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'http://an-fine.cn:3001/search' + `?keywords=${value}`,
        data: {},
        header: { 'content-type': 'application/json' },
        success: (res) => {
          // console.log(res.data.result.songs)
          this.setData({
            msg: res.data.result.songs,
            flag: false
          })
          resolve([{ name: `${this.data.msg[0].name}`, gsname: `${this.data.msg[0].artists[0].name}`, id: `${this.data.msg[0].id}` },
          { name: `${this.data.msg[1].name}`, gsname: `${this.data.msg[1].artists[0].name}`, id: `${this.data.msg[1].id}` },
          { name: `${this.data.msg[2].name}`, gsname: `${this.data.msg[2].artists[0].name}`, id: `${this.data.msg[2].id}` },
          { name: `${this.data.msg[3].name}`, gsname: `${this.data.msg[3].artists[0].name}`, id: `${this.data.msg[3].id}` },
          { name: `${this.data.msg[4].name}`, gsname: `${this.data.msg[4].artists[0].name}`, id: `${this.data.msg[4].id}` },
          { name: `${this.data.msg[5].name}`, gsname: `${this.data.msg[5].artists[0].name}`, id: `${this.data.msg[5].id}` },
          { name: `${this.data.msg[6].name}`, gsname: `${this.data.msg[6].artists[0].name}`, id: `${this.data.msg[6].id}` },
          { name: `${this.data.msg[7].name}`, gsname: `${this.data.msg[7].artists[0].name}`, id: `${this.data.msg[7].id}` },
          { name: `${this.data.msg[8].name}`, gsname: `${this.data.msg[8].artists[0].name}`, id: `${this.data.msg[8].id}` },
          { name: `${this.data.msg[9].name}`, gsname: `${this.data.msg[9].artists[0].name}`, id: `${this.data.msg[9].id}` },
          ])
        },
      });
    })
  },
  //选中某个搜索结果后
  selectResult: function (e) {
    console.log('歌曲内容-ID', e.detail)
  }
})