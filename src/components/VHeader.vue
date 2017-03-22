<template>
  <div id="header">
    <header class="header">
      <a href="#/movies">电影</a>
    </header>
    <div class="search">
      <input type="text" class="search-input" placeholder="请输入搜索内容" />
      <img class="search-btn" src="../assets/search-btn.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style>
  .search {
    background: #fff;
    margin-top: 47px;
    position: relative;
  }
  .search .search-input {
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    background: #f5f5f5;
    padding: 10px 5px;
    width: 100%;
    box-sizing: border-box;
  }
  .search .search-btn {
    width: 20px;
    position: absolute;
    right: 5px;
    top: 9px;
  }
  .header {
    position: fixed;
    left: 0; 
    right: 0;
    top: 0;
    height: 46px;
    line-height: 46px;
    text-align: center;
    border-bottom: 1px solid #f3f3f3;
    background: white;
    z-index: 111;
  }
  .header a {
    text-decoration: none;
  }

</style>
