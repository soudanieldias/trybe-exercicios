# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:

"""
 lê todas essas informações;
 aplique um filtro, mantendo somente as pessoas que estão reprovadas;
 escreva seus nomes em outro arquivo.
"""

recuStudents = []
with open("arquivo.txt") as gradesFile:
    for line in gradesFile:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("recuStudents.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)