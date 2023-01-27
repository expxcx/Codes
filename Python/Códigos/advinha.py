import random

print('Jogo da adivinhação\n*******************')

numero_secreto = random.randrange(1,100)
dificuldade = int(input('Escolha a dificuldade:\n1- Fácil\n2- Média\n3- Difícil\n4- Satanás\n'))

if(dificuldade == 1):
    tentativas = 20
elif(dificuldade == 2):
    tentativas = 10
elif(dificuldade == 3):
    tentativas = 5
elif(dificuldade == 4):
    tentativas = 1

while(tentativas > 0):
    chute = int(input('Digite o seu número: '))
    print('Você digitou: ', chute)

    acertou = chute == numero_secreto
    maior = chute > numero_secreto
    menor = chute < numero_secreto

    if(acertou):
        print('Você acertou!')
        break
    elif(maior):
        print('Você errou! O seu chute foi maior que o número secreto')
    elif(menor):
        print('Você errou! O seu chute foi menor que o número secreto')
    
    tentativas = tentativas - 1
    print(f'Tentativas restantes: {tentativas}\n')
print(f'Número correto: {numero_secreto}')