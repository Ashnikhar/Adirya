import Image from "next/image"

export function PharmaceuticalsImageSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Pharmaceutical innovation"
            width={1200}
            height={500}
            className="rounded-2xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  )
}
