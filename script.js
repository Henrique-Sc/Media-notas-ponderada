function media() {
  nome = document.getElementById('nome').value
  nota1 = parseFloat(document.getElementById('nota1').value);
  nota2 = parseFloat(document.getElementById('nota2').value);
  nota3 = parseFloat(document.getElementById('nota3').value);

  var media = ((nota1 * 0.2) + (nota2 * 0.3) + (nota3 * 0.5))

  document.getElementById('result').style.visibility = 'visible'
  document.getElementById('mostrarNome').innerHTML = 'Nome: ' + nome;
  document.getElementById('mostrarMedia').innerHTML = 'Média: ' + media.toFixed(2);
}
