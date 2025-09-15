import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const PostCard = ({ id, title, excerpt, date, readTime, category }: PostCardProps) => {
  return (
    <Card className="card-hover bg-card border-border overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
          {title}
        </h2>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {excerpt}
        </p>
        
        <Link
          to={`/posts/${id}`}
          className="inline-flex items-center space-x-1 text-primary hover:text-accent font-medium text-sm transition-colors group"
        >
          <span>Ler mais</span>
          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default PostCard;