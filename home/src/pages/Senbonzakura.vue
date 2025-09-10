<script setup lang='ts'>
	import Lyrics from '../components/Lyrics.vue'
	
	const lyric = [
			{ text: '千本桜', time: 1.7 },
			{ text: '夜ニ', time: 0.6 },
			{ text: '紛レ', time: 1.0 },
			{ text: '君ノ', time: 0.8 },
			{ text: '声モ', time: 0.6 },
			{ text: '届カナイヨ', time: 1.5 },
			{ text: '此処は', time: 0.5 },
			{ text: '宴', time: 1.0 },
			{ text: '鋼の檻', time: 1.8 },
			{ text: 'その', time: 0.4 },
			{ text: '断頭', time: 0.8 },
			{ text: '台で', time: 0.8 },
			{ text: '見下ろして', time: 1.0 },
			{ text: '三千', time: 1.0 },
			{ text: '世界', time: 1.0 }, { text: '常世之闇', time: 1.2 },
			{ text: '嘆ク唄モ', time: 2.0 },
			{ text: '聞コエナイヨ', time: 1.0 },
			{ text: '希望の丘', time: 1.8 },
			{ text: '遥か彼方', time: 1.5 },
			{ text: 'その', time: 0.6 },
			{ text: '閃光弾を', time: 1.4 },
			{ text: '打ち上げろ', time: 1.0 }
	];

	const music = {
		volume: 0.3,
		title: 'Senbonzakura',
		links: [ '@Kurousa-P', '@HatsuneMiku'],
		lyrics: lyric,
		font: 'Sawarabi Mincho',
		color_background: '#323232',
		colors: [ '#e6007d' ],
		url: 'audios/senbonzakura.mp3'
	};
</script>

<template>
	<link rel='preload' href='https://fonts.googleapis.com/css?family=Sawarabi+Mincho' as='style'>
	<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Sawarabi+Mincho'>
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
