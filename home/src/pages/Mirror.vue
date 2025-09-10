<script setup lang='ts'>
	import Lyrics from '../components/Lyrics.vue'
	
	const lyric = [
			{ text: '踊り', time: 1.0 },
			{ text: '明かそうぜ', time: 0.8 },
			{ text: 'Mirror', time: 0.5 },
			{ text: 'Mirror', time: 0.5 },
			{ text: 'Dance in the mirror', time: 1.1 },
			{ text: 'Mirror', time: 0.5 },
			{ text: 'Mirror', time: 0.5 },
			{ text: 'Dance in the mirror', time: 1.1 },
			{ text: '私', time: 0.6 },
			{ text: 'と', time: 0.6 },
			{ text: 'あなた', time: 0.6 },
			{ text: 'ゆらめく', time: 1.2 },
			{ text: '星にでも', time: 0.4 },
			{ text: 'なれたら', time: 0.8 },
			{ text: 'Kira', time: 0.5 },
			{ text: 'Kira', time: 0.5 },
			{ text: 'Dance in the floor', time: 1.1 },
			{ text: 'Kira', time: 0.5 },
			{ text: 'Kira', time: 0.5 },
			{ text: 'Dance in the floor', time: 1.1 },
			{ text: 'あなた', time: 0.6 },
			{ text: 'と', time: 0.6 },
			{ text: '私', time: 0.6 },
			{ text: '夜の', time: 0.8 },
			{ text: '終わりまで', time: 1.2 },
			{ text: 'Da-da-dance', time: 0.8 },
			{ text: 'in the mirror', time: 0.8 },
			{ text: 'me', time: 0.8 },
			{ text: '目と目', time: 0.4 },
			{ text: 'が合っても', time: 0.4 },
			{ text: 'アウトサイダー', time: 0.8 },
			{ text: '言い訳', time: 0.8 },
			{ text: '並べていたら', time: 0.8 },
			{ text: '心も', time: 0.4 },
			{ text: '疲れたの', time: 0.4 },
	];

	const music = {
		volume: 1.0,
		title: 'Mirror',
		links: [ '@Ado' ],
		lyrics: lyric,
		font: 'Bebas Neue',
		color_background: '#323232',
		colors: ['#b548e1', '#383be9', '#d10003'],
		url: 'audios/mirror.mp3'
		
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