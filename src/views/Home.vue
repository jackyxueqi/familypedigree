<template>
  <div class="home">
    <div id="map" style="width:100%;height:100%" />
    <div class="mapChoose">
      <span class="title" @click="chooseHunan()">湖南</span>
      <span v-show="showCity">--</span>
      <span v-show="showCity" class="title">{{cityName}}</span>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  // require('echarts/theme/macarons') // echarts theme
  // import { debounce } from '@/utils'
  import '../assets/map/hunan.js'
  import '../assets/map/changsha.js'
  import '../assets/map/yueyang.js'
  import '../assets/map/yiyang.js'
  import '../assets/map/changde.js'
  import '../assets/map/xiangtan.js'
  import '../assets/map/zhuzhou.js'
  import '../assets/map/loudi.js'
  import '../assets/map/hengyang.js'
  import '../assets/map/chenzhou.js'
  import '../assets/map/yongzhou.js'
  import '../assets/map/shaoyang.js'
  import '../assets/map/huaihua.js'
  import '../assets/map/zhangjiajie.js'
  import '../assets/map/xiangxi.js'

  export default {
    name: 'MiddleTop',
    data () {
      return {
        chart: '',
        mapType: '',
        cityName: '',
        showCity: false,
        mapData: [
          {name: '长沙市', value: 130},
          {name: '岳阳市', value: 230},
          {name: '益阳市', value: 330},
          {name: '常德市', value: 430},
          {name: '湘潭市', value: 530},
          {name: '株洲市', value: 630},
          {name: '娄底市', value: 730},
          {name: '衡阳市', value: 830},
          {name: '郴州市', value: 930},
          {name: '永州市', value: 1030},
          {name: '邵阳市', value: 1130},
          {name: '怀化市', value: 1230},
          {name: '张家界市', value: 1330},
          {name: '湘西土家族苗族自治州', value: 1430}
        ],
        changshaMapData: [
          {name: '宁乡市', value: 130},
          {name: '望城区', value: 230},
          {name: '岳麓区', value: 330},
          {name: '开福区', value: 430},
          {name: '芙蓉区', value: 530},
          {name: '天心区', value: 630},
          {name: '雨花区', value: 730},
          {name: '长沙县', value: 830},
          {name: '浏阳市', value: 930}
        ],
        yueyangMapData: [
          {name: '华容县', value: 130},
          {name: '君山区', value: 230},
          {name: '云溪区', value: 330},
          {name: '临湘市', value: 430},
          {name: '岳阳楼区', value: 530},
          {name: '岳阳县', value: 630},
          {name: '湘阴县', value: 730},
          {name: '汨罗市', value: 830},
          {name: '平江县', value: 930}
        ],
        yiyangMapData: [
          {name: '南县', value: 130},
          {name: '沅江市', value: 230},
          {name: '资阳区', value: 330},
          {name: '赫山区', value: 430},
          {name: '桃江县', value: 530},
          {name: '安化县', value: 630}
        ],
        changdeMapData: [
          {name: '石门县', value: 130},
          {name: '澧县', value: 230},
          {name: '临澧县', value: 330},
          {name: '津市市', value: 430},
          {name: '安乡县', value: 530},
          {name: '桃源县', value: 630},
          {name: '武陵区', value: 730},
          {name: '鼎城区', value: 830},
          {name: '汉寿县', value: 930}
        ],
        xiangtanMapData: [
          {name: '湘乡市', value: 130},
          {name: '韶山市', value: 230},
          {name: '雨湖区', value: 330},
          {name: '岳塘区', value: 430},
          {name: '湘潭县', value: 530}
        ],
        zhuzhouMapData: [
          {name: '石峰区', value: 130},
          {name: '荷塘区', value: 230},
          {name: '芦淞区', value: 330},
          {name: '天元区', value: 430},
          {name: '醴陵市', value: 530},
          {name: '渌口区', value: 630},
          {name: '攸县', value: 730},
          {name: '茶陵县', value: 830},
          {name: '炎陵县', value: 930}
        ],
        loudiMapData: [
          {name: '新化县', value: 130},
          {name: '冷水江市', value: 230},
          {name: '涟源市', value: 330},
          {name: '娄星区', value: 430},
          {name: '双峰县', value: 530}
        ],
        hengyangMapData: [
          {name: '南岳区', value: 130},
          {name: '衡山县', value: 230},
          {name: '衡阳县', value: 330},
          {name: '衡东县', value: 430},
          {name: '石鼓区', value: 530},
          {name: '蒸湘区', value: 630},
          {name: '珠晖区', value: 730},
          {name: '雁峰区', value: 830},
          {name: '衡南县', value: 930},
          {name: '祁东县', value: 1030},
          {name: '常宁市', value: 1130},
          {name: '耒阳市', value: 1230}
        ],
        chenzhouMapData: [
          {name: '安仁县', value: 130},
          {name: '永兴县', value: 230},
          {name: '资兴市', value: 330},
          {name: '桂东县', value: 430},
          {name: '汝城县', value: 530},
          {name: '苏仙区', value: 630},
          {name: '北湖区', value: 730},
          {name: '桂阳县', value: 830},
          {name: '嘉禾县', value: 930},
          {name: '临武县', value: 1030},
          {name: '宜章县', value: 1130}
        ],
        yongzhouMapData: [
          {name: '东安县', value: 130},
          {name: '冷水滩区', value: 230},
          {name: '祁阳县', value: 330},
          {name: '零陵区', value: 430},
          {name: '双牌县', value: 530},
          {name: '新田县', value: 630},
          {name: '宁远县', value: 730},
          {name: '道县', value: 830},
          {name: '蓝山县', value: 930},
          {name: '江永县', value: 1030},
          {name: '江华瑶族自治县', value: 1130}
        ],
        shaoyangMapData: [
          {name: '新邵县', value: 130},
          {name: '北塔区', value: 230},
          {name: '双清区', value: 330},
          {name: '大祥区', value: 430},
          {name: '邵东市', value: 530},
          {name: '隆回县', value: 630},
          {name: '邵阳县', value: 730},
          {name: '洞口县', value: 830},
          {name: '武冈市', value: 930},
          {name: '新宁县', value: 1030},
          {name: '绥宁县', value: 1130},
          {name: '城步苗族自治县', value: 1230}
        ],
        huaihuaMapData: [
          {name: '沅陵县', value: 130},
          {name: '辰溪县', value: 230},
          {name: '溆浦县', value: 330},
          {name: '麻阳苗族自治县', value: 430},
          {name: '鹤城区', value: 530},
          {name: '中方县', value: 630},
          {name: '芷江侗族自治县', value: 730},
          {name: '洪江市', value: 830},
          {name: '新晃侗族自治县', value: 930},
          {name: '会同县', value: 1030},
          {name: '靖州苗族侗族自治县', value: 1130},
          {name: '通道侗族自治县', value: 1230}
        ],
        zhangjiajieMapData: [
          {name: '桑植县', value: 130},
          {name: '慈利县', value: 230},
          {name: '武陵源区', value: 330},
          {name: '永定区', value: 430}
        ],
        xiangxiMapData: [
          {name: '龙山县', value: 130},
          {name: '永顺县', value: 230},
          {name: '保靖县', value: 330},
          {name: '古丈县', value: 430},
          {name: '花垣县', value: 530},
          {name: '吉首市', value: 630},
          {name: '泸溪县', value: 730},
          {name: '凤凰县', value: 830}
        ],
      }
    },
    mounted () {
      this.mapType = '湖南'
      this.getEchartsMap(this.mapType, this.mapData, '湖南省异常分布图')
      this.clickMap()
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      window.removeEventListener('resize', this.__resizeHandler)
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      getEchartsMap (mapType, data, text) {
        this.chart = echarts.init(document.getElementById('map'))
        this.chart.setOption({
          title: {
            text: text,
            x: 'center',
            top: 10,
            textStyle: {
              color: 'rgb(179, 239, 255)',
              fontSize: 18
            }
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['iphoneX']
          },
          dataRange: {
            min: 0,
            max: 2500,
            x: 'left',
            y: 'bottom',
            calculable: true,
            inRange: {
              color: ['#24CFF4', '#2E98CA', '#1E62AC']
            },
            textStyle: {
              color: '#24CFF4'
            }
          },
          toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: false
              },
              // restore: {
              //   show: true
              // },
              saveAsImage: {
                show: true
              }
            }
          },
          roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
              china: true
            }
          },
          series: [{
            name: '异常数',
            type: 'map',
            mapType: mapType,
            roam: false,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  color: "rgb(249, 249, 249)", //省份标签字体颜色
                },
                areaColor: '#24CFF4',
                borderColor: '#53D9FF',
                borderWidth: 1.3,
                shadowBlur: 15,
                shadowColor: 'rgb(58,115,192)',
                shadowOffsetX: 7,
                shadowOffsetY: 6,
                color: '#F4E925'
              },
              emphasis: {
                label: {
                  show: true
                },
                areaColor: '#8dd7fc',
                borderWidth: 1.6,
                shadowBlur: 25,
              }
            },
            data: data
          }]
        })
      },
      clickMap() {
        const that = this
        this.chart.on('click', function (params) {

          if (params.name == '长沙市') {
            that.cityName = params.name
            that.getEchartsMap('长沙市', that.changshaMapData, '长沙市异常分布图')
          }
          if (params.name == '岳阳市') {
            that.cityName = params.name
            that.getEchartsMap('岳阳市', that.yueyangMapData, '岳阳市异常分布图')
          }
          if (params.name == '益阳市') {
            that.cityName = params.name
            that.getEchartsMap('益阳市', that.yiyangMapData, '益阳市异常分布图')
          }
          if (params.name == '常德市') {
            that.cityName = params.name
            that.getEchartsMap('常德市', that.changdeMapData, '常德市异常分布图')
          }
          if (params.name == '湘潭市') {
            that.cityName = params.name
            that.getEchartsMap('湘潭市', that.xiangtanMapData, '湘潭市异常分布图')
          }
          if (params.name == '株洲市') {
            that.cityName = params.name
            that.getEchartsMap('株洲市', that.zhuzhouMapData, '株洲市异常分布图')
          }
          if (params.name == '娄底市') {
            that.cityName = params.name
            that.getEchartsMap('娄底市', that.loudiMapData, '娄底市异常分布图')
          }
          if (params.name == '衡阳市') {
            that.cityName = params.name
            that.getEchartsMap('衡阳市', that.hengyangMapData, '衡阳市异常分布图')
          }
          if (params.name == '郴州市') {
            that.cityName = params.name
            that.getEchartsMap('郴州市', that.chenzhouMapData, '郴州市异常分布图')
          }
          if (params.name == '永州市') {
            that.cityName = params.name
            that.getEchartsMap('永州市', that.yongzhouMapData, '永州市异常分布图')
          }
          if (params.name == '邵阳市') {
            that.cityName = params.name
            that.getEchartsMap('邵阳市', that.shaoyangMapData, '邵阳市异常分布图')
          }
          if (params.name == '怀化市') {
            that.cityName = params.name
            that.getEchartsMap('怀化市', that.huaihuaMapData, '怀化市异常分布图')
          }
          if (params.name == '张家界市') {
            that.cityName = params.name
            that.getEchartsMap('张家界市', that.zhangjiajieMapData, '张家界市异常分布图')
          }
          if (params.name == '湘西土家族苗族自治州') {
            that.cityName = params.name
            that.getEchartsMap('湘西土家族苗族自治州', that.xiangxiMapData, '湘西土家族苗族自治州异常分布图')
          }
          that.showCity = true
        })
      },
      // 当前点击湖南省
      chooseHunan() {
        this.showCity = false
        this.getEchartsMap('湖南', this.mapData, '湖南省异常分布图')
      }
    }
  }
</script>
<style scoped="scoped">
  .home {
    width: 100%;
    height: 100%;
    position: relative;
    background-size: 100% 100%;
  }
  .mapChoose{
    position: absolute;
    width: 340px;
    height: 50px;
    top: 20px;
    left: 20px;
  }
  .title {
    padding: 5px;
    border-top: 1px solid rgba(147, 235, 248, .8);
    border-bottom: 1px solid rgba(147, 235, 248, .8);
    cursor: pointer;
  }
  .mapChoose span{
    color: #FFF;
    font-size: 18px;
    line-height: 50px;
    font-family: "simsun";
  }
</style>
