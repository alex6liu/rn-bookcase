# 私家书藏

仿照[私家书藏app](https://github.com/magaofei/bookCollection)的ios客户端, 用react-native进行编写

通过豆瓣书籍的api的ISBN查询,获得书籍的所有信息. 并存储.

开发时,先不要 run eject, 需要提供ios和android的bundler id(需要注册)

## 主要页面及功能

- Home Page
  - [ ]搜索
  - [ ] 批量操作
  - [ ] 书架
- Add books
  - [ ] 手动输入ISBN
  - [ ] 从摄像头获取ISBN
    - [ ] 从豆瓣api获得数据
      - [ ] 功能1: 查看detail
      - [ ] 功能2: 保存信息, 加入书架
      - [ ] 功能3: 放弃
  - [ ] 手动加书
- Analyze page
  - [ ] 当前藏书
  - [ ] 最爱作者
  - [ ] 出版社
  - [ ] 常用标签
  - [ ] 书柜管理
  - [ ] 借出管理
  - [ ] 阅读进度
  - [ ] 购买渠道
- Setting page
  - 藏书设置
    - 基础设置
    - 显示设置
    - 启动密码
  - 备份和恢复
    - 备份
    - 导入/导出数据
  - 样式
    - 切换皮肤
    - 更换字体
    - 切换语言

- 用户
  - 登陆
  - 注册
    - 邮箱验证
    - 手机验证
  - 修改密码
  - 登出 