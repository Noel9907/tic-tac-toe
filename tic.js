
function sun(x){
    if(f!== 1 && f!== 0){
        f=0;
    }
    if(f==1){
        document.getElementById("tag"+x).style.backgroundColor = "#2F3C7E";
        document.getElementById("tag"+x).style.borderRadius = "100%";
        f=0;
    }else{
        // document.getElementById("tag"+x).style.backgroundColor="rgb(245, 84, 84)";
        document.getElementById("tag"+x).innerHTML="&#10060";
        f=1;
    }
}
 let f;
