import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa";

export default function SectionThree() {
    return (
      <div className="bg-gray-50">
        <section className="container-section text-gray-600">
            <div className="grid gap-4 my-8 grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col">
                <h5 className="font-light">Acelera Ong</h5>
                <a className="font-medium hover:text-gray-800" href="#">Sobre nós</a>
                <a className="font-medium hover:text-gray-800" href="#">Blog</a>
                <a className="font-medium hover:text-gray-800" href="#">Planos e preço</a>
                <a className="font-medium hover:text-gray-800" href="#">Depoimentos</a>
              </div>
              <div className="flex flex-col">
                <h5 className="font-light">Serviços</h5>
                <a className="font-medium hover:text-gray-800" href="#">Ajuda & Suporte</a>
                <a className="font-medium hover:text-gray-800" href="#">Release Notes</a> 
                <a className="font-medium hover:text-gray-800" href="#">Denúncias</a>
              </div>
              <div className="flex flex-col">
                <h5 className="font-light">Transparência</h5>
                <a className="font-medium hover:text-gray-800" href="#">Termos de Uso</a>
                <a className="font-medium hover:text-gray-800" href="#">Política de Privacidade</a>
                <a className="font-medium hover:text-gray-800" href="#">Política de Cookies</a>
              </div>
              <div className="text-3xl font-bold">
                <Image
                  src="/img/logo.svg"
                  width={180}
                  height={100}
                  alt="Picture of the author"
                />
                <div className="flex mt-3">
                  <a className="mr-2 hover:text-gray-800" href="https://instagram.com/aceleraong">
                    <FaInstagram />
                  </a>
                  <a className="mr-2 hover:text-gray-800" href="https://whatsapp.com">
                    <FaWhatsapp /> 
                  </a>
                  <a className="mr-2 hover:text-gray-800" href="https://x.com/aceleraong">
                    <FaTwitter />
                  </a>
                  <a className="mr-2 hover:text-gray-800" href="https://facebook.com/aceleraong">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
        </section>
        <div className="bg-emerald-600">
          <section className="py-6 px-2 text-center">
            <p className='text-sm font-light text-white'>© 2024 Acelera Ong Ltda- Todos os direitos reservados.</p>
          </section>
        </div>
      </div>
    );
  }
  