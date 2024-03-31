import Image from "next/image";
import { FaCashRegister } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { AiFillSignal } from "react-icons/ai";
import { BsClipboardDataFill } from "react-icons/bs";
import { SlGraph } from "react-icons/sl";
import { MdCalendarMonth } from "react-icons/md";

const cards = [
    { title: 'Módulo Fiscal e Contábil', icon: <BsClipboardDataFill />, text: 'Gerenciamento de documentos fiscais, automatização da contabilidade e geração de relatórios financeiros, assistente para declaração de impostos da ONG.'},
    { title: 'Gestão de Doações', icon: <BiSolidDonateHeart />, text: 'Sistema de acompanhamento de doações recebidas, integração com gateways de pagamento para processamento de doações online.'},
    { title: 'Controle de Caixa', icon: <FaCashRegister />, text: 'Registro e acompanhamento das movimentações financeiras, relatórios detalhados sobre a saúde financeira da ONG.'},
    { title: 'Gerenciamento de Eventos', icon: <SlGraph />, text: 'Ferramenta para criação e gestão de eventos, incluindo inscrições, emissão de ingressos e controle de participantes, integração com calendários e notificações automáticas.'},
    { title: 'Sistema de Rifa e Bingo', icon: <AiFillSignal />, text: 'Plataforma para criação e administração de rifas e bingos internos, geração automática de cartelas de bingo e acompanhamento de sorteios.'},
    { title: 'Programa de Fidelidade', icon: <MdCalendarMonth />, text: 'Sistema de recompensas para incentivar doações recorrentes, oferecendo brindes, descontos ou benefícios exclusivos.'}
];

export default function SectionTwo() {
    return (
        <div className="bg-gray-100">
            <section className="container-section">
                <h2 className="text-2xl xl:text-3xl font-bold mb-2 text-center text-gray-800">Temos diversas funcionalidades, <span className="text-emerald-600">dentre elas: </span></h2>
                <div className="grid gap-4 mt-8 grid-cols-1 lg:grid-cols-3">
                    {cards.map(item => (
                        <div className="bg-white p-4 rounded-md" key={item.title}>
                            <h4 className="flex font-bold text-xl mb-4 text-emerald-600"><span className="mr-4 text-4xl">{item.icon}</span> {item.title}</h4>
                            <p className="text-gray-600">{item.text}</p> 
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
  }
  