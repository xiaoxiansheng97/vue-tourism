<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :letter="letter" :hot="hotCities"></city-list>
    <!-- <city-alphabet :cities="cities" @change="alphabetClick"></city-alphabet> -->
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data(){
	return{
		cities:{},
		hotCities:[],
    letter:''
	}
  },
  methods: {
    gitHomeInfo() {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res) {
      res= res.data
      if(res.ret &&res.data){
      	const data =res.data
      	this.cities = data.cities
      	this.hotCities = data.hotCities
      }
    },
    alphabetClick(letter){
      this.letter = letter
    	console.log(letter)
    }
  },
  mounted() {
    this.gitHomeInfo()
  }
}

</script>


<style lang="stylus" scoped>
	
</style>