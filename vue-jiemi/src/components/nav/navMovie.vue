<template>
    <div>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="正在热映"></mu-tab>
        <mu-tab value="tab2" title="即将上映"></mu-tab>
        <mu-tab value="tab3" @active="handleActive" title="top250"></mu-tab>
      </mu-tabs>
      <div v-if="activeTab === 'tab1'">
        <h2>正在热映</h2>
      </div>
      <div v-if="activeTab === 'tab2'">
        <h2>Tab Two</h2>
        <p>
          这是第二个 tab
        </p>
      </div>
      <div v-if="activeTab === 'tab3'">
        <h2>Tab Three</h2>
        <p>
          这是第三个 tab
        </p>
      </div>
    </div>
  </template>
<script type="text/ecmascript-6">
</script>
<style lang="stylus" rel=stylesheet/stylus>
</style>
