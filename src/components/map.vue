<template>
  <div class="mymap">
    <div @click="submit">提交</div>
    <div @click="delateDian">刪除上一個點</div>
    <el-input placeholder="请输入省市區" v-model="center" ></el-input>
    <baidu-map class="baidu-map" ak="oEEfqLC9pAThInMO1UfdZYL37rSUOrFM" :center="center" :zoom="zoom" @ready="handler" @click="mapClick">
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    <!-- <bml-marker-clusterer :averageCenter="true">
            <bm-marker v-for="marker of markers" :position="{lng: marker.lng, lat: marker.lat}"></bm-marker>    
     </bml-marker-clusterer> -->
    </baidu-map>
  </div>
</template>

<script>
export default {
 data () {
    return {
      center: '重庆市',  //经纬度
      zoom: 3,　 //地图展示级别
      mapLng:0,
      mapLat:0,
      markers:[]
    }
  },
  methods: {
    submit(){},
    delateDian(){
      this.markers.splice(this.markers.length-1,1)
    },
    handler ({BMap, map}) {
      this.center="重庆市"
      this.zoom = 15
    },
    mapClick(type, target, point, pixel, overlay){
        this.mapLng=type.point.lng
        this.mapLat=type.point.lat
        let position = {lng: type.point.lng, lat: type.point.lat}
        this.markers.push(position)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.mymap,.baidu-map {
  width: 100%;
  height: 100%;
}
</style>
