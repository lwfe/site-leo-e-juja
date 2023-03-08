import Image from "next/image";
import Waves from '../../../public/waves.svg'
import LeoeJuju from '../../../public/leoejuju.svg'
import Sakura from '../../../public/sakura.svg'

export default function Home() {
  return (
    <div >
      <div className="flex w-screen h-screen justify-center items-center bg-gradient-to-b from-amora-trans to-amorinha">
        <div className="flex flex-col-reverse items-center bg-arroz mx-4 rounded-md bg-[url('/japan.svg')] bg-cover bg-no-repeat bg-bottom bg-fixed" >
          <Image className="hidden" src={Sakura} alt='Foto da arvore sakura' />
          <Image className="w-2/3" src={LeoeJuju} alt='Foto de Leo e Juju' />
          <div className="flex flex-col items-center text-center m-4 gap-2 bg-arroz rounded p-4">
            <div>
              <h2 id="leoandjuju" className="text-6xl">Leo and Juju</h2>
              <p className="mt-4">私の人生の愛、私たちの運命は母性で追跡されました</p>
            </div>
            <a id="aishitemasu" className="w-1/2 bg-amora-trans text-arroz rounded p-2 " href="/testes/inicioMobileFirst
            ">[愛してます]</a>
          </div>
        </div>
      </div>

      <div >
        <Image src={Waves} alt='background de onda' />
      </div>

    </div>

  )
}
