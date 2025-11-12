<script lang="ts">
    import {enhance} from "$app/forms";
    import {fly,slide} from "svelte/transition"
 let { data,form } = $props();  

</script>
<h1>Cats</h1>
<ul>
{#each data.cats as {pname}}
<li  in:fly={{y:200}} out:slide>
    <form method="POST" action="?/delete" use:enhance>
    <input type="hidden" name="pname" value={pname}/>
    <a href="./pets/{pname}">{pname}</a><button aria-label="mmm">x</button>
    </form>
</li>
{/each}
</ul>

<h1>Dogs</h1>
<ul>
{#each data.dogs as {pname} (pname)}
<li><form method="POST" action="?/delete" use:enhance>
    <input type="hidden" name="pname" value={pname}/>
    <a href="./pets/{pname}">{pname}</a><button aria-label="mmm">x</button>
    </form>
</li>

{/each}
</ul>
<div style="background-color:grey;display: block;width:200px">


   <p>{form?.message}</p> 
<form method="POST" action="?/create" >

<label >who is flaffy? 
<select id="sp" name="sp">
  <option value="Cat" >Cat</option>
  <option value="Dog">Dog</option>
</select>
</label><br>
<lable>name<input name="pname"/></lable>
<br>
<lable>weight<input name="weight" type="number"/></lable>

<input type="submit">
</form>
</div>