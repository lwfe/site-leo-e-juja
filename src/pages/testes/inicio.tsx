import Image from "next/image";
import Waves from '../../../public/waves.svg'
import LeoeJuju from '../../../public/leoejuju.svg'
import Sakura from '../../../public/sakura.svg'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen h-screen items-center justify-center bg-gradient-to-b from-amora-trans to-amorinha">
        <div id='japanImage' className="flex relative w-3/4 h-5/6 bg-arroz bg-contain rounded-md " >
          <Image className="absolute top-0 right-0 opacity-60" src={Sakura} alt='Foto da arvore sakura' />
          <Image className="min-w-half w-1/2 self-end" src={LeoeJuju} alt='Foto de Leo e Juju' />
          <div className="flex flex-col w-full h-full items-center justify-center p-12">
            <h2 id="leoandjuju" className="text-9xl">Leo and Juju</h2>
            <p>私の人生の愛、私たちの運命は母性で追跡されました</p>

            <a id="aishitemasu" className="absolute bg-amora-cis p-4 rounded-md text-arroz bottom-32" href="/testes/inicio">[愛してます]</a>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-arroz">
        <Image className="w-full " src={Waves} alt='background de onda' />
      </div>

    </div>

  )
}
