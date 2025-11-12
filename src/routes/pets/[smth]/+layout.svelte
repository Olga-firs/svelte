<script lang="ts">
    let {data, children}=$props();
</script>
<main>
{@render children()}
</main>
<aside>
    
<h1>Cats</h1>
<ul>
{#each data.cats as {pname}}
<li><a href='/pets/{pname}'>{pname}</a></li>
{/each}
</ul>

<h1>Dogs</h1>
<ul>
{#each data.dogs as {pname}}
<li><a href="/pets/{pname}">{pname}</a></li>
{/each}
</ul>
</aside>


