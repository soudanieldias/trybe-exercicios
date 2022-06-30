# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

num1 = 10
num2 = 20

def calc_maior(num1, num2):
  if (num1 > num2):
    print('num1 > num2: ', num1)
    num1
  else:
    print('num2 > num1: ', num2)
    num2

calc_maior(num1, num2)