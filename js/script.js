Vue.config.devtools=true;
const app= new Vue({
  el: '#app',
  data:{
    indexImg:0,
    scrollIndex:null,
    photos:[
      {
        name: "Milano",
        image:"img/Milano.jpg",
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        name: "NewYork",
        image:"img/NewYork.jpg",
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        name: "Amsterdam",
        image:"img/Amsterdam.jpg",
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        name: "London",
        image:"img/London.jpg",
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        name: "Madrid",
        image:"img/Madrid.jpg",
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
    ]
  },
  methods:{
    next(){
      if(this.indexImg == this.photos.length-1){
        this.indexImg=0;
      }
      else{
        this.indexImg++;
      }
    },
    prev(){
      if(this.indexImg == 0){
        this.indexImg=this.photos.length - 1;
      }
      else{
        this.indexImg--;
      }
    },
    choiceImg(indexT){
      this.indexImg=indexT;
    },
    scroll(){
      this.scrollIndex= setInterval( ()=>{
        this.next();
      },3000);
    },
    stopScroll(){
      this.scroll=null;
    }
  },
  beforeMount(){
    this.scroll()
  }
})