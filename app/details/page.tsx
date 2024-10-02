
import Image from "next/image";

import { Header } from "@/components/ui/header"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"


import CwImage from "@/assets/cw.png"
import StarIcon from "@/assets/star.svg"
import CheckRedIcon from "@/assets/check-red.svg"
import CheckGreenIcon from "@/assets/check-green.svg"
import CheckBlackIcon from "@/assets/check-black.svg"
import CircleCloseIcon from "@/assets/circle-close.svg"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {


  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Header />
      <hr className="w-full h-px bg-gray-200 border-0 rounded-md" />

      <div className="flex flex-col">
        <div className="p-5 flex flex-col gap-4">
          <Button className="w-14" variant="outline">
            <Link href="/list">
              Voltar
            </Link>
          </Button>
          <p className="text-3xl">Avenida Paulista, 1000 - Jardins, São Paulo</p>
          <div className="flex gap-3 text-xs">
            <div className="flex gap-1">
              <p className="text-gray-500">Criado em</p>
              <p>02/10/2024 12:00</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div> Aguardando retorno do coworking
            </div>
            <div className="flex gap-1">
              <p className="text-gray-500">Criado por</p>
              <p>Isabela Rodrigues</p>
            </div>
            <div className="flex gap-1">
              <p className="text-gray-500">Validação</p>
              <p>Isabela Rodrigues</p>
            </div>
          </div>
        </div>
        <hr className="w-full h-px bg-gray-200 border-0 rounded-md" />
        <div className="p-5">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="border">
                  <div className="flex flex-col gap-3 px-8">
                    <h3 className="text-2xl font-bold">Salas</h3>
                    <p className="text-sm text-gray-500">Observe o detalhamento de cada sala e selecione a que melhor atende a demanda do cliente</p>
                  </div>
                </TableCell>
                <TableCell className="border p-0">
                  <div className=" flex flex-col">
                    <div>
                      <Image src={CwImage} alt="room" />
                      <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold">Nome da sala</h3>
                          <div className="flex items-center gap-1">
                            <Image src={StarIcon} alt="star" />
                            <span className="font-semibold text-xs">4.8</span>
                          </div>
                        </div>
                        <p className="text-xs">Nome do coworking</p>
                        <p className="text-xs text-gray-500">Capela do Socorro ◦ Cidade Dutra</p>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border p-0">
                  <div className=" flex flex-col">
                    <div>
                      <Image src={CwImage} alt="room" />
                      <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold">Nome da sala</h3>
                          <div className="flex items-center gap-1">
                            <Image src={StarIcon} alt="star" />
                            <span className="font-semibold text-xs">4.8</span>
                          </div>
                        </div>                        <p className="text-xs">Nome do coworking</p>
                        <p className="text-xs text-gray-500">Capela do Socorro ◦ Cidade Dutra</p>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border p-0">
                  <div className=" flex flex-col">
                    <div>
                      <Image src={CwImage} alt="room" />
                      <div className="flex flex-col gap-1 p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-bold">Nome da sala</h3>
                          <div className="flex items-center gap-1">
                            <Image src={StarIcon} alt="star" />
                            <span className="font-semibold text-xs">4.8</span>
                          </div>
                        </div>                        <p className="text-xs">Nome do coworking</p>
                        <p className="text-xs text-gray-500">Capela do Socorro ◦ Cidade Dutra</p>
                      </div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border px-8">
                  <p className="text-lg">Capacidade</p>
                </TableCell>
                <TableCell className="border">
                  <p className="text-sm text-center">20 Pessoas</p>
                </TableCell>
                <TableCell className="border">
                  <p className="text-sm text-center">25 Pessoas</p>
                </TableCell>
                <TableCell className="border">
                  <p className="text-sm text-center">25 Pessoas</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border px-8">
                  <p className="text-lg">Tamanho m2</p>
                </TableCell>
                <TableCell className="border">
                  <p className="text-sm text-center">15 m2</p>
                </TableCell>
                <TableCell className="border">
                  <p className="text-sm text-center">20 m2</p>
                </TableCell>
                <TableCell className="border">
                  <p className="text-sm text-center">20 m2</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border px-8">
                  <p className="text-lg">Valor da sala</p>
                </TableCell>
                <TableCell className="border">
                  <div className="text-sm text-center flex flex-col gap-1 items-center">
                    <span>R$ 2400</span>
                    <div className="flex items-center gap-1">
                      <Image src={CheckRedIcon} alt="check-red" />
                      <span className="text-xs text-red-500 whitespace-nowrap">R$ 300 reais acima do orçamento do cliente</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border">
                  <div className="text-sm text-center flex flex-col gap-1 items-center">
                    <span>R$ 1800</span>
                    <div className="flex items-center gap-1">
                      <Image src={CheckGreenIcon} alt="check-green" />
                      <span className="text-xs text-green-500 whitespace-nowrap">R$ 300 reais abaixo do orçamento do cliente</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border">
                  <div className="text-sm text-center flex flex-col gap-1 items-center">
                    <span>R$ 1800</span>
                    <div className="flex items-center gap-1">
                      <Image src={CheckGreenIcon} alt="check-green" />
                      <span className="text-xs text-green-500 whitespace-nowrap">R$ 300 reais abaixo do orçamento do cliente</span>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border px-8">
                  <p className="text-lg">Distância do endereço</p>
                </TableCell>
                <TableCell className="border">
                  <div className="text-sm text-center flex flex-col gap-1 items-center">
                    <span>1,5 km do endereço</span>
                    <div className="flex items-center gap-1">
                      <Image src={CheckGreenIcon} alt="check-green" />
                      <span className="text-xs text-green-500 whitespace-nowrap">Coworking mais próximo</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="border">
                  <p className="text-sm text-center">2,5 km do endereço</p>
                </TableCell>
                <TableCell className="border">
                  <p className="text-sm text-center">2 km do endereço</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border px-8">
                  <p className="text-lg">Amenidade 1</p>
                </TableCell>
                <TableCell className="border">
                  <div className="flex items-center justify-center">
                    <Image src={CircleCloseIcon} alt="check-black" />
                  </div>
                </TableCell>
                <TableCell className="border">
                  <div className="flex items-center justify-center">
                    <Image src={CircleCloseIcon} alt="check-black" />
                  </div>
                </TableCell>
                <TableCell className="border">
                  <div className="flex items-center justify-center">
                    <Image src={CheckBlackIcon} alt="check-black" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border px-8">
                  <p className="text-lg">Amenidade 2</p>
                </TableCell>
                <TableCell className="border">
                  <div className="flex items-center justify-center">
                    <Image src={CheckBlackIcon} alt="check-black" />
                  </div>
                </TableCell>
                <TableCell className="border">
                  <div className="flex items-center justify-center">
                    <Image src={CheckBlackIcon} alt="check-black" />
                  </div>
                </TableCell>
                <TableCell className="border">
                  <div className="flex items-center justify-center">
                    <Image src={CheckBlackIcon} alt="check-black" />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border px-8">
                  <p className="text-lg">Amenidade 3</p>
                </TableCell>
                <TableCell className="border">
                  <div className="flex items-center justify-center">
                    <Image src={CircleCloseIcon} alt="check-black" />
                  </div>
                </TableCell>
                <TableCell className="border">
                  <div className="flex items-center justify-center">
                    <Image src={CheckBlackIcon} alt="check-black" />
                  </div>
                </TableCell>
                <TableCell className="border">
                  <div className="flex items-center justify-center">
                    <Image src={CheckBlackIcon} alt="check-black" />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
