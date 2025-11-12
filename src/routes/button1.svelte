<script lang="ts">
    import { decor } from './share.svelte.js';
    let count =$state( 0 );
   

    let { colorToChange } = $props();
    
    function add(){
       decor.count++;
       count++;
       switch( colorToChange ){
       case "1": 
       decor.color1 -=10;
       break;
       case "2":
        decor.color2 -=10;
        break;
        default:
            decor.color3 -= 10;
       }
       //alert(decor.color1 + " "+decor.color2 +" "+decor.color3);
    
    }
</script>

<input type="button" value="Hello! {colorToChange} {count}" onclick={add}>


