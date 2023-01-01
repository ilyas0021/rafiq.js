function creetab(im,tit,pr){

    let div=document.createElement('div'),
     img=document.createElement('img'),
     p=document.createElement('p'),
     span=document.createElement('span');

    img.src=im;
    p.appendChild(document.createTextNode(tit));
    span.appendChild(document.createTextNode(pr + "$"));
  
    div.setAttribute('class', 'card cards11');
    img.setAttribute('class','card_img');
    p.setAttribute('class', 'card_text');
    span.setAttribute('class', 'card_text');

    div.append(img);
    div.append(p);
    div.append(span);

(document.getElementById("bors2")).append(div);

}
courses.forEach(e=>{
    creetab(e.image,e.title,e.price);
    
});

const a = document.getElementById("inp11") ; 
const b = document.querySelectorAll(".cards11"); 
a.addEventListener('keyup',(e)=>{
    const c =e.target.value ; 
    b.forEach((e)=>{
        if(e.textContent.indexOf(c)>=0) e.style.display ="block" ; 
        else e.style.display ="none" ; 
    })
}) 

var jer = document.getElementById("jer"); 
jer.addEventListener("click",fprice);
function fprice (){
    let i ; 
    for(i=0 ; i<courses.length;i++){
        if(courses[i].price<=( jer.value))
       b[i].style.display ="block" ;
       else b[i].style.display ="none" ; 
    }
    }
    function filtjs(){
        var i;
            for(i=0;i<courses.length;i++){
                if(courses[i].category=="JS") b[i].style.display="block";
                else b[i].style.display="none";
            }

         };

    function filthtml(){
        var i;
            for(i=0;i<courses.length;i++){
                if(courses[i].category=="HTML") b[i].style.display="block";
                else b[i].style.display="none";
            }

         };
         function filtcss(){
            var i;
                for(i=0;i<courses.length;i++){
                    if(courses[i].category=="CSS") b[i].style.display="block";
                    else b[i].style.display="none";
                }

             };
             function filtphp(){
                var i;
                    for(i=0;i<courses.length;i++){
                        if(courses[i].category=="PHP") b[i].style.display="block";
                        else b[i].style.display="none";
                    }
                    
                 };

                 function filtall(){
                    var i;
                        for(i=0;i<courses.length;i++){
                        b[i].style.display="block";   
                        }
                     };

   