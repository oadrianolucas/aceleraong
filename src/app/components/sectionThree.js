import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const cards = [
    { 
        title: 'Bronze', 
        subtitle: "Ideal para ongs que estao iniciando.", 
        price:"77",
            options: [
                "Controle de caixa",
                "Controle de caixa",
                "Controle de caixa",
                "Controle de caixa",
            ]
    },
    { 
        title: 'Prata', 
        subtitle: "Ideal para ongs que estao iniciando.", 
        price:"117",
            options: [
                "Controle de caixa",
                "Controle de caixa",
                "Controle de caixa",
                "Controle de caixa",
            ]
    },
    { 
        title: 'Ouro', 
        subtitle: "Ideal para ongs que estao iniciando.", 
        price:"237",
            options: [
                "Controle de caixa",
                "Controle de caixa",
                "Controle de caixa",
                "Controle de caixa",
            ]
    }
 ];

export default function SectionThree() {
    return (
        <div className="bg-emerald-600">
            <section className="container-section">
                <h2 className="text-3xl font-bold mb-2 text-center text-white">O melhor custo benefício do mercado</h2>
                <div className="grid gap-4 my-8 grid-cols-1 lg:grid-cols-3">
                    {cards.map(card => (
                        <div className="bg-white p-4 rounded-xl text-center" key={card.title}>
                            <h3 className="font-bold text-4xl mb-2 text-emerald-600 text-left">{card.title}</h3>
                            <h4 className="font-light text-gray-800 text-sm my-2 text-left">{card.subtitle}</h4>
                            <h5 className="font-medium text-xl my-8 text-gray-800">R$ <span className="text-6xl font-black">{card.price}</span> /mês</h5>
                            <ul>
                                <li className="text-center">
                                    até 100 cadastros
                                </li>
                            </ul>
                            <hr className="my-4" />
                            <ul>
                            {card.options.map((item, index) => (
                                <li className="flex align-middle text-gray-800 text-left" key={index}>
                                <FaCircleCheck className="m-1 text-emerald-600" /> {item}
                                </li>
                            ))}
                            </ul>
                            <span className="text-red-300 font-light">Preços meramente illustrativos e não definidos.</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
  }
  