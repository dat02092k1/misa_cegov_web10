<template>
    <div class="loading">
        <div class="loading__content">
        <div class="loading__icon"></div>
        <div class="loading__text">Đang xử lý</div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoadingContent",
    props: [],
    methods: {
      
    }
  };
  </script>
  
  <style scoped>
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #4545459b;
  }

  .loading__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;  
    justify-content: center;
  }

  .loading__icon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border-top: 8px solid rgb(0, 142, 31);  
  }
  </style>
  