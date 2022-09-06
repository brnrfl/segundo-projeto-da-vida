function c_f()
{
  var celcius = parseFloat(prompt("Digite a temperatura em ºC", "Somente números e ao invés de vírgula utilize ponto"))
  var calcF = ((celcius*1.8)+32).toFixed(0)
  
  alert("A temperatura é de " + calcF + "ºF")
}

//essa primeira parte é a função para o botão de cálculo de celcius para fahrenheit

function f_c()
{
  var fahrenheit = parseFloat(prompt("Digite a temperatura em ºF", "Somente números e ao invés de vírgula utilize ponto"))
  var calcC = ((fahrenheit-32)/1.8).toFixed(0)
  
  alert("A temperatura é de " + calcC + "ºC")
}

//essa segunda parte é a função para o botão de cálculo de fahrenheit para celcius