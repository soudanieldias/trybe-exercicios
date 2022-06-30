# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

lista = [10, 20, 30, 40];

def media_aritmetica(lista):
  soma_elementos = 0
  for elemento in lista:
    soma_elementos += elemento
  print(soma_elementos / len(lista))
  return soma_elementos / len(lista)

media_aritmetica(lista);