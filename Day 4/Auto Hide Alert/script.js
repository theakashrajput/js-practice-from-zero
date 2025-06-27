document.querySelector("#show-alert").addEventListener("click", ()=>{
    document.querySelector("#message-panel").style.display = "block";
    
    setTimeout(()=>{
        document.querySelector("#message-panel").style.display = "none";
    }, 3000);
})