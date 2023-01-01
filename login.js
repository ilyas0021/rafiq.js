function confirmpass(form){
    var inp3 =( document.getElementById("inp3").value);
    var inp4 =( document.getElementById("inp4").value);
    if(inp3 == inp4){
        return true ; 
    }
    else 
    document.getElementById("conf").innerHTML = "No confirm password" ;  
    return false ; 

}