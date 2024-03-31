import Image from "next/image";

export default function Section() {
    return (
        <div className="">
            <section className="container-section">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    <div className="text-center lg:text-left"> 
                        <h1 className="text-3xl  font-black text-gray-800 mb-2 xl:text-5xl" >
                            A melhor  <span className="text-emerald-600">ferramenta </span>para <span className="text-emerald-600">ongs </span> brasileiras!
                        </h1>
                        <p className="text-gray-600 font-medium my-6 text-md">
                            Fácil de mexer, preço baixo, mais controle, sem fidelidade e pagamento mensal.
                        </p>
                        <a href="app.aceleraong.com.br" target="_blank" className="mt-4 bg-emerald-600 text-xl xl:text-2xl text-white font-bold py-2 px-4 rounded-md hover:bg-emerald-700">
                            Teste 30 Dias Grátis!
                        </a>
                    </div>
                    <div> 
                        <Image
                            className="mt-8 xl:mt-4"
                            src="/img/dashboard.svg"
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
  