class Livro:
    def __init__(self, titulo, autor, paginas) :
        self.__titulo = titulo
        self.__autor = autor
        self.__paginas = paginas

    def descricao(self):
        return f"{self.__titulo} por {self.__autor} com {self.__paginas} paginas."
    
    @property
    def titulo(self):
        return self.__titulo
    
    @titulo.setter
    def titulo(self, novo_titulo):
        if novo_titulo:
            self.__titulo = novo_titulo
        else:
            print("Titulo inválido!")

    @property
    def autor(self):
        return self.__autor
    
    @autor.setter
    def autor(self,novo_autor):
        if novo_autor:
            self.__autor = novo_autor
        else:
            print("Autor inválido!")

    @property
    def paginas(self):
        return self.__paginas
    
    @paginas.setter
    def paginas(self, novo_numero):
        if novo_numero > 0:
            self.__paginas = novo_numero
        else:
            print("Número de páginas inválido!")

harry_potter = Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 309 )

print(harry_potter.descricao())

print(harry_potter.titulo)

harry_potter.titulo = "Harry Potter e a Câmara Secreta"
print(harry_potter.titulo)

harry_potter.paginas = -1