import { useParams, Link } from "react-router-dom";
import { posts } from "@/data/posts";
import LikeButton from "@/components/LikeButton";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.id === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto text-center py-16">
        <h1 className="text-2xl font-bold mb-4">Post não encontrado</h1>
        <p className="text-muted-foreground mb-6">
          O post que você está procurando não existe.
        </p>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <Link to="/">
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar aos posts
          </Button>
        </Link>
      </div>

      {/* Post Header */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Tag className="h-3 w-3" />
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime} de leitura</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <p className="text-muted-foreground">
                Por <span className="text-primary font-medium">{post.author.name}</span>
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <a 
                  href={post.author.email} 
                  className="text-primary hover:text-accent transition-colors"
                  title="Email"
                >
                  📧
                </a>
                <a 
                  href={post.author.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                  title="GitHub"
                >
                  🔗
                </a>
                <a 
                  href={post.author.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                  title="LinkedIn"
                >
                  💼
                </a>
              </div>
            </div>
            <LikeButton postId={post.id} initialLikes={post.likes} />
          </div>
        </CardContent>
      </Card>

      {/* Post Content */}
      <Card className="mb-8">
        <CardContent className="p-8 prose prose-gray max-w-none">
          <div 
            className="text-foreground leading-relaxed"
            style={{ 
              lineHeight: '1.7',
              fontSize: '16px'
            }}
          >
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              
              if (paragraph.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4 first:mt-0">
                    {paragraph.replace('# ', '')}
                  </h1>
                );
              }
              
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl font-bold text-foreground mt-6 mb-3">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-semibold text-foreground mt-5 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-muted-foreground ml-4 mb-1">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }
              
              if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="text-muted-foreground ml-4 mb-1 list-decimal">
                    {paragraph.replace(/^\d+\.\s*/, '')}
                  </li>
                );
              }
              
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-bold text-foreground mb-3">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              }
              
              return (
                <p key={index} className="text-muted-foreground mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Related Posts or Call to Action */}
      <Card className="card-hover">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-bold mb-2 text-foreground">Gostou do post?</h3>
          <p className="text-muted-foreground mb-4">
            Deixe um like e compartilhe suas ideias! Adoro conectar com pessoas 
            que têm interesses similares.
          </p>
          <div className="flex justify-center space-x-4">
            <LikeButton postId={post.id} initialLikes={post.likes} />
            <Link to="/about">
              <Button variant="outline">Sobre mim</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;