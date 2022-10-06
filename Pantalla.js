
class Pantalla {
    constructor (pantallaAnterior, pantallaActual){
        this.pantallaActual = pantallaActual;
        this.pantallaAnterior = pantallaAnterior;
        this.calculadora = new Operaciones();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+', dividir: '/', multiplicar: '*', restar: '-',
        }
        this.historial=[]
    }

    listar(){
        let tbody=document.getElementById("tusuarios")
        let tablallena="";     
        for(let i=0;i<this.historial.length;i++){
            tablallena+="<tr><td>"+this.historial[i].operacion+"</td></tr>";
        }    
        tbody.innerHTML=tablallena;  
    }

    limpiarHistorial(){
        this.historial = [];
        this.listar();
    }

    addNumero(num){
        if (num === '.' && this.valorActual.includes('.')) return alert("No puedes usar dos puntos decimales")
        this.valorActual = this.valorActual.toString() + num.toString();
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    imprimirValores(){
        this.pantallaActual.textContent = this.valorActual;
        this.pantallaAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
       
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        
        if (isNaN(valorActual) || isNaN(valorAnterior)  )return 
        
        var aux = this.valorActual;
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual); 

        const valorHistorial = {operacion: `${this.valorAnterior} ${this.signos[this.tipoOperacion]} ${aux} ${"="} ${this.valorActual}` }
        this.historial.push(valorHistorial);
    }

    operar(tipo){
        if (tipo === 'igual' && (this.valorActual === '' || this.valorAnterior === '')) return alert("No es posible igualar")
        if (tipo !== 'igual' && (this.valorActual === '' && this.valorAnterior === '')) return alert("Debes ingresar un numero antes de una operacion")
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
        
    }

    

}


class Operaciones{
    sumar(num1, num2){
        return num1 + num2;
    }
    restar(num1, num2){
        return num1 - num2;
    }
    dividir(num1, num2){
        return num1 / num2;
    }
    multiplicar(num1, num2){
        return num1 * num2;
    }
}
