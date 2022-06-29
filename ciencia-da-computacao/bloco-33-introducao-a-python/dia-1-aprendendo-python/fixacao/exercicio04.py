"""
Exercício 4: Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que receba o custo total e a imprima.
"""

custo_livro = 24.20;

custo_com_desconto = custo_livro * 0.6;

print('Custo com Desconto:', custo_com_desconto);

frete_primeiro_exemplar = 3.00;

frete_demais_exemplares = 0.75;

total_livros = 60;

def calcula_custo ():
	if total_livros > 1:
		custo_frete = (total_livros - 1) * frete_demais_exemplares + frete_primeiro_exemplar
		custo_total = custo_com_desconto * total_livros + custo_frete
		print(custo_total);
		return custo_total


calcula_custo();

