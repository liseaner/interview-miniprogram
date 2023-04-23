// custom-tab-bar/index.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        selected:0,
        color: "#999",
        selectedColor: "#88bf01",
        backgroundColor: "#fafafa",
        list: [
            {
                pagePath: "/pages/work/work",
                text: "工作",
                iconPath: "/icons/work.png",
                selectedIconPath: "/icons/work-o.png"
            },
            {
                pagePath: "/pages/help/help",
                text: "助手",
                iconPath: "/icons/help.png",
                selectedIconPath: "/icons/help-o.png"
            },
            {
                pagePath: "/pages/common/common",
                text: "/常用",
                bulge:true,
                iconPath: "/icons/add.png",
                selectedIconPath: "/icons/add-o.png"
            },
            {
                pagePath: "/pages/analyse/analyse",
                text: "分析",
                iconPath: "/icons/analyse.png",
                selectedIconPath: "/icons/analyse-o.png"
            },
            {
                pagePath: "/pages/mine/mine",
                text: "我",
                iconPath: "/icons/mine.png",
                selectedIconPath: "/icons/mine-o.png"
            }
        ]
    },
    ready: function() {
        this.setData({
          selected: app.globalData.selected
        })
      },
    /**
     * 组件的方法列表
     */
    methods: {
        switchTab(e) {
            // console.log(e);
            const data = e.currentTarget.dataset;
            const url = data.path;
            app.globalData.selected = data.index;
            wx.switchTab({url})
          }
        }
     
})
