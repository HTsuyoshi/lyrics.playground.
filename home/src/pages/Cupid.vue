<script setup lang='ts'>
	import Lyrics from '../components/Lyrics.vue'
	
	const lyric = [
			{ text: 'I look for', time: 1.2 },
			{ text: 'his arrows', time: 1.0 },
			{ text: 'everyday', time: 2.0 },
			{ text: 'I guess', time: 1.0 },
			{ text: 'he got lost', time: 1.0 },
			{ text: 'or', time: 0.4 },
			{ text: 'flew away', time: 1.4 },
			{ text: 'Waiting', time: 0.4 },
			{ text: 'around', time: 0.4 },
			{ text: 'is a waste', time: 1.0 },
			{ text: 'Been counting', time: 0.4 },
			{ text: 'the days', time: 0.4 },
			{ text: 'since november', time: 1.0 },
			{ text: 'Is loving', time: 0.4 },
			{ text: 'as good as they', time: 0.8 },
			{ text: 'say?', time: 2.0 },
			{ text: 'Now I\'m so', time: 1.0 },
			{ text: 'lonely', time: 1.0 },
			{ text: 'lonely', time: 0.4 },
			{ text: 'Oh', time: 0.4 },
			{ text: 'I wish', time: 0.8 },
			{ text: 'I\'d find a lover', time: 1.0 },
			{ text: 'that could', time: 0.4 },
			{ text: 'hold me', time: 1.0 },
			{ text: 'hold me', time: 0.4 },
			{ text: 'Now I\'m crying', time: 1.0 },
			{ text: 'in my room', time: 1.0 },
			{ text: 'So skeptical', time: 2.0 },
			{ text: 'of love', time: 0.8 },
			{ text: 'Say what you say', time: 1.4 },
			{ text: 'but I want it', time: 0.6 },
			{ text: 'more', time: 0.6 },
			{ text: 'more', time: 0.6 },
			{ text: 'mooore', time: 0.8 },
			{ text: 'I gave a', time: 0.6 },
			{ text: 'second chance to', time: 1.0 },
			{ text: 'Cupid', time: 2.0 },
			{ text: 'But now', time: 0.8 },
			{ text: 'I\'m left here', time: 0.8 },
			{ text: 'feelin\' stupid', time: 3.6 },
			{ text: 'Oh, the way', time: 0.8 },
			{ text: 'he makes me feel', time: 1.4 },
			{ text: 'that love isn\'t real', time: 2.0 },
			{ text: 'Cupid', time: 1.2 },
			{ text: 'is', time: 1.0 },
			{ text: 'so', time: 0.4 },
			{ text: 'dumb', time: 6.0 }
	];

	const music = {
		volume: 1.0,
		title: 'Cupid',
		links: [ '@FiftyFifty' ],
		lyrics: lyric,
		font: 'Bebas Neue',
		color_background: '#323232',
		colors: ['#e75b66', '#f0c1b7', '#f9a99e', '#e9d397'],
		url: 'audios/cupid.mp3'
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
