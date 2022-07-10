class Geladeira:
  def __init__(self, cor, marca, modelo, preco, tensao):
    self.__cor = cor
    self.__marca = marca
    self.__modelo = modelo
    self.__preco = preco
    self.__tensao = tensao
    self.__ligada = False
  
  def get_info(self):
    return f"""
      Especificações do Produto:
      Cor: {self.__cor}
      Marca: {self.__marca}
      Modelo: {self.__modelo}
      Preço: {self.__preco}
      Tensão: {self.__tensao}
    """

  def ligar_geladeira(self):
    if(self.__ligada == True):
      print('Geladeira já está Ligada!')
      return 'Geladeira já está Ligada!'
    else:
      self.__ligada = True
      print('Geladeira Ligada!')
      return 'Geladeira Ligada'
  
  def desligar_geladeira(self):
    if(self.__ligada == False):
      print('Geladeira já está Desligada!')
      return 'Geladeira já está Desligada!'
    else:
      self.__ligada = False
      print('Geladeira Desligada!')
      return 'Geladeira Desligada'

  def __str__(self):
    return f"""
      Especificações do Produto:
      Cor: {self.__cor}
      Marca: {self.__marca}
      Modelo: {self.__modelo}
      Preço: {self.__preco}
      Tensão: {self.__tensao}
    """


geladeira_branca = Geladeira('Branca', 'Electrolux', 'DC49A', 2800.00, 220)
print(geladeira_branca)

geladeira_branca.ligar_geladeira()
geladeira_branca.ligar_geladeira()

geladeira_branca.desligar_geladeira()
geladeira_branca.desligar_geladeira()