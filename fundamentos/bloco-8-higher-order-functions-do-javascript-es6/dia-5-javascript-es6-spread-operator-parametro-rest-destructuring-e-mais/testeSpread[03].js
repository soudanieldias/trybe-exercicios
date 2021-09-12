const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// imc: recebe peso e altura quando é chamada, e executa a operação
// Ao final, arredonda o resultado para 2 casas depois da vírgula
const patientInfo = [60, 1.7]; // Peso e altura do paciente, respectivamente

console.log(imc(...patientInfo)); // 20.76
// Chama a arrowFunction imc, e passa os dados do pacientInfo com spreadOperator