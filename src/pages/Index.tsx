import PostCard from "@/components/PostCard";
import { posts } from "@/data/posts";
import { Sparkles, PenTool } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-primary/10">
              <PenTool className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Bem-vinda ao Meu Blog
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Um espaço pessoal onde compartilho reflexões sobre tecnologia, vida, 
            crescimento pessoal e tudo que me inspira no dia a dia.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Feito com carinho e muito café</span>
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">Últimas Postagens</h2>
          <div className="text-sm text-muted-foreground">
            {posts.length} post{posts.length !== 1 ? 's' : ''}
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
