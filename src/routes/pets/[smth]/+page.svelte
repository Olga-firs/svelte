<script lang="ts"> 
let {data} :{data: {pet:{pname:String,weight:String}}}=$props();
</script>

<ul>
    <li> Name: {data.pet.pname};</li>
     <li> weight: {data.pet.weight};</li>
</ul>
