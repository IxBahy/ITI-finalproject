<template>
  <!-- <h2>2w</h2> -->
  <div class="search-container">
    <input type="search" class="search" />
  </div>
</template>

<style scoped>
.search-container {
  display: block;
  padding-right: 8px;
}
.search {
  outline: none;
  border: 1px #f8f8f8;
  background: #ededed url('../assets/search.png') no-repeat 5px center;
  padding: 5px 8px 4px 26px;
  width: 10px;
  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  margin-right: 10px;
}
.search:focus {
  width: 160px;
  font-family: inherit;
  padding-left: 30px;
  border: solid 1px #ccc;
  background-color: #fff;
  border-color: #98ccfd;
  -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  backface-visibility: hidden;
  perspective: 1000;
}
</style>
