# Exercício 13: Um sistema de avaliações registra valores de 0 a 10 para cada avaliação.
#  Após algumas mudanças estes valores precisam ser ajustados para avaliações de 0 a 100.
#  Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10].
#  Escreva um código capaz de gerar as avaliações após a mudança.
#  Neste caso o resultado deveria ser [60, 80, 50, 90, 100].



def convert_ratings():
  ratings = [6, 8, 5, 9, 10]
  new_ratings = []
  for rating in ratings:
    new_ratings.append(rating * 10)
  new_ratings

  print(new_ratings)

convert_ratings()

def convert_ratings2():
  ratings = [6, 8, 5, 9, 10]
  new_ratings = [10 * rating for rating in ratings]
  new_ratings