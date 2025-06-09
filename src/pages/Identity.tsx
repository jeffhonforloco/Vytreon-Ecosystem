
import { useState } from "react";
import { Shield, Key, Eye, EyeOff, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Identity = () => {
  const [activeModule, setActiveModule] = useState("identity");
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The text has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-64">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Decentralized Identity</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Self-Sovereign Identity</CardTitle>
                  <CardDescription>Manage your decentralized identity and credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="did" className="text-white">Decentralized Identifier (DID)</Label>
                    <div className="flex mt-2">
                      <Input 
                        id="did"
                        value="did:vytreon:1234567890abcdef"
                        readOnly
                        className="bg-vytreon-dark border-gray-700 text-white"
                      />
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="ml-2 border-vytreon-cyan text-vytreon-cyan"
                        onClick={() => copyToClipboard("did:vytreon:1234567890abcdef")}
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="publicKey" className="text-white">Public Key</Label>
                    <div className="flex mt-2">
                      <Input 
                        id="publicKey"
                        value="0x742d35Cc6635C0532925a3b8D45..."
                        readOnly
                        className="bg-vytreon-dark border-gray-700 text-white"
                      />
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="ml-2 border-vytreon-cyan text-vytreon-cyan"
                        onClick={() => copyToClipboard("0x742d35Cc6635C0532925a3b8D45...")}
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="privateKey" className="text-white">Private Key</Label>
                    <div className="flex mt-2">
                      <Input 
                        id="privateKey"
                        type={showPrivateKey ? "text" : "password"}
                        value="************************************"
                        readOnly
                        className="bg-vytreon-dark border-gray-700 text-white"
                      />
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="ml-2 border-vytreon-cyan text-vytreon-cyan"
                        onClick={() => setShowPrivateKey(!showPrivateKey)}
                      >
                        {showPrivateKey ? <EyeOff size={16} /> : <Eye size={16} />}
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full bg-vytreon-cyan text-vytreon-dark hover:bg-vytreon-cyan/90">
                    Generate New Identity
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-white">Verifiable Credentials</CardTitle>
                  <CardDescription>Your issued and verified credentials</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-vytreon-dark/50 border border-green-400/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">KYC Verification</p>
                          <p className="text-sm text-gray-400">Issued by Vytreon Auth</p>
                        </div>
                        <div className="px-2 py-1 rounded text-xs font-medium bg-green-400/20 text-green-400">
                          Verified
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-vytreon-dark/50 border border-green-400/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Ecosystem Member</p>
                          <p className="text-sm text-gray-400">Issued by Vytreon DAO</p>
                        </div>
                        <div className="px-2 py-1 rounded text-xs font-medium bg-green-400/20 text-green-400">
                          Active
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-vytreon-dark/50 border border-yellow-400/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Developer License</p>
                          <p className="text-sm text-gray-400">Pending verification</p>
                        </div>
                        <div className="px-2 py-1 rounded text-xs font-medium bg-yellow-400/20 text-yellow-400">
                          Pending
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                    Request New Credential
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Identity;
