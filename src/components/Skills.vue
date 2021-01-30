<template>
  <section class="skills" id="skills">
  	<span class="section__title">Skills & Experience</span>
  	<div class="skills__inner">
  		<div class="skills__column">
  			<div class="card">
  				<svg-icon icon="sketch" allow-fill />
  				<span class="card__text">80%</span>
  			</div>
  			<div class="card">
  				<svg-icon icon="wordpress" allow-fill />
  				<span class="card__text">80%</span>
  			</div>
  			<div class="card">
  				<svg-icon icon="figma" allow-fill />
  				<span class="card__text">80%</span>
  			</div>
  			<div class="card">
  				<svg-icon icon="cpp" allow-fill />
  				<span class="card__text">80%</span>
  			</div>
  			<div class="card">
  				<svg-icon icon="html" allow-fill />
  				<span class="card__text">80%</span>
  			</div>
  		</div>
  		<div class="skills__column">
  			<div class="skills__timeline">
  				<div class="skills__timeline__date">2020</div>
  				<div class="skills__timeline__content">
  					<span class="skills__timeline__title">Senior Product Designer</span>
  					<span class="skills__timeline__company">Amazon Inc</span>
  				</div>
  			</div>

  			<div class="skills__timeline">
  				<div class="skills__timeline__date">2019</div>
  				<div class="skills__timeline__content">
  					<span class="skills__timeline__title">UI/UX Web Designer</span>
  					<span class="skills__timeline__company">Google</span>
  				</div>
  			</div>

  			<div class="skills__timeline">
  				<div class="skills__timeline__date"></div>
  				<div class="skills__timeline__content">
  					<span class="skills__timeline__title">Internship Graphic Designer</span>
  					<span class="skills__timeline__company">Google</span>
  				</div>
  			</div>

  			<div class="skills__timeline">
  				<div class="skills__timeline__date">2018</div>
  				<div class="skills__timeline__content">
  					<span class="skills__timeline__title">SENIOR WP Front - End Developer</span>
  					<span class="skills__timeline__company">Envato</span>
  				</div>
  			</div>

  			<div class="skills__timeline">
  				<div class="skills__timeline__date"></div>
  				<div class="skills__timeline__content">
  					<span class="skills__timeline__title">Ios Developer</span>
  					<span class="skills__timeline__company">Zara</span>
  				</div>
  			</div>

  		</div>
  	</div>
  </section>
</template>

<style scoped lang="scss">
	.skills__timeline{
		width: 100%;
		margin-left: 50px;
	}
	.skills__timeline__content{
		display: flex;
		flex-direction: column;
	}
	.skills__timeline__title{
		font-weight: bold;
		color: #3C425B;
	}
	.skills__timeline__date{
		margin-right: 50px;
		width: 80px;
	}
	.skills__timeline__company{
		color: #7D7F97;
		text-transform: uppercase;
		margin-top: 15px;
	}
	.skills__timeline{
		display: flex;
		margin-top: 40px;
	}
	.skills__timeline:first-of-type{
		margin-top: 0;
	}
	.skills{
		margin: 0 10%;
		margin-top: 150px;
		background-color: #ECEDF1;
		padding: 50px;
	}
	.section__title{
		display: block;
		font-size: 2em;
		text-align: center;
		color: #353A57;
		margin-bottom: 70px;
		font-weight: 600;
	}
	.skills__column{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 50%;
		align-items: flex-start;
	}
	.card{
		padding: 20px 40px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		color: #FF876C;
		font-weight: bold;
		margin-right: 20px;
	}
	.card .icon{
		font-size: 3em;
		margin-bottom: 30px;
	}
	.skills__inner{
		display: flex;
	}
	@media (max-width: 670px){
		.skills__timeline{
			flex-direction: column;
			margin-left: 0;
		}
		.skills__timeline__date{
			font-size: 1.2em;
			margin-bottom: 20px;
			font-weight: bold;
			color: #333;
			text-align: center;
		    display: block;
		    width: 100%;
		}
		.skills__timeline__content{
			text-align: center;
		}
	}
	@media (max-width: 864px){
		.skills__inner{
			flex-direction: column;
		}
		.skills__column:first-of-type{
			margin-bottom: 70px;
		}
		.skills__column{
			width: 100%;
			justify-content: center;
		}
		.card{
			margin: 10px;
		}
	}
</style>
