<template>
  <button class="nav__mobile__btn" @click="nav">
  	<svg class="ham hamRotate ham1" viewBox="0 0 100 100" width="80" onclick="this.classList.toggle('active')">
	  <path
	        class="line top"
	        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
	  <path
	        class="line middle"
	        d="m 30,50 h 40" />
	  <path
	        class="line bottom"
	        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
	</svg>
  </button>
  <header>
  	<div class="header__logo">
  		<img src="~@/assets/icons/curly-logo.svg" alt="Curly logo">
  	</div>
  	<nav>
  		<ul>
  			<li><a href="#home">Home</a></li>
  			<li><a href="#about">About</a></li>
  			<li><a href="#work">Work</a></li>
  			<li><a href="#skills">Skills</a></li>
  			<li><a href="#contact">Contact</a></li>
  		</ul>
  	</nav>
  </header>
</template>

<script>
export default {
	data(){
		return { 
			navActive: false
		}
	},
	methods: {
		nav: function (){
			this.navActive = !this.navActive;
			if(this.navActive === false){
				document.querySelector("header").style.transform = "translateX(100%)";
				setTimeout(()=>{
					document.querySelector("header").style.display = "none";
				},400);
			}else{
				document.querySelectorAll('li a').forEach((el)=>{
					el.addEventListener("click", ()=>{
						this.navActive = true;
						document.querySelector('.ham').classList.remove("active");
						this.nav();
					},false);
				})
				document.querySelector("header").style.display = "flex";
				setTimeout(()=>{
					document.querySelector("header").style.transform = "translateX(0)";
				},200);
			}
		}
	}
}
</script>

<style scoped lang="scss">
	header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 10%;
		padding: 30px 0;
		transition: transform 0.4s;
	}
	ul{
		display: flex;
		align-items: center;
	}
	li{
		margin: 0 20px;
	}
	li a{
		text-decoration: none;
		font-family: "Poppins", sans-serif;
		color: #353A58;
		font-weight: 500;
		transition: color 0.2s;
	}
	li a:hover{
		transition: color 0.2s;
		color: #FF8367;
	}
	.header__logo img{
		width: 100px;
	}

	@media (max-width: 670px){
		header{
			position: fixed;
			top:0;
			left:0;
			padding-top: 50px;
			width: 100%;
			height: 100vh;
			flex-direction: column;
			justify-content: center;
			margin: 0;
			background-color: #fff;
			z-index: 99;
			transform: translateX(100%);
			display: none;

		}
		nav{
			margin-top: 30px;
		}
		ul{
			flex-direction: column;
		}
		li{
			padding: 20px;
		}
		.nav__mobile__btn:first-of-type{
			display: block;
		}
	}
	.nav__mobile__btn{
		position: fixed;
		top: 0;
		right: 0;
		display: none;
		margin-left: auto;
		border: none;
		background: none;
		z-index: 999;
	}
	.ham {
	  cursor: pointer;
	  -webkit-tap-highlight-color: transparent;
	  transition: transform 400ms;
	  -moz-user-select: none;
	  -webkit-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
	}
	.hamRotate.active {
	  transform: rotate(45deg);
	}
	.hamRotate180.active {
	  transform: rotate(180deg);
	}
	.line {
	  fill:none;
	  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
	  stroke:#353A57;
	  stroke-width:5.5;
	  stroke-linecap:round;
	}
	.line:hover.line, .line:focus.line, .line:active.line{
		stroke: #FD8366;
	}
	.ham1 .top {
	  stroke-dasharray: 40 139;
	}
	.ham1 .bottom {
	  stroke-dasharray: 40 180;
	}
	.ham1.active .top {
	  stroke-dashoffset: -98px;
	}
	.ham1.active .bottom {
	  stroke-dashoffset: -138px;
	}
</style>
