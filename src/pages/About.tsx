import { Card, CardContent } from "@/components/ui/card";
import { Heart, Code, Coffee, Book, Music, Camera } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Code, label: "Desenvolvimento" },
    { icon: Coffee, label: "Café Especial" },
    { icon: Book, label: "Leitura" },
    { icon: Music, label: "Música" },
    { icon: Camera, label: "Fotografia" },
    { icon: Heart, label: "Autocuidado" }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Hero */}
      <section className="text-center py-8">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-rose-gold flex items-center justify-center">
          <Heart className="h-12 w-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gradient">
          Sobre Henrique Sciani
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Desenvolvedor apaixonado por criar experiências digitais incríveis e 
          compartilhar conhecimento com a comunidade.
        </p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Quem Sou */}
        <Card className="card-hover">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-foreground">Quem Sou</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Olá! Sou Henrique Sciani, um desenvolvedor frontend apaixonado por criar 
                interfaces bonitas e funcionais. Trabalho principalmente 
                com React, TypeScript e adoro explorar novas tecnologias.
              </p>
              <p>
                Acredito que a tecnologia pode transformar vidas e por isso 
                dedico parte do meu tempo compartilhando conhecimento através 
                deste blog e em comunidades de desenvolvedores.
              </p>
              <p>
                Quando não estou programando, você pode me encontrar lendo 
                um bom livro, experimentando cafés especiais ou explorando 
                a natureza com minha câmera.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Minha Stack */}
        <Card className="card-hover">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-foreground">Minha Stack</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-primary mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind CSS", "Next.js"].map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Figma", "VS Code", "Vite"].map((tool) => (
                    <span key={tool} className="bg-accent/20 text-foreground px-2 py-1 rounded text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-primary mb-2">Aprendendo</h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "PostgreSQL", "Three.js"].map((learning) => (
                    <span key={learning} className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">
                      {learning}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interesses */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-foreground">
          Coisas que me Inspiram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <Card key={interest.label} className="card-hover">
                <CardContent className="p-4 text-center">
                  <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{interest.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Contact */}
      <Card className="card-hover">
        <CardContent className="p-6 text-center">
          <h2 className="text-xl font-bold mb-4 text-foreground">Vamos Conectar?</h2>
          <p className="text-muted-foreground mb-4">
            Adoraria trocar uma ideia sobre tecnologia, projetos ou simplesmente 
            bater um papo sobre a vida!
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:henriquesciani@gmail.com" 
              className="text-primary hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://github.com/HenriqueScian1" 
              className="text-primary hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="https://www.linkedin.com/in/henrique-sciani/" 
              className="text-primary hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;