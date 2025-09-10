<script setup lang='ts'>
	import Lyrics from '../components/Lyrics.vue'
	
	const lyric = [
			{ text: '君の', time: 1.0 },
			{ text: '声', time: 0.5 },
			{ text: 'が', time: 1.0 },
			{ text: '君', time: 1.5 },
			{ text: 'の', time: 1.0 },
			{ text: '君', time: 1.5 },
			{ text: 'の', time: 1.0 },
			{ text: '君', time: 1.5 },
			{ text: 'の', time: 1.0 },
			{ text: '声', time: 1.3 },
			{ text: 'が', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 1.0 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 1.0 },
			{ text: '君', time: 1.0 },
			{ text: '傷つけないで', time: 1.5 },
			{ text: 'あー', time: 1.5 },
			{ text: '君', time: 1.5 },
			{ text: 'の', time: 1.5 },
			{ text: '君', time: 1.5 },
			{ text: 'の', time: 1.5 },
			{ text: '君', time: 1.0 },
			{ text: 'の', time: 0.8 },
			{ text: '声', time: 1.3 },
			{ text: 'が', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 1.0 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.8 },
			{ text: '君', time: 1.0 },
			{ text: '傷つけないで', time: 1.5 },
			{ text: 'あー', time: 3.0 },
			{ text: 'のー', time: 3.0 },
			{ text: 'のー', time: 3.0 },
			{ text: '声', time: 1.5 },
			{ text: 'が', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 1.0 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.5 },
			{ text: '遠い', time: 0.8 },
			{ text: '君', time: 1.0 },
			{ text: '傷つけないで', time: 1.8 },
			{ text: 'がー', time: 1.7 },
			{ text: 'のー', time: 1.0 },
			{ text: 'が', time: 1.3 },
			{ text: '声', time: 1.5 },
			{ text: 'が', time: 1.0 },
			{ text: 'ののの', time: 1.5 },
			{ text: 'が', time: 1.5 },
			{ text: '声', time: 1.3 },
			{ text: 'が', time: 1.7 },
			{ text: 'のー', time: 1.0 },
			{ text: 'が', time: 1.3 },
			{ text: '声', time: 1.5 },
			{ text: 'が', time: 1.0 },
			{ text: 'ののの', time: 1.5 },
			{ text: 'が', time: 1.5 },
			{ text: '声', time: 1.3 },
			{ text: 'が', time: 1.7 },
			{ text: '君', time: 1.0 },
			{ text: 'の', time: 1.0 },
			{ text: '君', time: 1.2 },
			{ text: 'の', time: 1.2 },
			{ text: '君', time: 1.4 },
			{ text: 'の', time: 1.4 },
			{ text: '声', time: 1.3 }
	];
	
	const music = {
		volume: 0.5,
		title: 'Paranoia',
		links: [ '@Kentenshi' ],
		lyrics: lyric,
		font: 'AoyagiSosekiFont2OTF',
		// Hannari
		color_background: '#323232',
		colors: [ '#de3afd' ],
		url: 'audios/paranoia.mp3'
	};

	const font = new FontFace('AoyagiSosekiFont2OTF', 'url(fonts/AoyagiSosekiFont2.otf)');
	font.load().then(() => {
		document.fonts.add(font);
	});
</script>

<template>
	<link rel='preload' href='fonts/AoyagiSosekiFont2.otf' as='font' crossorigin='anonymous'>
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
