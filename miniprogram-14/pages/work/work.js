
// pages/work/wor.js.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSource:[
      {
      goods_id:1,
      image_src:"https://api-hmugo-web.itheima.net/pyg/banner1.png"
    },
    {
      goods_id:2,
      image_src:"https://api-hmugo-web.itheima.net/pyg/banner1.png"
    },
    {
      goods_id:3,
      image_src:"https://api-hmugo-web.itheima.net/pyg/banner1.png"
    },
  ], 
  currentSwiper: 0,
  indicatorColor:'white',
  indicatorActivecolor:'red',
  features:[
    {
      id:1,
      image_src:'/icons/Snipaste_2023-04-21_21-16-32.png',
      ImgSrc:[
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能1'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能2'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
           text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
      ],
      text:'功能A'
    },
    {
      id:2,
      image_src:'/icons/Snipaste_2023-04-21_21-16-32.png',
      ImgSrc:[
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能1'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能2'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
           text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
        {
          image_src1:'/icons/Snipaste_2023-04-21_20-29-31.png',
          text:'功能3'
        },
      ],
      text:'功能B'
    },
    {
      id:3,
      image_src:'/icons/Snipaste_2023-04-21_20-29-31.png',
      text:'功能C'
    },
    {
      id:4,
      image_src:'/icons/Snipaste_2023-04-21_20-29-31.png',
      text:'功能C'
    },
    {
      id:5,
      image_src:'/icons/Snipaste_2023-04-21_20-29-31.png',
      text:'功能C'
    },
    {
      id:6,
      image_src:'/icons/Snipaste_2023-04-21_20-29-31.png'
      ,text:'功能C'
    },
    {
      id:7,
      image_src:'/icons/Snipaste_2023-04-21_20-29-31.png',
      text:'功能C'
    },
    {
      id:8,
      image_src:'/icons/Snipaste_2023-04-21_20-29-31.png',
      text:'功能C'
    },
    {
      id:9,
      image_src:'/icons/Snipaste_2023-04-21_20-29-31.png',
      text:'功能C'
    },
    {
      id:10,
      image_src:'/icons/Snipaste_2023-04-21_20-29-31.png',
      text:'功能C'
    },
    {
      id:11,
      image_src:'',
      text:''
    },
    {
      id:12,
      image_src:'',
      text:''
    }

  ],
  isShow:false,
  ImgSrc:''

  },

  /**
   * 组件的方法列表
   */
  onLoad: function (options) {
   
  },
  onShow: function () {
  
  },
  swiperChange:function(e) {
    // console.log(e.detail.current)
    this.setData({
      currentSwiper: e.detail.current
    })
  }  ,
  showMore:function(e){
    console.log('e',e.currentTarget.dataset.id)
    const id=e.currentTarget.dataset.id
    const {features}=this.data
    console.log('features',features)
    // this.setData({
    //   isShow:true
    // })
    // var ImgSrc=features.find(v=>v.id===id).ImgSrc
    var ImgSrc,isShow;
    var text=features.find(v=>v.id===id).text
    // if()
    features.forEach((item)=>{
      if(id===item.id){
        if(!item.ImgSrc){
         isShow=false
        }else{
          ImgSrc=item.ImgSrc
          isShow=true
        }
        
      }
    })
    console.log(ImgSrc);
    this.setData({
      ImgSrc,
      isShow:isShow,
      text
    })
    console.log('11111111')
  },
  close:function(){
    this.setData({
      isShow:false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})