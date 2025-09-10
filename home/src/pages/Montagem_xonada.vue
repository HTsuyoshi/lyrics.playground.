<script setup lang='ts'>
	import Lyrics from '../components/Lyrics.vue'
	
	const lyric = [
			{ text: 'Oh', time: 0.3 },
			{ text: 'my', time: 0.3 },
			{ text: 'god', time: 1.0 },
			{ text: 'Emocional', time: 1.6 },
			{ text: 'mas', time: 0.4 },
			{ text: 'não', time: 0.4 },
			{ text: 'envolve', time: 0.4 },
			{ text: 'coração', time: 0.8 },
			{ text: 'eu', time: 0.4 },
			{ text: 'vou', time: 0.6 },
			{ text: 'viver', time: 0.8 },
			{ text: 'a minha', time: 0.4 },
			{ text: 'vida', time: 0.4 },
			{ text: 'dançando', time: 1.2 },
			{ text: 'ela', time: 0.4 },
			{ text: 'foge', time: 0.4 },
			{ text: 'de', time: 0.4 },
			{ text: 'tua', time: 0.4 },
			{ text: 'casa', time: 1.6 },
			{ text: 'sinta', time: 0.8 },
			{ text: 'a batida', time: 0.8 },
			{ text: 'então', time: 0.4 },
			{ text: 'dança', time: 0.6 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.6 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.6 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.6 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'sinta', time: 0.8 },
			{ text: 'a batida', time: 0.8 },
			{ text: 'então', time: 0.4 },
			{ text: 'dança', time: 0.6 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.4 },
			{ text: 'ah', time: 0.6 },
	];

	const music = {
		volume: 1.0,
		title: 'Montagem Xonada',
		links: [ '@MXZI', '@DJ Javi26', '@DJ Samir' ],
		lyrics: lyric,
		font: 'Bebas Neue',
		color_background: '#323232',
		colors: ['#ff0000'],
		url: 'audios/montagem_xonada.mp3'
	};
</script>

<template>
	<link rel='preload' href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' as='style'>
	<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'>
	<Lyrics :fullscreen='true'
		:volume='music.volume'
		:title='music.title' :links='music.links'
		:lyrics='music.lyrics'
		:font='music.font'
		:color_background='music.color_background'
		:colors='music.colors'
		:url='music.url'></Lyrics>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
</style>