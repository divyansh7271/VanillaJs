

   // Declare and Define variable reference to all inputs inside the 'control' class

   const inputs = document.querySelectorAll('.controls input');
   
    // Event Handler function. Such object destructure much default parameters wow
   
    const handleUpdate = {({target: { name,value,dataset :{sizing: suffix = ""}}}) => {
       document.documentElement.style.setProperty(`--${name}`,value + suffix);
       console.log(handleUpdate);
   } 
   
   
   inputs.forEach(input => input.addEventListener('change',handleUpdate));
