<script setup lang='ts'>
	import Lyrics from '../components/Lyrics.vue'
	
	const lyric = [
			{ text: 'Why', time: 0.4 },
			{ text: 'can\'t I', time: 0.6 },
			{ text: 'see', time: 0.6 },
			{ text: 'Why', time: 0.4 },
			{ text: 'can\'t I', time: 0.6 },
			{ text: 'see', time: 0.6 },
			{ text: 'All the', time: 1.0 },
			{ text: 'colors', time: 0.8 },
			{ text: 'That', time: 0.4 },
			{ text: 'you', time: 0.6 },
			{ text: 'see', time: 0.6 },
			{ text: 'please', time: 0.6 },
			{ text: 'can I', time: 0.6 },
			{ text: 'be', time: 0.6 },
			{ text: 'please', time: 0.6 },
			{ text: 'can I', time: 0.6 },
			{ text: 'be', time: 0.6 },
			{ text: 'colorful', time: 1.2 },
			{ text: 'and', time: 0.6 },
			{ text: 'free', time: 1.2 },
			{ text: 'what', time: 0.3 },
			{ text: 'the', time: 0.2 },
			{ text: 'hell', time: 0.3 },
			{ text: 'is going on', time: 0.8 },
			{ text: 'Can', time: 0.4 },
			{ text: 'someone', time: 0.6 },
			{ text: 'tell me', time: 0.6 },
			{ text: 'please', time: 0.6 },
			{ text: 'why I\'m', time: 0.6 },
			{ text: 'swiching', time: 0.4 },
			{ text: 'faster', time: 0.4 },
			{ text: 'than', time: 0.4 },
			{ text: 'the channels', time: 0.4 },
			{ text: 'on TV', time: 0.8 },
			{ text: 'I\'m', time: 0.4 },
			{ text: 'black', time: 0.4 },
			{ text: 'then', time: 0.2 },
			{ text: 'I\'m', time: 0.4 },
			{ text: 'white', time: 0.4 },
			{ text: 'NO', time: 0.4 },
			{ text: 'Something', time: 0.4 },
			{ text: 'isn\'t', time: 0.4 },
			{ text: 'right', time: 0.4 },
			{ text: 'my', time: 0.3 },
			{ text: 'enemy', time: 0.5 },
			{ text: 'is', time: 0.4 },
			{ text: 'invisible', time: 0.6 },
			{ text: 'I don\'t know', time: 0.4 },
			{ text: 'how', time: 0.4 },
			{ text: 'to', time: 0.4 },
			{ text: 'fight', time: 0.4 },
			{ text: 'The trembling fear', time: 2.0 },
			{ text: 'is more than I can take', time: 2.0 },
			{ text: 'When I\'m up against', time: 1.2 },
			{ text: 'The echo in', time: 0.8 },
			{ text: 'the mirror', time: 1.0 },
			{ text: 'ECHO', time: 1.2 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
			{ text: 'ECHO', time: 0.4 },
	];

	const music = {
		volume: 0.5,
		title: 'Echo',
		links: [ '@Gumi' ],
		lyrics: lyric,
		font: 'Bebas Neue',
		color_background: '#ffffff',
		colors: ['#323232'],
		url: 'audios/echo.mp3'
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