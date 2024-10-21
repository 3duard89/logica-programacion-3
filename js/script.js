const btn = document.getElementById("enviar");

btn.addEventListener("click", () =>{ 
    const inputNumero = document.getElementById("numeroEntrada").value;
    const areaResultado = document.getElementById("resultado");
    let mensaje = inputNumero+'! => ';
    let acumulado=1;

    try{
        let numero = parseInt(inputNumero);
        for(let i=1 ; i<=numero; i++){
            if(i==numero){
                acumulado *= i;
                mensaje += i+' ';
            }else{
                acumulado *= i;
                mensaje += i+' x ';
            }
        }
    }catch{
        mensaje = "Debes Ingresar Un Numero";
    };
    
    inputNumero.innerText = "";
    areaResultado.innerText = `${mensaje} = ${acumulado}`;
});
