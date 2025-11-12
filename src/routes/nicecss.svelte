<script lang="ts">
    import { decor } from './share.svelte.js';
    let {color} =$props();
</script>

<p style="background-color:rgb({decor.color1},{decor.color2}, {decor.color3})"> Nice? nice! </p>