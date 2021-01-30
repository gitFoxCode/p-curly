<template>
  <section class="newsletter" id="contact">
  	<div class="newsletter__column">
  		<div class="newsletter__text">
  			Let's be friends
  		</div>
  		<div class="newsletter__social">
  			<a href="#"> <svg-icon icon="behance" /> </a>
  			<a href="#"> <svg-icon icon="dribbble" /> </a>
  			<a href="#"> <svg-icon icon="twitter" /> </a>
  			<a href="#"> <svg-icon icon="linkedin" /> </a>
  		</div>
  	</div>
  	<div class="newsletter__column">
  		<div class="newsletter__text">
  			Subscribe to Newsletter
  		</div>
  		<div class="newsletter__inner">
  			<input type="email" name="" placeholder="Enter your email">
  			<button class="newsletter__button">Subscribe Now</button>
  		</div>
  	</div>
  </section>
</template>

<style scoped lang="scss">
	.newsletter__inner input{
		padding: 15px;
		font-size: 0.9em;
		font-family: "Poppins", sans-serif;
		border: none;
		box-shadow: 0 1px #FFFFFF inset, 5px 10px 30px rgba(34, 25, 25, 0.05);
	}
	.newsletter__inner button{
		padding: 10px;
		font-size: 0.9em;
		font-family: "Poppins", sans-serif;
		border: none;
		background-color: #FD8366;
		font-weight: bold;
		color: #fff;
		border: 5px solid #fff;
		cursor: pointer;
		transition: background-color 0.4s;
		outline: none;
		box-shadow: 0 1px #FFFFFF inset, 5px 10px 30px rgba(34, 25, 25, 0.05);
	}
	.newsletter__inner button:hover, .newsletter__inner button:focus{
		transition: background-color 0.4s;
		background-color: #E27258;
	}
	.newsletter__inner{
		margin-top: 30px;

	}
	.newsletter__social{
		font-size: 1.5em;
		display: flex;
		justify-content: space-between;
		margin-top: 40px;
		color: #222;
	}
	.newsletter__social a{
		color: #222;
		transition: 0.2s color;
	}
	.newsletter__social a:hover, .newsletter__social a:focus{
		color: #FD8366;
		transition: 0.2s color;
	}
	.newsletter__text{
		font-size: 2em;
		font-weight: 500;
		color: #353A57;
	}
	.newsletter{
		margin: 0 10%;
		background-color: #ECEDF1;
		padding: 80px;
		display: flex;
		justify-content: space-between;
	}
	@media (max-width: 670px){
		.newsletter__inner input{
			width: 100%;
		}
		.newsletter__inner button{
			width: 100%;
		}
	}
	@media(max-width: 980px){
		.newsletter{
			flex-direction: column;
			text-align: center;
		}
		.newsletter__social{
			justify-content: center;
			margin-bottom: 60px;
		}
		.newsletter__social a{
			margin: 0 10px;
		}
		.newsletter__social a:first-of-type{
			margin-left: 0;
		}
	}
</style>
