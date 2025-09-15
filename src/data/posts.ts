export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  likes: number;
  author: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export const posts: Post[] = [
  {
    id: "bem-vinda-ao-meu-blog",
    title: "Bem-vindos ao Blog do Henrique Sciani",
    excerpt: "Esta é a primeira postagem do meu blog! Aqui eu vou compartilhar pensamentos, experiências e descobertas sobre tecnologia, vida e muito mais.",
    content: `
# Bem-vindos ao Blog do Henrique Sciani

Olá! Seja muito bem-vindo ao meu cantinho na internet. Sou Henrique Sciani e este é um espaço que criei para compartilhar um pouquinho do meu mundo com vocês.

## O que você vai encontrar aqui

Neste blog, pretendo compartilhar:

- **Reflexões pessoais** sobre a vida, crescimento e autodescoberta
- **Dicas de tecnologia** que uso no meu dia a dia como desenvolvedor
- **Experiências** que vão moldando quem eu sou
- **Inspirações** que encontro pelo caminho

## Minha jornada

Como desenvolvedor, estou sempre aprendendo algo novo. A tecnologia muda constantemente, e isso me fascina! Aqui vou documentar esse processo de aprendizado e, quem sabe, ajudar outras pessoas que estão no mesmo caminho.

## Conecte-se comigo

Espero que encontre conteúdo interessante por aqui. Se alguma postagem despertar sua curiosidade, não hesite em deixar um like ou entrar em contato!

Este é apenas o começo de uma jornada incrível. Obrigado por fazer parte dela! 💻
    `,
    date: "15 Mar 2024",
    readTime: "3 min",
    category: "Pessoal",
    likes: 12,
    author: {
      name: "Henrique Sciani",
      email: "henriquesciani@gmail.com",
      github: "https://github.com/HenriqueScian1",
      linkedin: "https://www.linkedin.com/in/henrique-sciani/"
    }
  },
  {
    id: "minha-jornada-em-react",
    title: "Minha Jornada Aprendendo React - Henrique Sciani",
    excerpt: "Como comecei a estudar React e as lições que aprendi pelo caminho. Uma reflexão sobre persistência e crescimento na programação.",
    content: `
# Minha Jornada Aprendendo React

Quando comecei a estudar programação, React parecia algo muito distante e complicado. Hoje, olhando para trás, posso dizer que foi uma das melhores decisões que tomei.

## Os primeiros passos

No início, tudo parecia confuso:
- JSX misturando HTML com JavaScript
- Conceitos como props e state
- O famoso "hook" que não fazia sentido

Mas com persistência e muito código, as coisas começaram a fazer sentido.

## O que me ajudou

Algumas coisas que fizeram toda a diferença:

1. **Prática constante** - Todo dia um pouquinho
2. **Projetos pessoais** - Nada melhor que criar algo seu
3. **Comunidade** - Compartilhar dúvidas e aprendizados
4. **Documentação** - A documentação oficial do React é incrível

## Dicas para quem está começando

Se você está começando com React, lembre-se:

- **Seja paciente** - Todo mundo já foi iniciante
- **Não tenha medo de errar** - Os erros são seus melhores professores
- **Celebre as pequenas vitórias** - Cada componente que funciona é uma conquista

## O que vem por aí

Agora estou explorando Next.js e TypeScript. A jornada nunca acaba, e isso é lindo!

Continue programando e acreditando em você! 🚀

*- Henrique Sciani*
    `,
    date: "10 Mar 2024",
    readTime: "5 min",
    category: "Tecnologia",
    likes: 28,
    author: {
      name: "Henrique Sciani",
      email: "henriquesciani@gmail.com",
      github: "https://github.com/HenriqueScian1",
      linkedin: "https://www.linkedin.com/in/henrique-sciani/"
    }
  },
  {
    id: "autocuidado-para-desenvolvedoras",
    title: "Autocuidado Para Desenvolvedores - Henrique Sciani",
    excerpt: "A importância de cuidar da saúde mental e física quando passamos horas programando. Dicas práticas para um dia a dia mais equilibrado.",
    content: `
# Autocuidado Para Desenvolvedores

Programar é apaixonante, mas pode ser bem intenso. Quantas vezes você já ficou horas na frente do computador sem nem perceber?

## Por que autocuidado importa

Quando cuidamos bem de nós mesmos:
- **Somos mais produtivos** e criativos
- **Evitamos o burnout** e esgotamento mental
- **Mantemos a paixão** pelo que fazemos
- **Vivemos de forma mais equilibrada**

## Dicas práticas

### Para o corpo
- **Pause a cada hora** para alongar
- **Mantenha uma boa postura** na cadeira
- **Hidrate-se** constantemente
- **Faça exercícios** regulares

### Para a mente
- **Defina limites** de horário de trabalho
- **Pratique mindfulness** ou meditação
- **Tenha hobbies** fora da tecnologia
- **Conecte-se** com pessoas queridas

### Para o espaço
- **Organize** seu ambiente de trabalho
- **Tenha plantas** por perto
- **Use iluminação** adequada
- **Mantenha** seu setup ergonômico

## Minha rotina pessoal

Eu gosto de:
- Começar o dia com 10 minutos de meditação
- Fazer pausas para um chá ou café especial
- Terminar o trabalho com uma caminhada
- Ler um livro (não técnico!) antes de dormir

## Lembre-se sempre

Você não é uma máquina. Cuide-se com carinho e verá como sua jornada na programação fica ainda mais gratificante! 💝

*- Henrique Sciani*
    `,
    date: "5 Mar 2024",
    readTime: "4 min",
    category: "Bem-estar",
    likes: 45,
    author: {
      name: "Henrique Sciani",
      email: "henriquesciani@gmail.com",
      github: "https://github.com/HenriqueScian1",
      linkedin: "https://www.linkedin.com/in/henrique-sciani/"
    }
  }
];