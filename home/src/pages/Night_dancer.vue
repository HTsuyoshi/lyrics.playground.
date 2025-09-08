<script setup lang='ts'>
	import Lyrics from '../components/Lyrics.vue'

	const lyric = [
			{ text: '無駄', time: 1.3 },
			{ text: '話で', time: 0.8 },
			{ text: 'はぐらかして', time: 1.8 },
			{ text: '触れた', time: 1.0 },
			{ text: '先を', time: 1.2 },
			{ text: 'ためらう', time: 1.5 },
			{ text: 'ように', time: 0.8 },
			{ text: '足踏みして', time: 2.0 },
			{ text: 'ズレた', time: 1.0 },
			{ text: '針を', time: 1.0 },
			{ text: '余所に', time: 1.0 },
			{ text: '揃い始めてた', time: 2.0 },
			{ text: '息が', time: 1.8 },
			{ text: 'どう', time: 0.6 },
			{ text: 'でもいい', time: 0.7 },
			{ text: 'ような', time: 0.7 },
			{ text: '夜だけど', time: 1.5 },
			{ text: '響めき', time: 1.0 },
			{ text: '煌めきと', time: 1.6 },
			{ text: '君も', time: 1.0 },
			{ text: '踊ろう', time: 1.0 },
			{ text: 'どう', time: 0.6 },
			{ text: 'でもいい', time: 0.7 },
			{ text: 'ような', time: 0.7 },
			{ text: '夜だけど', time: 1.5 },
			{ text: 'あーあ', time: 1.0 },
			{ text: '二人', time: 0.8 },
			{ text: '刻もう', time: 1.6 }
	];
	
	const music = {
		volume: 0.5,
		title: 'Night dancer',
		links: [ '@Imase', '@ShaniaYan'],
		lyrics: lyric,
		font: 'Montserrat',
		color_background: '#323232',
		colors: ['#fffd06', '#00fefe'],
		url: 'audios/night_dancer.mp3'
	};
</script>

<template>
	<link rel='preload' href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' as='style'>
	<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'>
	<Lyrics :fullscreen='true'
		:volume='music.volume'
		:title='music.title'
		:links='music.links'
		:lyrics='music.lyrics'
		:font='music.font'
		:color_background='music.color_background'
		:colors='music.colors'
		:url='music.url'></Lyrics>
</template>
