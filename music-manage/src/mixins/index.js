export const mixin = {
  methods: {
      getUrl(url) {
          // console.log(url)
          return "http://localhost:8080" + url
      },
      //获取要删除列表的index
      handleDelete(index) {
          this.idx = index;
          console.log(index)
          this.delVisible = true;
      },
      // 获取批量要删除的列表
      handleSelectionChange(val) {
          this.multipleSelection = val;
      },
      // 批量删除
      delAll() {
          const length = this.multipleSelection.length;
          for (let i = 0; i < length; i++) {
              this.handleDelete(this.multipleSelection[i].index)
              this.deleteRow(this.multipleSelection[i].index)
          }
          this.multipleSelection = [];
      },
      // 得到歌曲名字
      replaceFName (str) {
          let arr = str.split('-')
          return arr[1]
      },
      // 得到歌手名字
      replaceLName (str) {
          let arr = str.split('-')
          return arr[0]
      },
      changeSex (value) {
          if (value === 0) {
              return "女"
          } else if (value === 1) {
              return '男'
          } else if (value === '男' || value === '女'){
              return value
          }
      },
      toggleSex (value) {
          if (value === "女") {
              return 0
          } else if (value === "男") {
              return 1
          }
      }
  }
}