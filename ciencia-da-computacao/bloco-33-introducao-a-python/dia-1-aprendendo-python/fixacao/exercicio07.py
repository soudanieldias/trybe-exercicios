"""
permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos
"""

# Exercício 7: Um conjunto ou set pode ser inicializado utilizando-se também o método set().
# # Inicialize uma variável com essa função var = set()
# # e adicione seu nome ao conjunto utilizando um dos métodos vistos acima.
# # Depois, imprima a variável e confira se o retorno é: {'seu_nome'}.

variavel = set()

variavel.add('seu_nome')

print(variavel);