function abc()
        {
          let a=document.getElementById("Input").value;
          if(!parseInt(a)){
            return alert("Please enter a valid time");
          }
          let b=a.slice(0,2);
          let c=a.slice(2,4);
          let d=a.slice(4,6);

document.getElementById("Time").innerHTML=`<h2>Formatted Time:</h2>${b}:${c}:${d}`; 

        }