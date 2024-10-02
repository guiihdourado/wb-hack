"use client"

import { useRef, useState } from "react"

import { Header } from "@/components/ui/header"
import { Button } from "@/components/ui/button"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Link from "next/link";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"


const data = [
    {
        id: "d3b07384-d9a0-4f3f-8b7e-423453ec6781",
        address: "Avenida Paulista, 1000",
        city: "São Paulo",
        neighborhood: "Jardins",
        status: "processing",
        state: "SP"
    },
    {
        id: "d13b204d-8bc9-47ff-9f1f-9825a0d8b8bb",
        address: "Rua Amauri, 200",
        city: "São Paulo",
        neighborhood: "Itaim Bibi",
        status: "processed",
        state: "SP"
    },
    {
        id: "8b7048b1-15fc-4b45-9365-3b51b2397489",
        address: "Alameda Santos, 1500",
        city: "São Paulo",
        neighborhood: "Jardins",
        status: "processing",
        state: "SP"
    },
    {
        id: "3fc84b6d-0b2f-43a1-94d8-e5f3437f3b67",
        address: "Avenida Brigadeiro Faria Lima, 1800",
        city: "São Paulo",
        neighborhood: "Vila Olímpia",
        status: "processed",
        state: "SP"
    },
    {
        id: "7d9c6a71-b78c-4740-a96b-635c37c35414",
        address: "Rua Canário, 300",
        city: "São Paulo",
        neighborhood: "Moema",
        status: "processing",
        state: "SP"
    },
    {
        id: "da33adf7-1086-404f-90d0-1dc38d7203a6",
        address: "Rua Groenlândia, 500",
        city: "São Paulo",
        neighborhood: "Jardim Europa",
        status: "processed",
        state: "SP"
    },
    {
        id: "9d4a4d61-96be-4979-8916-3d84eb88e7d8",
        address: "Rua São Vicente de Paula, 700",
        city: "São Paulo",
        neighborhood: "Higienópolis",
        status: "processing",
        state: "SP"
    },
    {
        id: "489ab5e8-c7b5-4ba7-a348-9f5f74e5bcbe",
        address: "Rua Itacema, 900",
        city: "São Paulo",
        neighborhood: "Itaim Bibi",
        status: "processed",
        state: "SP"
    },
    {
        id: "7f3c5fc7-7bfa-4f2d-aad0-61819215b171",
        address: "Rua Harmonia, 1100",
        city: "São Paulo",
        neighborhood: "Vila Madalena",
        status: "processing",
        state: "SP"
    },
    {
        id: "6e2ad84e-b909-4788-a014-896c75fa51fb",
        address: "Avenida Rebouças, 1200",
        city: "São Paulo",
        neighborhood: "Pinheiros",
        status: "processed",
        state: "SP"
    },
    {
        id: "48ff2845-3c0a-41df-9054-41d236b1c5f6",
        address: "Rua dos Três Irmãos, 1300",
        city: "São Paulo",
        neighborhood: "Alto de Pinheiros",
        status: "processing",
        state: "SP"
    },
    {
        id: "c76bba67-86f5-42aa-94cc-659875d4b33c",
        address: "Rua Oscar Freire, 1400",
        city: "São Paulo",
        neighborhood: "Jardins",
        status: "processed",
        state: "SP"
    },
    {
        id: "d4226b7e-5e0d-4dbf-b68e-7b362d4e7dfd",
        address: "Rua Tabapuã, 1500",
        city: "São Paulo",
        neighborhood: "Itaim Bibi",
        status: "processing",
        state: "SP"
    },
    {
        id: "3ab5e63f-b76a-46f4-b60b-f048dd3205b4",
        address: "Rua Estados Unidos, 1600",
        city: "São Paulo",
        neighborhood: "Jardim América",
        status: "processed",
        state: "SP"
    },
    {
        id: "37db5a6c-080e-4c02-8f3c-dc29e110f93d",
        address: "Rua Funchal, 1700",
        city: "São Paulo",
        neighborhood: "Vila Olímpia",
        status: "processing",
        state: "SP"
    },
    {
        id: "de506a21-3d48-4f3c-a2f4-32108f5fd86e",
        address: "Avenida Morumbi, 1800",
        city: "São Paulo",
        neighborhood: "Morumbi",
        status: "processed",
        state: "SP"
    },
    {
        id: "3247e329-3746-4ec2-b156-cf58bb3a8e0d",
        address: "Avenida das Nações Unidas, 1900",
        city: "São Paulo",
        neighborhood: "Brooklin",
        status: "processing",
        state: "SP"
    },
    {
        id: "758cf823-51b1-49a2-9d4d-2ff8d0d66f79",
        address: "Rua Haddock Lobo, 2000",
        city: "São Paulo",
        neighborhood: "Consolação",
        status: "processed",
        state: "SP"
    },
    {
        id: "243d1c87-4348-48c0-bb42-30fce54fa3b2",
        address: "Rua Cardoso de Almeida, 2100",
        city: "São Paulo",
        neighborhood: "Perdizes",
        status: "processing",
        state: "SP"
    },
    {
        id: "02dbe7da-6ba0-41bb-b8e0-58d14c5c6cc3",
        address: "Rua Tupi, 2200",
        city: "São Paulo",
        neighborhood: "Pacaembu",
        status: "processed",
        state: "SP"
    },
    {
        id: "02dbe7da-6ba0-41bb-b8e0-58d14c5c6343",
        address: "Rua Tupi, 2200",
        city: "Rio de Janeiro",
        neighborhood: "Copacabana",
        status: "processed",
        state: "RJ"
    },
    {
        id: "02dbe7da-6ba0-41bb-b8e0-58d14c5c6343",
        address: "Rua Tupi, 2200",
        city: "Belo Horizonte",
        neighborhood: "Pampulha",
        status: "processed",
        state: "MG"
    }
];

