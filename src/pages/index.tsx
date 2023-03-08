import Image from "next/image";
import gojo from "../../public/gojo-sensei.png"

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-arroz">
      <Image src={gojo} alt='imagem do Gojo Sensei de jujutsu kaisen' width={300} height={300} />
      <h2 className="text-3xl text-rocha text-center font-bold">Site em desenvolvimento</h2>
    </div>
  )
}
