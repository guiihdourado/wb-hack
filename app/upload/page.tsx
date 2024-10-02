"use client"

import { useState } from "react"

import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [companyName, setCompanyName] = useState("");
  const [hubspotLink, setHubspotLink] = useState("");

  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Header />
      <hr className="w-full h-px bg-gray-200 border-0 rounded-md" />
      <div className="p-5 flex flex-col gap-4">
        <h3 className="text-3xl">Novo Diagnóstico</h3>

        <div>
          <h3 className="text-xl">Suba os arquivos com os endereços</h3>
          <Button variant="link" className="text-sm p-0 text-gray-500">Baixe a planilha de modelo</Button>
        </div>

        <div className="mb-6 border border-dashed border-gray-300 p-6 rounded-lg flex justify-center items-center">
          <label className="cursor-pointer flex flex-col items-center space-y-2">
            <Upload className="w-8 h-8 text-gray-500" />
            <span className="text-sm text-gray-500">Arraste seu arquivo aqui ou clique para enviar</span>
            <span className="text-xs text-gray-400">
              Formatos aceitos: csv, xlsx e xls | Tamanho máximo: 100 mb.
            </span>
            <input
              type="file"
              className="hidden"
              accept=".csv,.xlsx,.xls"
            />
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl">Lead</h3>
            <span className="text-sm text-gray-500">Informe o nome e o link do hubspot</span>
          </div>
          <div>
            <div>
              <Label className="text-sm text-gray-500">Empresa</Label>
              <Input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
            <div>
              <Label className="text-sm text-gray-500">Link</Label>
              <Input type="text" value={hubspotLink} onChange={(e) => setHubspotLink(e.target.value)} />
            </div>
          </div>
          <Button className="w-16 bg-yellow-300 text-black border border-black hover:bg-yellow-400 duration-300">Enviar</Button>
        </div>
      </div>
    </div>
  );
}
