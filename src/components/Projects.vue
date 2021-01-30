<template>
  <section class="projects" id="work">
  	<div class="projects__column">
  		<span class="projects__title">All creative works, selected project.</span>
  		<p class="projects__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
  		<button class="button projects-button">View all projects <svg-icon icon="arrow" /></button>
  	</div>
  	<div class="projects__column">
  		<div class="card">
  			<div class="card__image">
  				<img src="~@/assets/images/project-1.jpg" alt="goldot application">
  			</div>
  			<span class="card__title">GOLDOT - Landing Page</span>
  			<span class="card__description">Blockchain, Product</span>
  		</div>
  	</div>
  </section>
</template>

<style scoped lang="scss">
	.projects-button{
		margin-top: 50px;
	}
	.projects__title{
		font-weight: bold;
		font-size: 2em;
		line-height: 150%;
		color: #343B58;
	}
	.projects__description{
		line-height: 150%;
		color: #686868;
		margin-top: 40px;
	}
	.projects{
		margin: 0 10%;
		display: flex;
		align-items: center;
		margin-top: 150px
	}
	.projects__column{
		width: 50%;
	}
	.projects__column:first-of-type{
		padding-right: 20%;
	}
	.card{
		width: 100%;
		background-color: #fff;
		text-align: center;
		padding-bottom: 50px;
		box-shadow: 0 1px #FFFFFF inset, 5px 10px 30px rgba(34, 25, 25, 0.05);
	}
	.card__image{
		height: 300px;
		overflow: hidden;
	}
	.card img{
		max-width: 100%;
	}
	.card__title{
		font-weight: bold;
		display: block;
		font-size: 1.2em;
		color: #353A54;
		margin-top: 20px;
	}
	.card__description{
		display: block;
		margin-top: 15px;
		color: #7F8193;
	}
	@media (max-width: 1024px){
		.projects{
			flex-direction: column;
			color: red!important;
		}
		.projects__column{
			padding: 0;
			width: auto;
		}
		.projects__column:first-of-type{
			margin-bottom: 70px;
		}
	}

</style>
