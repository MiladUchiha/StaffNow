'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dkSUJxp5Yi7
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import Multiselect from "multiselect-react-dropdown";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import React, { useState } from 'react';
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function RegisterForm() {
  
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    companyName: "",
    organizationNumber: "",
    address: "",
    branches: [], // State for branch selection
    crewNumber: "",
    areas: [], // State for service areas
    email: "",
    password: "",
    description: "",
    
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await axios.post('/api/userExists', { email: data.email }).then((res) => {
      res.data.exists ? (toast.error("User already exists")
        , setIsLoading(false)) :
        axios.post('/api/bemanningsRegister', data).then(async (res) => {

          toast.success("Account created successfully");
          

        })

    })
  };

  const handleSelect = (selectedList, selectedItem, field) => {
    setData({ ...data, [field]: selectedList.map(item => item.key) });
  };

  // Function to handle removal in multi-select dropdowns
  const handleRemove = (selectedList, removedItem, field) => {
    setData({ ...data, [field]: selectedList.map(item => item.key) });
  };

  return (
    <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-3 lg:gap-6 space-y-6 flex justify-center items-center min-h-screen">



      <div className="col-span-3">
        <Card className="p-6 bg">
          <CardHeader>
            <h1 className="text-3xl font-bold">Registera dig som bemanningsföretag</h1>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Namn</Label>
                    <Input
                      value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} id="name" placeholder="Ditt fullnamn" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company-name">Företags namn</Label>
                    <Input
                      value={data.companyName} onChange={(e) => setData({ ...data, companyName: e.target.value })} id="company-name" placeholder="Namnet på företaget" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization-number">Organizationsnummer</Label>
                    <Input
                      value={data.organizationNumber} onChange={(e) => setData({ ...data, organizationNumber: e.target.value })}
                      id="organization-number" placeholder="123456789" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })}
                      id="address" placeholder="Street, City, Country" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branch-selection">Branch/Brancher</Label>
                    <Multiselect className=" shadow-sm rounded-sm"
                      displayValue="key"
                      onKeyPressFn={function noRefCheck() { }}

                      onSearch={function noRefCheck() { }}
                      onSelect={(selectedList, selectedItem) => handleSelect(selectedList, selectedItem, 'branches')}
                      onRemove={(selectedList, removedItem) => handleRemove(selectedList, removedItem, 'branches')}
                      placeholder="Välj vilken branch ni tillhör"
                      id="css_custom"
                      options={[
                        { key: 'Stockholm' },
                        { key: 'Gothenburg' },
                        { key: 'Malmö' },
                        { key: 'Uppsala' },
                        { key: 'Västerås' },
                        { key: 'Örebro' },
                        { key: 'Linköping' },
                        { key: 'Helsingborg' },
                        { key: 'Jönköping' },
                        { key: 'Norrköping' },
                        // ... other major cities
                      ]}


                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="crew-number">Antal personal (Ungefärligt)</Label>
                    <Multiselect className=" shadow-sm rounded-sm"
                      displayValue="key"
                      onKeyPressFn={function noRefCheck() { }}
                      onRemove={function noRefCheck() { }}
                      onSearch={function noRefCheck() { }}
                      onSelect={function noRefCheck() { }}
                      placeholder="Antal personal"
                      id="css_custom"
                      options={[
                        { key: 'Stockholm' },
                        { key: 'Gothenburg' },
                        { key: 'Malmö' },
                        { key: 'Uppsala' },
                        { key: 'Västerås' },
                        { key: 'Örebro' },
                        { key: 'Linköping' },
                        { key: 'Helsingborg' },
                        { key: 'Jönköping' },
                        { key: 'Norrköping' },
                        // ... other major cities
                      ]}
                      singleSelect

                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="areas">Tjänst område</Label>
                    <Multiselect className=" shadow-sm rounded-sm"
                      displayValue="key"
                      onKeyPressFn={function noRefCheck() { }}
                      onRemove={function noRefCheck() { }}
                      onSearch={function noRefCheck() { }}
                      onSelect={function noRefCheck() { }}
                      placeholder="Område där ni är tillgängliga"
                      id="css_custom"
                      options={[
                        { key: 'Stockholm' },
                        { key: 'Gothenburg' },
                        { key: 'Malmö' },
                        { key: 'Uppsala' },
                        { key: 'Västerås' },
                        { key: 'Örebro' },
                        { key: 'Linköping' },
                        { key: 'Helsingborg' },
                        { key: 'Jönköping' },
                        { key: 'Norrköping' },
                        // ... other major cities
                      ]}


                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                      id="email" placeholder="email@example.com" required type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Lösenord</Label>
                    <Input
                      value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                      id="password" required type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Deskription</Label>
                    <Textarea
                      value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })}
                      id="description" placeholder="Ett kort beskrivning av ditt företag" required />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="w-1/3" type="submit">
                    Registera
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

