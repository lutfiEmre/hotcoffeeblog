import Image from 'next/image'
import NavBar from "@/components/NavBar";
import Makebettercoffee from "@/components/makebettercoffee";
import Longestablished from "@/components/longestablished";

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-between ">
        <Makebettercoffee/>
    </main>
  )
}
