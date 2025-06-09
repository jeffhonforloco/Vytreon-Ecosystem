
import { useState } from "react";
import { Plane, MapPin, Calendar, Users, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Escazo = () => {
  const [activeModule, setActiveModule] = useState("escazo");

  const travelDeals = [
    { destination: "Tokyo, Japan", price: "$1,299", rating: 4.8, duration: "7 days", image: "/api/placeholder/300/200" },
    { destination: "Paris, France", price: "$899", rating: 4.9, duration: "5 days", image: "/api/placeholder/300/200" },
    { destination: "Bali, Indonesia", price: "$649", rating: 4.7, duration: "6 days", image: "/api/placeholder/300/200" },
    { destination: "New York, USA", price: "$799", rating: 4.6, duration: "4 days", image: "/api/placeholder/300/200" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-80">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Plane className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Escazo Travel</h1>
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

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-white">Featured Travel Deals</CardTitle>
                <CardDescription>Discover amazing destinations with exclusive offers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
                  {travelDeals.map((deal, index) => (
                    <div key={index} className="bg-vytreon-dark/50 rounded-lg overflow-hidden">
                      <div className="h-48 bg-gradient-to-r from-vytreon-cyan/20 to-vytreon-purple/20"></div>
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-2">{deal.destination}</h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-vytreon-cyan font-bold text-lg">{deal.price}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="text-yellow-400" size={16} />
                            <span className="text-gray-400">{deal.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{deal.duration}</p>
                        <Button className="w-full bg-vytreon-cyan hover:bg-vytreon-cyan/80 text-vytreon-dark">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Escazo;
