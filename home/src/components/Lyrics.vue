<script setup lang='ts'>
	import { ref, onMounted } from 'vue';
	import { onBeforeRouteLeave } from 'vue-router';
	import { Scene, MusicMenu, get_random } from '../lib/Lyrics.ts'

	type Lyric = {
		text: string;
		time: number;
	};

	// Arguments
	const props = defineProps({
		fullscreen: {
			type: Boolean,
			default: true,
		},
		width: {
			type: Number,
			default: 300,
			validator: (value: number) => Number.isInteger(value)
		},
		height: {
			type: Number,
			default: 400,
			validator: (value: number) => Number.isInteger(value)
		},
		volume: {
			type: Number,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		links: {
			type: Array<string>,
			required: true
		},
		lyrics: {
			type: Array<Lyric>,
			required: true
		},
		font: {
			type: String,
			required: true
		},
		color_background: {
			type: String,
			required: true
		},
		colors: {
			type: Array<string>,
			required: true
		},
		url: {
			type: String,
			required: true
		}
	});

	// Refs
	const canvasRef = ref<HTMLCanvasElement | null>(null);

	// Variables
	let win = {
		w: 300,
		w2: 150,
		h: 400,
		h2: 200
	};

	let mouse = {
		x: 0,
		y: 0
	};

	let color: {
		background: string,
		colors: string[]
	} = {
		background: props.color_background,
		colors: []
	};

	for (let c of props.colors)
		color.colors.splice(get_random(0, color.colors.length), 0, c);

	if (props.fullscreen) {
		win.w = window.innerWidth;
		win.w2 = window.innerWidth/2;
		win.h = window.innerHeight;
		win.h2 = window.innerHeight/2;
	} else {
		win.w = props.width;
		win.w2 = props.width/2;
		win.h = props.height;
		win.h2 = props.height/2;
	}

	let scene: Scene;
	let menu: MusicMenu;

	const audio = new Audio(props.url);
	audio.volume = props.volume;
	// Debugging
	//audio.currentTime = 85.0;

	function start(): void {
		if (audio.paused) {
			if (!menu.hit_button(mouse)) return;
			audio.play();
		} else {
			audio.pause();
		}
		scene.start();
	}

	onBeforeRouteLeave((_to, _from, next) => {
		if (audio) {
			audio.pause();
		}
		next();
	});


	window.addEventListener (
		'mousemove',
		(e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		}
	);

	onMounted(() => {
		const canvas = canvasRef.value;
		if (!canvas) throw new Error('Canvas not found');
		const context = canvas.getContext('2d');
		if (!context) return;

		const ctx = context;

		canvas.width  = win.w;
		canvas.height = win.h;

		canvas.style.background = props.color_background;

		// Events
		if (props.fullscreen) {
			window.addEventListener (
				'resize',
				function () {
					win.w = window.innerWidth;
					win.w2 = window.innerWidth/2;
					win.h = window.innerHeight;
					win.h2 = window.innerHeight/2;
					ctx.canvas.width  = win.w;
					ctx.canvas.height = win.h;
				}
			)
		}

		audio.addEventListener(
			'ended',
			() => {
				scene = new Scene(props.font, props.lyrics, color, ctx, win);
			}
		);

		menu = new MusicMenu(props.font, color, ctx, win, props.title, props.links);
		scene = new Scene(props.font, props.lyrics, color, ctx, win);

		function draw_animation(): void {
			if (audio.paused) menu.update(mouse);
			else scene.update(audio.currentTime);
			requestAnimationFrame(draw_animation);
		}

		requestAnimationFrame(draw_animation);
	});
</script>

<template>
	<canvas @click='start' ref='canvasRef'></canvas>
</template>
