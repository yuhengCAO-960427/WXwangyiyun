### app.json配置
```
{
  "pages": [
    "pages/index/index",
    "pages/home/home",
    "pages/movic/movic",
    "pages/seach/search",
    "pages/login/login",
    "pages/icon/icon",
    "pages/conment/conment"
  ],
  "window": {
    "backgroundTextStyle": "dark",
    "navigationBarBackgroundColor": "#999", 
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black",
    "enablePullDownRefresh": true,
    "onReachBottomDistance":50
   
  },
  "tabBar": {
    "color": "#fff",
    "selectedColor":"#ff7500",
    "backgroundColor":"#999",
    "list": [
      
      {
        "pagePath": "pages/index/index",
        "text": "我的",
        "iconPath":"assets/tabbars/home.png",
        "selectedIconPath":"assets/tabbars/home-active.png"
      },
      {
        "pagePath": "pages/seach/search",
        "text": "发现",
        "iconPath": "assets/tabbars/profile.png",
        "selectedIconPath": "assets/tabbars/profile-active.png"
      },
      {
        "pagePath": "pages/home/home",
        "text": "云村"
      },
      {
        "pagePath": "pages/movic/movic",
        "text": "视频"
      }
    ]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true,
  "navigateToMiniProgramAppIdList": [
    "wxe5f52902cf4de896"
  ],
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```
这是一个半成品的微信小程序项目，
主要包含登录、我的、发现、云村、视频几个页面，其中云村页面暂未实现、云村页面是获取用户信息的小demo  
### 主页
 ![1583135694060](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583135694060.png)
### 发现
![1583135715454](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583135715454.png)
### 视频
![1583135737780](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583135737780.png)
### 云村
![1583135753453](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583135753453.png)
### 登录
![1583135775924](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1583135775924.png)