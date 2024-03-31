import Image from "next/image";

export default function SectionFor() {
    return (
        <div className="bg-gray-100">
            <section className="container-section">
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <div className="text-center lg:text-left"> 
                        <h2 className="text-3xl font-black text-gray-800 mb-2" >
                            Na Acelera Ong você pode mais
                        </h2>
                        <p className="text-gray-600 font-light my-6 text-md">
                            Com nossa plataforma você tem total controle da sua ong. Amplie seus horizontes com uma gestao transparente e eficaz, a qualquer hora!
                        </p>
                        <a href="app.aceleraong.com.br" target="_blank" className="bg-emerald-600 text-xl xl:text-2xl text-white font-bold py-2 px-4 rounded-md hover:bg-emerald-700">
                            Teste 30 Dias Grátis!
                        </a>
                    </div>
                    <div> 
                        <Image
                            className="mt-5 xl:mt-0"
                            src="/img/logic-dashboard.svg"
                            width={800}
                            height={100}
                            alt="Homem analisando gráficos."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
  }
  