<template>
  <section class="hero" id="home">
  	<section class="hero__main">
  		<h1>
  			<span class="hero__text-special">Hello!</span>
  			<span class="hero__text">I'm a freelance</span>
  			<span class="hero__text">UI/UX Designer <span class="hero__text">based in <span class="hero__text-special--underline hero__text-special">Bangladesh</span></span></span>
  		</h1>
  		<button class="button button-hero">Let's Chat <svg-icon icon="arrow" /></button>
  	</section>
  	<footer class="hero__footer">
  		<div class="hero__footer__inner">
  			<div class="footer__column">
  				<span class="footer__title">
  					Need help?
  				</span>
  				<span class="footer__value">
  					hi@gmail.com
  				</span>
  			</div>
  			<div class="footer__column">
  				<span class="footer__title">
  					Feel like talking
  				</span>
  				<span class="footer__value">
  					+12 3456 2344
  				</span>
  			</div>
  		</div>
  		<div class="hero__footer__inner">
  			<a href="#"> <svg-icon icon="behance" /> </a>
  			<a href="#"> <svg-icon icon="dribbble" /> </a>
  			<a href="#"> <svg-icon icon="twitter" /> </a>
  			<a href="#"> <svg-icon icon="linkedin" /> </a>
  		</div>
  	</footer>
  	<section class="hero__cards" id="about">
  		<article class="card">
  			<div class="card__icon">
  				<svg-icon icon="pen-tool" />
  			</div>
  			<span class="card__title">Design</span>
  			<span class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  			tempor incididunt. </span>
  		</article>
  		<article class="card">
  			<div class="card__icon">
  				<svg-icon icon="case" />
  			</div>
  			<span class="card__title">Branding</span>
  			<span class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </span>
  		</article>

  		<article class="card">
  			<div class="card__icon">
  				<svg-icon icon="design" />
  			</div>
  			<span class="card__title">Product Design</span>
  			<span class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod. </span>
  		</article>
  		<article class="card">
  			<div class="card__icon">
  				<svg-icon icon="dev" />
  			</div>
  			<span class="card__title">Development</span>
  			<span class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  			tempor incididunt ut labore et. </span>
  		</article>
  	</section>
  </section>
</template>

<style scoped lang="scss">
	.hero__main::after{
		content: "";
		position: absolute;
		top: 0;
		right: -25%;
		width: 100%;
		height: 100%;
		background-image: url(~@/assets/images/portfolio-image.png);
		background-size: 80%;
		background-position: bottom ;
		background-repeat: no-repeat;
		z-index: -1;
	}
	.hero__main::before{
		content: "";
		position: absolute;
		top: 5px;
		right: 100px;
		width: 500px;
		height: 500px;
		border-radius: 50%;
		background-color: #E2E5EE;
		z-index: -1;
	}
	.hero__cards{
		margin: 50px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.card{
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		padding: 20px;
		background-color: #fff;
		box-shadow: 0 1px #FFFFFF inset, 0 1px 30px rgba(34, 25, 25, 0.1);
		border-radius: 10px;
	}
	.card__title{
		font-size: 1.5em;
		margin: 20px 0;
		font-weight: bold;
		color: #363A53;
	}
	.card__description{
		width: 230px;
		color: #76788D;
		line-height: 200%;
	}
	.card__icon .icon{
		color: #FF8367;
		font-size: 3em;
	}
	.hero{
		margin: 0 10%;
	}
	.hero__main{
		width: 100%;
		background-color: #ECEDF1;
		padding: 3em;
		padding-bottom: 7em;
		position: relative;
		z-index: 1;
	}
	h1{
		font-size: 3em;
		font-weight: bold;
		line-height: 150%;
	}
	.hero__text-special{
		color: #FE8368;
	}
	.hero__text-special--underline{
		text-decoration: underline;
	}
	.hero__text{
		color: #353A58;
	}
	.hero__text::before{
		content: "\a";
    	white-space: pre;
	}
	.button-hero{
		margin-top: 3em;
	}
	.hero__footer{
		display: flex;
		justify-content: space-between;
		padding: 50px;
	}
	.hero__footer__inner{
		display: flex;
		align-items: center;
	}
	.hero__footer__inner a{
		color: #38393B;
		margin: 10px;
		transition: color 0.2s;
		font-size: 1em;
	}
	.hero__footer__inner a:hover, .hero__footer__inner a:focus{
		color: #FF8367;
		transition: color 0.2s;
	}
	.footer__column{
		display: flex;
		flex-direction: column;
		margin-right: 50px;
	}
	.footer__title{
		color: #595959;
	}
	.footer__value{
		font-weight: bold;
		margin-top: 10px;
		color: #363A53;
	}
	@media (max-width: 670px){
		h1{
			word-break: break-all;
		}
		.hero{
			margin-top: 50px;
		}
		.hero__footer{
			flex-direction: column;
		}
		.hero__footer__inner:last-of-type{
			justify-content: space-around;
			margin-top: 20px;
		}
		.footer__column{
			margin: 0 30px;
			text-align: center;
		}
		.footer__column:first-of-type{
			margin-bottom: 30px;
		}
		.hero__footer__inner:first-of-type{
			flex-direction: column;
		}
	}
	@media (max-width: 940px){
		.hero__main::after{
			display: none;
		}
		.hero__main::before{
			display: none;
		}
	}
	@media (max-width: 1345px){
		.hero__main::after{
			background-size: 100%;
		}
	}
	@media (max-width: 1975px) {
		.hero__cards{
			justify-content: center;
		}
		.card{
			margin: 30px;
		}
	}
</style>
