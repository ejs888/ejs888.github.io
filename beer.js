<script>
       
    function beer()
       var beer = "bottles" 
       for (var i = 99 ; i > 0 ; i--)
       var s = i + " " + beer + " of beer on the wall, " + i + " " + beer + " of beer, " + "take 1 down";  
            
        var next = i - 1;
            if (next > 0)
           {
               s = s + next + " " + beer + " of beer on the wall" + </br>";
           }
           else{
               
               s = s + "No more bottles of beer on the wall" + </br>;
           }
           
           document.write(s)
    
     </script>