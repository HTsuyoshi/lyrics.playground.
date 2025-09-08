<script setup lang='ts'>
	import { ref, onMounted } from 'vue';
	import { SelectionMenu, get_random } from '../lib/Lyrics.ts'

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


	let music_list: Array<{
		name: string,
		url: string,
		img: string
	}> = [
		{
			name: 'Night Dancer (ナイトダンサー)',
			url: 'night_dancer',
			img: '/images/night_dancer.png',
		},
		{
			name: 'Senbonzakura (千本桜)',
			url: 'senbonzakura',
			img: '/images/senbonzakura.png',
		},
		{
			name: 'Cupid',
			url: 'cupid',
			img: '/images/cupid.png',
		},
		{
			name: 'Paranoia (パラノイア)',
			url: 'paranoia',
			img: '/images/paranoia.png',
		},
	];

	let menu: SelectionMenu;

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

	window.addEventListener (
		'mousemove',
		(e) => {
			const canvas: HTMLCanvasElement | null = document.getElementById('lyrics') as HTMLCanvasElement | null;
			if (!canvas) return;
			const rect: DOMRect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
		}
	);

	window.addEventListener (
		'click',
		(e) => {
			const canvas: HTMLCanvasElement | null = document.getElementById('lyrics') as HTMLCanvasElement | null;
			if (!canvas) return;
			const rect: DOMRect = canvas.getBoundingClientRect();
			mouse.x = e.clientX - rect.left;
			mouse.y = e.clientY - rect.top;
			menu.click(mouse);
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

		menu = new SelectionMenu(props.font, color, ctx, win, music_list);

		function draw_animation(): void {
			menu.update(mouse);
			requestAnimationFrame(draw_animation);
		}

		requestAnimationFrame(draw_animation);
	});
</script>

<template>
	<canvas ref='canvasRef'></canvas>
</template>
