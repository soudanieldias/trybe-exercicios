# Exercício 9: Remova a propriedade cuja chave é "origem" e imprima o objeto no console.

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "sim"

del info["origem"]

print(info)