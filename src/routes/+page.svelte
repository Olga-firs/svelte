<script lang="ts">
    import Button1 from "./button1.svelte";
    import Nicecss from "./nicecss.svelte";
    import List from "./list/+page.svelte"
    import { decor } from "./share.svelte"
    let name="Olga";
    
</script>
<h1>{name.toUpperCase()} Welcome to SvelteKit</h1>
<Button1 colorToChange=1/>
<br>
<Button1 colorToChange=2/>
<br>
<Button1 colorToChange=3/>
<br>
<Nicecss  color="red"/>
<br>

{#if decor.count>=3 }
<List />
{:else}
<p>Not yet</p>
{/if}