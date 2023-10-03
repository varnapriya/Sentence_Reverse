
 
   // let a=prompt("Enter the sentenceto reverse:")
   let str="This is a sunny day";
   let wstr=" ";
   var rstr=new Array();

  // let rstr=str.split("").reverse().join("");
  for(let i=0;i<str.length;i++)
  {
    if(str.charAt(i)!==" ")
    {
       
    wstr+=str.charAt(i);

    }
    else
    {
        wstr=wstr.split("").reverse().join("");
       rstr.push(wstr);
       wstr=" ";
    }
  }
  wstr=wstr.split("").reverse().join("");
       rstr.push(wstr);
   console.log(rstr.join("").toString());
 
