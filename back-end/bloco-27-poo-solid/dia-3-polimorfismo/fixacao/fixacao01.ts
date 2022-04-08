// Crie uma classe abstrata Character
// que tenha os métodos abstratos talk(): void e specialMove(): void.
abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

// Crie a classe concreta MeleeCharacter
// que estenda Character e sobrescreva os métodos abstratos dessa classe.
class MeeleeCharacter extends Character {
  constructor(
    private name: string,
    private specialMoveName: string) {
      super();
    }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`Hi, I'm ${this.name}. I attack at close range.`);
  }
  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(this.specialMoveName);
  }
}

// Crie a classe concreta LongRangeCharacter
// que estenda Character e sobrescreva os métodos abstratos dessa classe.
class LongRangeCharacter extends Character {
  constructor(
    private name: string,
    private specialMoveName: string) {
      super();
    }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`Hi, I'm ${this.name}. I can attack from a long range. `);
  }
  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(this.specialMoveName);
  }
}

// Crie uma função que receba como parâmetro character: Character
// e chame os métodos talk e specialMove para apresentar o personagem.
function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MeeleeCharacter('yoshi', 'Super dragon')
const samus = new LongRangeCharacter('samus', 'Zero Laser')

characterPresentation(yoshi);
characterPresentation(samus);