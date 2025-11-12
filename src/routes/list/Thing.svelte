<script>
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	// `name` is updated whenever the prop value changes...
	let { name } = $props();

	// ...but `emoji` is fixed upon initialisation
    let name1=String(name);
    
	// @ts-ignore
	const emoji = emojis [ name ];
</script>

<p>{emoji} = {name}</p>