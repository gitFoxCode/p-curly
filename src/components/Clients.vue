<template>
  <section class="clients">
  	<div class="section__nav">
  		<span class="section__title">Happy Clients Says</span>
  		<div class="section__buttons">
  			<button class="button__arrow-left">
  				<svg-icon icon="arrow" />
  			</button>
  			<button class="button__arrow-right">
  				<svg-icon icon="arrow" />
  			</button>
  		</div>
  	</div>
  	<swiper :slides-per-view="1"
		    :space-between="30"
		    :navigation="{ nextEl: '.button__arrow-right', prevEl: '.button__arrow-left' }"
		    :breakpoints="{ 670: { slidesPerView: 2 } }"
			class="clients__inner">
  		
		  	<swiper-slide class="client__card">
		  		<div class="client__author">
					<div class="client__avatar">
		  				<img src="~@/assets/images/client-1.jpeg" alt="client avatar">
		  			</div>
		  			<div class="client__author__inner">
		  				<span class="client__author__title">Jarned warner</span>
		  				<span class="client__author__badge">CEO of Bella</span>
		  			</div>
		  		</div>
		  		<div class="client__message">
		  			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
		  		</div>
		  	</swiper-slide>

		  	<swiper-slide class="client__card">
		  		<div class="client__author">
		  			<div class="client__avatar">
		  				<img src="~@/assets/images/client-2.jpeg" alt="client avatar">
		  			</div>
		  			<div class="client__author__inner">
		  				<span class="client__author__title">Jarned warner</span>
		  				<span class="client__author__badge">CEO of Bella</span>
		  			</div>
		  		</div>
		  		<div class="client__message">
		  			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
		  		</div>
		  	</swiper-slide>

	  		<swiper-slide class="client__card">
	  			<div class="client__author">
	  				<div class="client__avatar">
	  					<img src="~@/assets/images/client-2.jpeg" alt="client avatar">
	  				</div>
	  				<div class="client__author__inner">
	  					<span class="client__author__title">Jan Smith</span>
	  					<span class="client__author__badge">CEO of Bella</span>
	  				</div>
	  			</div>
	  			<div class="client__message">
	  				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
	  			</div>
	  		</swiper-slide>

	  		<swiper-slide class="client__card">
	  			<div class="client__author">
	  				<div class="client__avatar">
	  					<img src="~@/assets/images/client-2.jpeg" alt="client avatar">
	  				</div>
	  				<div class="client__author__inner">
	  					<span class="client__author__title">John Snow</span>
	  					<span class="client__author__badge">CEO of Bella</span>
	  				</div>
	  			</div>
	  			<div class="client__message">
	  				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
	  			</div>
	  		</swiper-slide>
  	</swiper>
  	<section class="companies">
  		<svg-icon icon="google-logo" />
  		<svg-icon icon="adobe-logo" />
  		<svg-icon icon="cocacola-logo" />
  		<svg-icon icon="philips-logo" />
  		<svg-icon icon="quantas-logo" />
  	</section>
  </section>
</template>

<script>
	import SwiperCore, { Navigation } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/components/navigation/navigation.scss';
	import 'swiper/swiper.scss';

	SwiperCore.use([Navigation]);
export default {
	components: {
      Swiper,
      SwiperSlide,
    }
}
</script>

<style scoped lang="scss">

	button{
		cursor: pointer;
	}
	.companies{
		width: 100%;
		display: flex;
		justify-content: space-around;
		font-size: 8em;
		margin-top: 60px;
		margin-bottom: 60px;
	}
	.companies .icon{
		color: #5B5B5B;
	}
	.client__avatar img{
		width: 70px;
		height: 70px;
		object-fit: cover;
	}
	.client__avatar{
		width: 70px;
		height: 70px;
		border-radius: 50%;
		overflow: hidden;
	}
	.client__message{
		color: #74798F;
		font-weight: 500;
	}
	.client__author__title{
		font-weight: 600;
		color: #464B65;
	}
	.client__message{
		line-height: 150%;
	}
	.client__author__badge{
		color: #999AAD;
		margin-top: 10px;
	}
	.client__author__inner{
		display: flex;
		flex-direction: column;
		margin-left: 30px;
	}
	.client__author{
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}
	.clients__inner{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 50px;
	}
	.client__card{
		background-color: #fff;
		padding: 30px;
		border-radius: 10px;
		width: 500px;
		position: relative;
		box-shadow: 0 1px #FFFFFF inset, 5px 10px 30px rgba(34, 25, 25, 0.05);
		z-index: 1;
	}
	.client__card::after{
		content: "\201D";
		position: absolute;
		top: 0;
		right: 30px;
		font-size: 15em;
		color: #F9F9F9;
   	 	font-family:Georgia, "Times New Roman", Times, serif;
   	 	z-index: -1;
	}
	.clients{
		margin: 0 15%;
		margin-top: 150px;
	}
	.section__nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.section__buttons{
		display: flex;
		align-items: center;
	}
	.section__title{
		font-weight: bold;
		font-size: 1.5em;
		color: #393E5B;
	}
	.button__arrow-left, .button__arrow-right{
		border: none;
		background: none;
	}
	.button__arrow-left{
		transform: rotate(180deg);
		font-size: 1.3em;
		color: #B5B7C4;
	}
	.button__arrow-right{
		font-size: 2em;
		color: #353A58;
	}
	@media (max-width: 670px){
		.companies{
    		flex-wrap: wrap;
		}
	}
	@media (max-width: 848px){
		.client__author{
			display: block;
		}
		.client__avatar{
			margin: 0 auto;
			margin-bottom: 20px;
		}
		.client__author__inner{
			text-align: center;
			margin-left: 0;
		}
	}
</style>
