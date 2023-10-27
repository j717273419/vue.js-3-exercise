<template>
  <div class="about">
    <h1>Element Plus Demo 01 Steps 步骤条</h1>
    <hr />
    <div class="mt">
      <h3>1.普通的步骤条</h3>
      <el-steps :active="active" finish-status="success">
        <el-step title="Step 1" />
        <el-step title="Step 2" />
        <el-step title="Step 3" />
      </el-steps>

      <el-button style="margin-top: 12px" @click="next">Next step</el-button>
      <hr />

      <h3>2.带图标的步骤条</h3>
      <el-steps :active="active" finish-status="success">
        <el-step title="Step 1" :icon="CircleCheck">我是内容1</el-step>
        <el-step title="Step 2" :icon="CircleCheck">我是内容2</el-step>
        <el-step title="Step 3" :icon="CircleCheck">我是内容3</el-step>
      </el-steps>

      <el-button style="margin-top: 12px" @click="next">Next step</el-button>
      <hr />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { ElSteps } from 'element-plus'
import { Edit, Picture, CircleCheck } from '@element-plus/icons-vue'

import 'element-plus/dist/index.css'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
<style scoped>
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.mt {
  margin-top: 50px;
  width: 60vw;
}
</style>
