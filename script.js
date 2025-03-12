let carroA, carroB, velA, velB;

carroA = prompt("Digite o nome do Carro A: ")
carroB = prompt("Digite o nome do Carro B: ")
velA = parseFloat(prompt("Digite a velocidade do Carro A: "))
velB = parseFloat(prompt("Digite a velocidade do Carro B: "))

if(velA > velB){
    alert("Carro A é mais rápido")
}
else if(velB > velA){
    alert("Carro B é mais rápido")
}
else if(velA === velB){
    alert("Ambos os carros tem a mesma velocidade")
}

//------------------------------------------------------------------------
let personagemA, personagemB, vidaA, vidaB, danoA, danoB, escudoA, escudoB;

personagemA = prompt("Digite o nome do Personagem A: ")
personagemB = prompt("Digite o nome do Personagem B: ")
vidaA = parseFloat(prompt("Digite a vida do personagem A: "))
vidaB = parseFloat(prompt("Digite a vida do personagem B: "))
danoA = parseFloat(prompt("Digite o dano do personagem A: "))
danoB = parseFloat(prompt("Digite o dano do personagem B: "))
defesaA = parseFloat(prompt("Digite a defesa do personagem A: "))
defesaB = parseFloat(prompt("Digite a defesa do personagem B: "))
escudoA = prompt("Digite se o personagem A possui escudo (S/N): ")
escudoB = prompt("Digite se o personagem B possui escudo (S/N): ")

console.log(
    "personagem A\n" +
    "\nNome: " + personagemA +
    "\nvida: " + vidaA +
    "\nDano: " + danoA +
    "\nDefesa: " + defesaA +
    "\nEscudo: " + escudoA
)
console.log(
    "personagem B\n" +
    "\nNome: " + personagemB +
    "\nvida: " + vidaB +
    "\nDano: " + danoB +
    "\nDefesa: " + defesaB +
    "\nEscudo: " + escudoB
)

alert(
    "personagem A\n" +
    "\nNome: " + personagemA +
    "\nvida: " + vidaA +
    "\nDano: " + danoA +
    "\nDefesa: " + defesaA +
    "\nEscudo: " + escudoA
)
alert(
    "personagem B\n" +
    "\nNome: " + personagemB +
    "\nvida: " + vidaB +
    "\nDano: " + danoB +
    "\nDefesa: " + defesaB +
    "\nEscudo: " + escudoB
)
while (vidaA > 0 && vidaB > 0){
    if (danoA > defesaB && escudoB === "N"){
        console.log("Dano recebido: " + (danoA - defesaB))
        vidaB = vidaB - (danoA - defesaB)
        console.log("Vida de " + personagemB + ": " + vidaB)

        alert(
            "O dano recebido por " + personagemA + " foi de " + (danoA-defesaB) +
            "\nA vida atual de " + personagemB + " é " + vidaB
        )
    } 
    if (danoA <= defesaB){
        console.log("Dano recebido: 0")
        console.log("Vida de " + personagemB + ": " + vidaB)
        console.log(personagemB + " não dá dano")

        alert(
            "O dano recebido por " + personagemA + " foi de " + (danoA-defesaB) +
            "\nA vida atual de " + personagemB + " é " + vidaB +
            "\n" + personagemB + " não dá dano. Portanto a vida será reduzida a 0"
        )
        vidaB = 0
    } 
    else if(danoA > defesaB && escudoB === "S"){
        console.log("Dano recebido: " + (danoA - defesaB) / 2)
        vidaB = vidaB - ((danoA - defesaB) / 2)
        console.log("Vida de " + personagemB + ": " + vidaB)

        alert(
            "O dano recebido por " + personagemA + " foi de " + ((danoA - defesaB) / 2) +
            "\nA vida atual de " + personagemB + " é " + vidaB
        )
        
    }

    if (danoB > defesaA && escudoA === "N"){
        console.log("Dano recebido: " + (danoB - defesaA))
        vidaA = vidaA - (danoB - defesaA)
        console.log("Vida de " + personagemA + ": " + vidaA)

        alert(
            "O dano recebido por " + personagemB + " foi de " + (danoB-defesaA) +
            "\nA vida atual de " + personagemA + " é " + vidaA
        )
    } 
    else if(danoB > defesaA && escudoA === "S"){
        console.log("Dano recebido: " + (danoB - defesaA) / 2)
        vidaA = vidaA - ((danoB - defesaA) / 2)
        console.log("Vida de " + personagemA + ": " + vidaA)

        alert(
            "O dano recebido por " + personagemB + " foi de " + ((danoB-defesaA) / 2) +
            "\nA vida atual de " + personagemA + " é " + vidaA
        )
    }
    if(danoB <= defesaA){
        console.log("Dano recebido: 0")
        console.log("Vida de " + personagemA + ": " + vidaA)
        console.log(personagemB + " não dá dano")

        alert(
            "O dano recebido por " + personagemB + " foi 0 " +
            "\nA vida atual de " + personagemA + " é " + vidaA +
            "\n" + personagemA + " não dá dano. Portanto a vida será reduzida a 0"
        )
        vidaA = 0
    }
}
if(vidaA > 0){
    alert("A luta acabou. O vencedor é " + personagemA)
    console.log("A luta acabou. O vencedor é " + personagemA)
}
else if (vidaB > 0){
    alert("A luta acabou. O vencedor é " + personagemB)
    console.log("A luta acabou. O vencedor é " + personagemB)
}
else if(vidaA <= 0 && vidaB <= 0){
    alert("A luta acabou. Houve empate")
    console.log("A luta acabou. Houve empate")
}