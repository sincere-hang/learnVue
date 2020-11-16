<template>
  <div>
    <div class="content">
      <div class="input">
        <input type="text"
               v-model="input">
      </div>
      <div>name = {{input}}</div>
      <van-cell-group>
        <van-field label="文本"
                   placeholder="请输入用户名" />
      </van-cell-group>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/footer'
import { CellGroup, Field } from 'vant';
export default {
  data () {
    return {
      input: "affmngbfv"
    }
  },
  components: {
    Footer,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    // Field
  },
  methods: {

  }
}
</script>
<style lang="less">
.content {
  width: 100vw;
  height: calc(100vh - 60px);
}
</style>