
import { useState } from "react";
import { Shield, Key, Eye, EyeOff, Copy, Wallet, QrCode, Download, Upload, Link as LinkIcon, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

const Identity = () => {
  const [activeModule, setActiveModule] = useState("identity");
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState("");
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The text has been copied to your clipboard.",
    });
  };

  const connectWallet = (walletType: string) => {
    setSelectedWallet(walletType);
    setWalletConnected(true);
    toast({
      title: "Wallet Connected",
      description: `Successfully connected to ${walletType}`,
    });
  };

  const walletOptions = [
    { name: "MetaMask", address: "0x742d35Cc6635C0532925a3b8D45...", status: "connected" },
    { name: "WalletConnect", address: "0x8a2f1B2C3d4E5f6789012345...", status: "available" },
    { name: "Phantom", address: "0x9B3c2D1e4F567890123456789...", status: "available" },
    { name: "Coinbase Wallet", address: "0xA1b2C3d4E5f6789012345678...", status: "available" }
  ];

  const didMethods = [
    { method: "did:web", status: "active", description: "Web-based DID method" },
    { method: "did:key", status: "active", description: "Cryptographic key-based DID" },
    { method: "did:ethr", status: "pending", description: "Ethereum-based DID method" },
    { method: "did:ion", status: "available", description: "Decentralized identity overlay network" }
  ];

  return (
    <div className="min-h-screen bg-vytreon-dark">
      <div className="flex">
        <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />
        <main className="flex-1 ml-64">
          <DashboardHeader />
          <div className="p-6 space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="text-vytreon-cyan" size={32} />
              <h1 className="text-3xl font-bold text-white">Decentralized Identity Management</h1>
            </div>

            <Tabs defaultValue="identity" className="space-y-6">
              <TabsList className="bg-vytreon-dark-blue border border-gray-700">
                <TabsTrigger value="identity" className="text-white data-[state=active]:bg-vytreon-cyan data-[state=active]:text-vytreon-dark">Identity</TabsTrigger>
                <TabsTrigger value="wallets" className="text-white data-[state=active]:bg-vytreon-cyan data-[state=active]:text-vytreon-dark">Wallets</TabsTrigger>
                <TabsTrigger value="credentials" className="text-white data-[state=active]:bg-vytreon-cyan data-[state=active]:text-vytreon-dark">Credentials</TabsTrigger>
                <TabsTrigger value="did-methods" className="text-white data-[state=active]:bg-vytreon-cyan data-[state=active]:text-vytreon-dark">DID Methods</TabsTrigger>
              </TabsList>

              <TabsContent value="identity" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">Self-Sovereign Identity</CardTitle>
                      <CardDescription>Your decentralized identity and cryptographic keys</CardDescription>
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
                            value={showPrivateKey ? "a1b2c3d4e5f6789012345678901234567890" : "************************************"}
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

                      <div className="flex space-x-2">
                        <Button className="flex-1 bg-vytreon-cyan text-vytreon-dark hover:bg-vytreon-cyan/90">
                          <QrCode size={16} className="mr-2" />
                          Generate QR Code
                        </Button>
                        <Button variant="outline" className="flex-1 border-vytreon-cyan text-vytreon-cyan">
                          <Download size={16} className="mr-2" />
                          Export Keys
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">DID Document</CardTitle>
                      <CardDescription>Your complete DID document structure</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-vytreon-dark/50 p-4 rounded-lg border border-gray-700">
                        <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/v1"
  ],
  "id": "did:vytreon:1234567890abcdef",
  "verificationMethod": [{
    "id": "#key-1",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:vytreon:1234567890abcdef",
    "publicKeyMultibase": "z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK"
  }],
  "authentication": ["#key-1"],
  "service": [{
    "id": "#linked-domain",
    "type": "LinkedDomains",
    "serviceEndpoint": "https://vytreon.com"
  }]
}`}
                        </pre>
                      </div>
                      <Button variant="outline" className="w-full border-vytreon-cyan text-vytreon-cyan">
                        <Upload size={16} className="mr-2" />
                        Update DID Document
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="wallets" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">Connected Wallets</CardTitle>
                      <CardDescription>Manage your connected wallet providers</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {walletOptions.map((wallet, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-vytreon-dark/50 border border-gray-700">
                          <div className="flex items-center space-x-3">
                            <Wallet className="text-vytreon-cyan" size={20} />
                            <div>
                              <p className="text-white font-medium">{wallet.name}</p>
                              {wallet.status === "connected" && (
                                <p className="text-sm text-gray-400">{wallet.address}</p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge 
                              variant={wallet.status === "connected" ? "default" : "secondary"}
                              className={wallet.status === "connected" ? "bg-green-600" : "bg-gray-600"}
                            >
                              {wallet.status}
                            </Badge>
                            {wallet.status !== "connected" && (
                              <Button 
                                size="sm" 
                                className="bg-vytreon-cyan text-vytreon-dark hover:bg-vytreon-cyan/90"
                                onClick={() => connectWallet(wallet.name)}
                              >
                                Connect
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-white">Wallet Analytics</CardTitle>
                      <CardDescription>Connection statistics and security metrics</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-vytreon-dark/50">
                          <p className="text-sm text-gray-400">Active Connections</p>
                          <p className="text-2xl font-bold text-vytreon-cyan">3</p>
                        </div>
                        <div className="p-3 rounded-lg bg-vytreon-dark/50">
                          <p className="text-sm text-gray-400">Total Transactions</p>
                          <p className="text-2xl font-bold text-vytreon-cyan">847</p>
                        </div>
                        <div className="p-3 rounded-lg bg-vytreon-dark/50">
                          <p className="text-sm text-gray-400">Security Score</p>
                          <p className="text-2xl font-bold text-green-400">98%</p>
                        </div>
                        <div className="p-3 rounded-lg bg-vytreon-dark/50">
                          <p className="text-sm text-gray-400">Last Activity</p>
                          <p className="text-sm font-medium text-white">2 hours ago</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="credentials" className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white">Verifiable Credentials</CardTitle>
                    <CardDescription>Your issued and verified credentials portfolio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-vytreon-dark/50 border border-green-400/30">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-white font-medium">KYC Verification</h3>
                            <p className="text-sm text-gray-400">Issued by Vytreon Auth</p>
                          </div>
                          <CheckCircle className="text-green-400" size={20} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Issue Date:</span>
                            <span className="text-sm text-white">2024-01-15</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Expires:</span>
                            <span className="text-sm text-white">2025-01-15</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Status:</span>
                            <Badge className="bg-green-400/20 text-green-400">Verified</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-vytreon-dark/50 border border-green-400/30">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-white font-medium">Ecosystem Member</h3>
                            <p className="text-sm text-gray-400">Issued by Vytreon DAO</p>
                          </div>
                          <CheckCircle className="text-green-400" size={20} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Member Since:</span>
                            <span className="text-sm text-white">2023-08-12</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Tier:</span>
                            <span className="text-sm text-white">Premium</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Status:</span>
                            <Badge className="bg-green-400/20 text-green-400">Active</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-vytreon-dark/50 border border-yellow-400/30">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-white font-medium">Developer License</h3>
                            <p className="text-sm text-gray-400">Pending verification</p>
                          </div>
                          <AlertCircle className="text-yellow-400" size={20} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Applied:</span>
                            <span className="text-sm text-white">2024-06-01</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Review Date:</span>
                            <span className="text-sm text-white">2024-06-15</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Status:</span>
                            <Badge className="bg-yellow-400/20 text-yellow-400">Pending</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-vytreon-dark/50 border border-blue-400/30">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-white font-medium">Educational Certificate</h3>
                            <p className="text-sm text-gray-400">Blockchain Fundamentals</p>
                          </div>
                          <CheckCircle className="text-blue-400" size={20} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Completed:</span>
                            <span className="text-sm text-white">2024-03-20</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Score:</span>
                            <span className="text-sm text-white">95%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-400">Status:</span>
                            <Badge className="bg-blue-400/20 text-blue-400">Certified</Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                      <Button variant="outline" className="w-full border-vytreon-cyan text-vytreon-cyan hover:bg-vytreon-cyan hover:text-vytreon-dark">
                        Request New Credential
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="did-methods" className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-white">DID Methods</CardTitle>
                    <CardDescription>Supported decentralized identifier methods and protocols</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {didMethods.map((method, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-vytreon-dark/50 border border-gray-700">
                        <div className="flex items-center space-x-3">
                          <LinkIcon className="text-vytreon-cyan" size={20} />
                          <div>
                            <p className="text-white font-medium">{method.method}</p>
                            <p className="text-sm text-gray-400">{method.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={method.status === "active" ? "default" : "secondary"}
                            className={
                              method.status === "active" ? "bg-green-600" :
                              method.status === "pending" ? "bg-yellow-600" : "bg-gray-600"
                            }
                          >
                            {method.status}
                          </Badge>
                          {method.status === "available" && (
                            <Button size="sm" className="bg-vytreon-cyan text-vytreon-dark hover:bg-vytreon-cyan/90">
                              Enable
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Identity;
