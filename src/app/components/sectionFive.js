import Image from "next/image";

export default function SectionFive() {
    return (
        <div className="bg-white mt-6">
            <section className="container-section">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <div className="text-center lg:text-left"> 
                        <h2 className="text-3xl font-black text-gray-800 mb-2" >
                            Procura de Editais com Inteligência Artificial
                        </h2>
                        <p className="text-gray-600 font-light my-6 text-md">
                            Maximize as oportunidades de financiamento para a sua ONG com a nossa plataforma de inteligência artificial. Encontre os melhores editais que se alinham perfeitamente com as suas atividades e objetivos, de forma rápida e eficiente.                        </p>
                        <a href="app.aceleraong.com.br" target="_blank" className="bg-emerald-600 text-xl xl:text-2xl text-white font-bold py-2 px-4 rounded-md hover:bg-emerald-700">
                            Teste 30 Dias Grátis!
                        </a>
                    </div>
                    <div> 
                        <Image
                            className="mt-5 xl:mt-0"
                            src="/img/contract.svg"
                            width={800}
                            height={100}
                            alt="Homem analisando gráficos."
                        />
                    </div>
                </div>
            </section>
            <section className="container-section">
                <div className="rounded-2xl bg-emerald-600 p-12 text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                        Ficou com alguma dúvida?
                    </h2>
                    <h3 className="text-sm lg:text-md font-light text-white mb-6">
                        Entre em contato com nosso suporte pelo WhatsApp
                    </h3>
                    <a href="app.aceleraong.com.br" target="_blank" className="bg-white mt-4 text-xl p-2 text-emerald-600 font-bold rounded-md hover:bg-emerald-700">
                        Entrar em contato
                    </a>
                </div>
            </section>
        </div>
    );
  }
  