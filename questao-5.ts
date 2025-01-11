function reverse(palavra: string) {
    let resultado = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
      resultado += palavra[i];
    }
  
    console.log(resultado);
  }
  
  reverse('pipoca');
  