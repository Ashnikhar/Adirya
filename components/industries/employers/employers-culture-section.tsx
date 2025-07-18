import Image from "next/image"

export function EmployersCultureSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Team collaboration"
                width={200}
                height={200}
                className="rounded-xl object-cover"
              />
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Workplace culture"
                width={200}
                height={200}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-[#008080]">Foster a culture of belonging and collaboration with a smile</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Cultivate the community by celebrating differences and promoting inclusive practices that make everyone
              feel valued, increasing collaboration with team-based initiatives and meaningful daily interactions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
