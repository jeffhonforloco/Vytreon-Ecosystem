
import { 
  CreditCard, 
  Plane, 
  Music, 
  Search, 
  Brain, 
  MessageSquare, 
  Share2,
  Mic,
  FileText,
  Youtube,
  Headphones,
  MessageCircle,
  Users,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    id: "oowo",
    title: "Oowo Payments",
    description: "Decentralized digital payments with crypto & fiat support",
    icon: CreditCard,
    status: "Active",
    color: "text-green-400",
    metrics: "2.1M transactions today",
    users: "324K",
    path: "/oowo"
  },
  {
    id: "escazo", 
    title: "Escazo Travel",
    description: "Secure travel booking with blockchain identity verification",
    icon: Plane,
    status: "Active",
    color: "text-blue-400",
    metrics: "15K bookings this week",
    users: "89K",
    path: "/escazo"
  },
  {
    id: "didit360",
    title: "Didit360 Media",
    description: "Complete music & media universe with AI creation & NFTs",
    icon: Music,
    status: "Active",
    color: "text-purple-400",
    metrics: "1.8M streams today",
    users: "567K",
    path: "/didit360"
  },
  {
    id: "seo-agent-pro",
    title: "SEOAgentPro",
    description: "Advanced SEO analytics and optimization insights",
    icon: Search,
    status: "Active",
    color: "text-orange-400",
    metrics: "847 sites analyzed",
    users: "23K",
    path: "/seo-agent-pro"
  },
  {
    id: "sire-iq",
    title: "SireIQ Analytics",
    description: "AI-driven insights and personalized recommendations",
    icon: Brain,
    status: "Learning",
    color: "text-vytreon-cyan",
    metrics: "94.7% accuracy rate",
    users: "156K",
    path: "/sire-iq"
  },
  {
    id: "whis-app",
    title: "WhisApp Feedback",
    description: "Community feedback and real-time sentiment analysis",
    icon: MessageSquare,
    status: "Active",
    color: "text-yellow-400",
    metrics: "12K feedback today",
    users: "78K",
    path: "/whis-app"
  },
  {
    id: "ixhare",
    title: "iXhare Sharing",
    description: "Secure file sharing with decentralized audit trails",
    icon: Share2,
    status: "Active",
    color: "text-green-400",
    metrics: "456GB shared today",
    users: "112K",
    path: "/ixhare"
  },
  {
    id: "voxsaga",
    title: "Voxsaga Voice",
    description: "Voice-based interactions and AI voice commands",
    icon: Mic,
    status: "Active",
    color: "text-red-400",
    metrics: "234K voice queries",
    users: "67K",
    path: "/voxsaga"
  },
  {
    id: "fycera",
    title: "Fycera CMS",
    description: "Dynamic content management with AI optimization",
    icon: FileText,
    status: "Active",
    color: "text-indigo-400",
    metrics: "1.2K content pieces",
    users: "34K",
    path: "/fycera"
  },
  {
    id: "fycra",
    title: "Fycra YouTube",
    description: "AI-powered YouTube content optimization platform",
    icon: Youtube,
    status: "Active",
    color: "text-red-500",
    metrics: "567 videos optimized",
    users: "45K",
    path: "/fycra"
  },
  {
    id: "auralora",
    title: "Auralora Audiobooks",
    description: "Interactive audiobook platform with immersive 3D audio",
    icon: Headphones,
    status: "Active",
    color: "text-pink-400",
    metrics: "89K hours listened",
    users: "123K",
    path: "/auralora"
  },
  {
    id: "chattrer",
    title: "Chattrer Messaging",
    description: "Secure messaging with end-to-end encryption",
    icon: MessageCircle,
    status: "Active",
    color: "text-cyan-400",
    metrics: "3.4M messages today",
    users: "445K",
    path: "/chattrer"
  },
  {
    id: "cumn-iq",
    title: "CumnIQ Social",
    description: "Community and social features with gamification",
    icon: Users,
    status: "Active",
    color: "text-emerald-400",
    metrics: "156K interactions",
    users: "234K",
    path: "/cumn-iq"
  }
];

const ProductGrid = () => {
  const handleProductClick = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-white">Integrated Products</h3>
        <Button variant="outline" className="border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
          Manage Products
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => {
          const Icon = product.icon;
          return (
            <Card 
              key={product.id} 
              className="glass-card group cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleProductClick(product.path)}
            >
              <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="p-2 rounded-lg bg-vytreon-dark-blue">
                    <Icon className={`${product.color}`} size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-white group-hover:text-vytreon-cyan transition-colors text-sm">
                      {product.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${product.color.replace('text-', 'bg-')}`} />
                      <span className={`text-xs ${product.color}`}>{product.status}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-3 text-xs">
                  {product.description}
                </CardDescription>
                <div className="space-y-1">
                  <p className="text-xs text-vytreon-cyan font-medium">{product.metrics}</p>
                  <p className="text-xs text-gray-400">{product.users} active users</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