const coworkingAmenities = [
    'Internet de alta velocidade',
    'Salas de reunião',
    'Estacionamento',
    'Cozinha compartilhada',
    'Espaço de convivência',
    'Cabines de privacidade',
    'Recepção',
    'Suporte técnico',
    'Área externa',
    'Café e snacks gratuitos',
    'Armários individuais',
    'Acesso 24/7',
    'Ar-condicionado',
    'Impressora e scanner',
    'Segurança e monitoramento'
];

const sendWppMessage = ({ questions }: { questions: string[] }) => {
    const phone = '5514998611654';
    const clientName = 'João da Silva';
    const yourName = 'Isabela Rodrigues';
    const companyName = 'Woba';

    let message = `Oi ${clientName}, tudo bem?\n\n`;
    message += `Aqui é ${yourName} da ${companyName}. Gostaria de te fazer algumas perguntas rápidas sobre o seu espaço de coworking, pode ser?\n\n`;

    questions.forEach((question, index) => {
        message += `${index + 1}. ${question}\n`;
    });

    message += `\nMuito obrigado pela sua ajuda! Isso nos ajudará a entender melhor o que é essencial para nossos clientes.\n\nAbraços,\n${yourName}\n${companyName}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

export default function List() {
    const inputCapacityMinRef = useRef<HTMLInputElement>(null);
    const inputCapacityMaxRef = useRef<HTMLInputElement>(null);

    const inputSizeMinRef = useRef<HTMLInputElement>(null);
    const inputSizeMaxRef = useRef<HTMLInputElement>(null);

    const inputBudgetMinRef = useRef<HTMLInputElement>(null);
    const inputBudgetMaxRef = useRef<HTMLInputElement>(null);

    const [questions, setQuestions] = useState<string[]>([])
    const [questionInput, setQuestionInput] = useState<string>("")

    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
    const [selectedCapacity, setSelectedCapacity] = useState<{ min: number, max: number }>({ min: 0, max: 0 })
    const [selectedSize, setSelectedSize] = useState<{ min: number, max: number }>({ min: 0, max: 0 })
    const [selectedBudget, setSelectedBudget] = useState<{ min: number, max: number }>({ min: 0, max: 0 })


    const handleAmenityChange = (amenity: string) => {
        setSelectedAmenities((prevSelected) =>
            prevSelected.includes(amenity)
                ? prevSelected.filter((item) => item !== amenity)
                : [...prevSelected, amenity]
        );
    };

    return (
        <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
            <Header />
            <hr className="w-full h-px bg-gray-200 border-0 rounded-md" />
            <div className="p-5 flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-3xl">Diagnóstico #idv1239</p>
                        <div className="flex gap-6 text-xs">
                            <div className="flex gap-1">
                                <p className="text-gray-500">Criado em</p>
                                <p>02/10/2024 12:00</p>
                            </div>
                            <div className="flex gap-1">
                                <p className="text-gray-500">Criado por</p>
                                <p>Isabela Rodrigues</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Cobertura</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">87%</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Endereços</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">500</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <hr className="w-full h-px bg-gray-200 border-0 rounded-md" />
                <div className="flex gap-4">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Amenidades
                                <div className="h-8 w-px bg-gray-200 mx-2"></div>
                                <span className="bg-gray-200 rounded-full px-2 py-1">{selectedAmenities.length}</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-[800px]">
                            <div >
                                <h1 className="text-sm font-bold mb-4">Selecione as Amenidades</h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {coworkingAmenities.map((amenity) => (
                                        <div className=" flex items-center space-x-2" key={amenity}>
                                            <Checkbox
                                                id={amenity}
                                                onCheckedChange={() => {
                                                    handleAmenityChange(amenity)
                                                }}
                                                checked={selectedAmenities.includes(amenity)}
                                            />
                                            <Label htmlFor={amenity}>{amenity}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Capacidade
                                <div className="h-8 w-px bg-gray-200 mx-2"></div>
                                <span className="bg-gray-200 rounded-full px-2 py-1">{selectedCapacity.min} - {selectedCapacity.max}</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start">
                            <div>
                                <h3 className="text-sm font-bold mb-4">Capacidade</h3>
                                <div className="flex items-center gap-2">
                                    <Input type="number" ref={inputCapacityMinRef} placeholder="Mínimo" />
                                    <Input type="number" ref={inputCapacityMaxRef} placeholder="Máximo" />
                                    <Button onClick={() => {
                                        setSelectedCapacity({ min: Number(inputCapacityMinRef.current?.value) || 0, max: Number(inputCapacityMaxRef.current?.value) || 0 })
                                    }}>Aplicar</Button>
                                </div>
                            </div>

                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Tamanho m2
                                <div className="h-8 w-px bg-gray-200 mx-2"></div>
                                <span className="bg-gray-200 rounded-full px-2 py-1">{selectedSize.min} - {selectedSize.max}</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start">
                            <div>
                                <h3 className="text-sm font-bold mb-4">Tamanho m2</h3>
                                <div className="flex items-center gap-2">
                                    <Input type="number" ref={inputSizeMinRef} placeholder="Mínimo" />
                                    <Input type="number" ref={inputSizeMaxRef} placeholder="Máximo" />
                                    <Button onClick={() => {
                                        setSelectedSize({ min: Number(inputSizeMinRef.current?.value) || 0, max: Number(inputSizeMaxRef.current?.value) || 0 })
                                    }}>Aplicar</Button>
                                </div>
                            </div>

                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Orçamento
                                <div className="h-8 w-px bg-gray-200 mx-2"></div>
                                <span className="bg-gray-200 rounded-full px-2 py-1">R$ {selectedBudget.min} - R$ {selectedBudget.max}</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start">
                            <div>
                                <h3 className="text-sm font-bold mb-4">Orçamento</h3>
                                <div className="flex items-center gap-2">
                                    <Input type="number" ref={inputBudgetMinRef} placeholder="Mínimo" />
                                    <Input type="number" ref={inputBudgetMaxRef} placeholder="Máximo" />
                                    <Button onClick={() => {
                                        setSelectedBudget({ min: Number(inputBudgetMinRef.current?.value) || 0, max: Number(inputBudgetMaxRef.current?.value) || 0 })
                                    }}>Aplicar</Button>
                                </div>
                            </div>

                        </PopoverContent>
                    </Popover>
                </div>
                <hr className="w-full h-px bg-gray-200 border-0 rounded-md" />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Endereço</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead>Cidade</TableHead>
                            <TableHead>Bairro</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.address}</TableCell>
                                <TableCell>{item.state}</TableCell>
                                <TableCell>{item.city}</TableCell>
                                <TableCell>{item.neighborhood}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500"></div> Aguardando coworking
                                    </div>
                                </TableCell>
                                <TableCell className="flex items-center gap-2">
                                    <Link href={`/details`}>
                                        <Button variant="outline">Abrir</Button>
                                    </Link>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="default">Validar com coworking</Button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-3xl p-0 gap-0">
                                            <div>
                                                <DialogHeader className="p-5">
                                                    <DialogTitle>Modal de perguntas para validações</DialogTitle>
                                                    <DialogDescription>
                                                        É importante ter em mente que as perguntas serão disparadas para todos as salas apresentadas
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <hr className="w-full h-px bg-gray-200 border-0 rounded-md" />
                                            </div>
                                            <div className="p-5">
                                                <div>
                                                    <Label htmlFor="name" className="text-right">
                                                        Faça a sua pergunta para o coworking, seja o mais objetivo
                                                    </Label>
                                                    <div className="flex items-center gap-3">
                                                        <Input id="question" onChange={(e) => setQuestionInput(e.target.value)} value={questionInput} className="col-span-3" />
                                                        <Button disabled={!questionInput} onClick={() => {
                                                            setQuestions([...questions, questionInput])
                                                            setQuestionInput("")
                                                        }}>Salvar Pergunta</Button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="w-full h-px bg-gray-200 border-0 rounded-md" />
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="px-5">Pergunta</TableHead>
                                                        <TableHead>Ações</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    {questions.map((question, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell className="px-5">{question}</TableCell>
                                                            <TableCell>
                                                                <Button variant="outline" onClick={() => {
                                                                    setQuestions(questions.filter((_, i) => i !== index))
                                                                }}>Excluir</Button>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                            <hr className="w-full h-px bg-gray-200 border-0 rounded-md" />
                                            <DialogFooter className="p-6">
                                                <Button disabled={questions.length === 0} type="submit" onClick={() => {
                                                    sendWppMessage({ questions })
                                                }}>Disparar para coworking</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
