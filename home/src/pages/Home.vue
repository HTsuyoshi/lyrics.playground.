<script setup lang='ts'>
	import Selection from '../components/Selection.vue'

	const menu = {
		font: 'Bebas Neue',
		color_background: '#ffffff',
		colors: ['#000000'],
	};
</script>

<template>
	<link rel='preload' href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' as='style'>
	<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'>

	<link rel='preload' href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' as='style'>
	<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'>

	<span id='container'>
		<span id='window'>
			<div id='window-top'>
				<font-awesome-icon class='icon' icon='fa-solid fa-arrow-left' />
				<font-awesome-icon class='icon' icon='fa-solid fa-arrow-right' />
				<font-awesome-icon class='icon' icon='fa-solid fa-rotate-right' />
				<div id='url-field'>
					<font-awesome-icon icon='fa-solid fa-lock' />
					https://htsuyoshiy.com.br
				</div>
			</div>
			<div id='window-bottom'>
				<Selection
					id='lyrics'
					:fullscreen='false'
					:font='menu.font'
					:color_background='menu.color_background'
					:colors='menu.colors'></Selection>
			</div>
		</span>
	</span>

	<a id='avatar'
		href='https://github.com/HTsuyoshi'
		target='_blank'>
		<img src='https://avatars.githubusercontent.com/u/60109663'
			alt='icon'
			width='60'
			height='60'>
	</a>
</template>

<style scoped>
#avatar {
	position: fixed;
	left: 10px;
	bottom: 10px;
	border: 1px solid #000000;
	transition: 0.2s box-shadow;
	box-shadow: 5px 5px 1px 1px #404040;

	animation: 1.4s ease-in-out intro-bottom;
	animation-iteration-count: 1;

	transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

#avatar:hover {
	transform: scale(1.1);
}

#window {
	animation:
		2.5s ease-in-out intro-top,
		4s ease-in-out floating;
	animation-delay: 0s, 2.5s;
	animation-iteration-count: 1, infinite;
}

#container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100lvh;
}

#container > span {
	box-shadow: 15px 15px 1px 1px #404040;
}

#window-bottom {
	border-color: #000000;
	border-left: 5px solid;
	border-right: 5px solid;
	border-bottom: 5px solid;
}

#window-top {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 40px;
	width: 100%;
	background-color: #000000;
}

#url-field {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20px;
	width: 190px;
	background-color: #a0a0a0;

	font-weight: 500;
	font-family: 'Montserrat';
	font-size: small;
}

.icon { color: #ffffff; }

a {
	padding: 0;
	margin: 0;
	margin-bottom: 0;
}

@keyframes intro-top {
	0%   { transform: translateY(-100%); }
	16%  { transform: translateY(16.27%); }
	28%  { transform: translateY(-8.22%); }
	44%  { transform: translateY(2.63%); }
	59%  { transform: translateY(-.64%); }
	73%  { transform: translateY(0.38%); }
	88%  { transform: translateY(-0.2%); }
	100% { transform: translateY(0%); }
}

@keyframes intro-bottom {
	0%   { transform: translateY(100%); }
	16%  { transform: translateY(-32.27%); }
	28%  { transform: translateY(13.22%); }
	44%  { transform: translateY(-4.63%); }
	59%  { transform: translateY(1.64%); }
	73%  { transform: translateY(-0.58%); }
	88%  { transform: translateY(0.2%); }
	100% { transform: translateY(0%); }
}

@keyframes floating {
	0%   { transform: translateY(0); }
	50%  { transform: translateY(-5px); }
	100% { transform: translateY(0); }
}
</style>;