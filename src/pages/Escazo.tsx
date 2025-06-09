
import { useState } from "react";
import { Plane, MapPin, Calendar, Users, Star, CreditCard, Globe, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Escazo = () => {
  const [activeModule, setActiveModule] = useState("escazo");

  const travelDeals = [
    { 
      destination: "Tokyo, Japan", 
      price: "$1,299", 
      originalPrice: "$1,899",
      rating: 4.8, 
      duration: "7 days", 
      savings: "$600",
      category: "Cultural",
      departure: "Dec 15, 2024"
    },
    { 
      destination: "Paris, France", 
      price: "$899", 
      originalPrice: "$1,299",
      rating: 4.9, 
      duration: "5 days", 
      savings: "$400",
      category: "Romance",
      departure: "Jan 20, 2025"
    },
    { 
      destination: "Bali, Indonesia", 
      price: "$649", 
      originalPrice: "$999",
      rating: 4.7, 
      duration: "6 days", 
      savings: "$350",
      category: "Adventure",
      departure: "Feb 10, 2025"
    },
    { 
      destination: "New York, USA", 
      price: "$799", 
      originalPrice: "$1,149",
      rating: 4.6, 
      duration: "4 days", 
      savings: "$350",
      category: "Urban",
      departure: "Mar 05, 2025"
    }
  ];

  const bookingStats = [
    { metric: "Active Bookings", value: "2,847", change: "+12.5%", period: "vs last month" },
    { metric: "Revenue", value: "$1.2M", change: "+18.3%", period: "this quarter" },
    { metric: "Customer Satisfaction", value: "4.8/5", change: "+0.2", period: "rating" },
    { metric: "Destinations", value: "247", change: "+15", period: "new locations" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Plane className="text-vytreon-cyan" size={32} />
                <h1 className="text-3xl font-bold text-white">Escazo Travel</h1>
              </div>
              <Button className="bg-vytreon-cyan hover:bg-vytreon-cyan/80 text-vytreon-dark">
                <Plus className="mr-2" size={16} />
                New Booking
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <MapPin className="text-vytreon-cyan" size={20} />
                    <span>Destinations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">247</div>
                  <p className="text-gray-400">Global locations</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Calendar className="text-vytreon-cyan" size={20} />
                    <span>Bookings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">1,847</div>
                  <p className="text-gray-400">This month</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Users className="text-vytreon-cyan" size={20} />
                    <span>Travelers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">89,234</div>
                  <p className="text-gray-400">Active users</p>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Star className="text-vytreon-cyan" size={20} />
                    <span>Rating</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-vytreon-cyan">4.8</div>
                  <p className="text-gray-400">Average rating</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Featured Travel Deals</CardTitle>
                  <CardDescription>Exclusive offers with guaranteed best prices</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {travelDeals.map((deal, index) => (
                      <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                        <div className="h-32 bg-gradient-to-r from-vytreon-cyan/20 to-vytreon-purple/20 relative">
                          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
                            Save {deal.savings}
                          </div>
                          <div className="absolute top-2 right-2 bg-vytreon-dark/80 text-vytreon-cyan px-2 py-1 rounded text-xs">
                            {deal.category}
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-white font-semibold">{deal.destination}</h3>
                            <div className="flex items-center space-x-1">
                              <Star className="text-yellow-400" size={14} />
                              <span className="text-gray-400 text-sm">{deal.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <span className="text-vytreon-cyan font-bold text-lg">{deal.price}</span>
                              <span className="text-gray-500 line-through ml-2 text-sm">{deal.originalPrice}</span>
                            </div>
                            <span className="text-gray-400 text-sm">{deal.duration}</span>
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-1 text-gray-400 text-sm">
                              <Calendar size={14} />
                              <span>{deal.departure}</span>
                            </div>
                          </div>
                          <Button className="w-full bg-vytreon-cyan hover:bg-vytreon-cyan/80 text-vytreon-dark">
                            <CreditCard className="mr-2" size={16} />
                            Book Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Booking Analytics</CardTitle>
                  <CardDescription>Track performance and customer metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookingStats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-vytreon-cyan/20 flex items-center justify-center">
                            <Globe className="text-vytreon-cyan" size={16} />
                          </div>
                          <div>
                            <p className="text-white font-medium">{stat.metric}</p>
                            <p className="text-sm text-gray-400">{stat.period}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-vytreon-cyan font-bold text-xl">{stat.value}</p>
                          <p className="text-green-400 text-sm">{stat.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Escazo;
