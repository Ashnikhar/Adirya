import Image from "next/image"

export function EmployersAttentionSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Personal attention"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-[#008080]">Give employees the personal attention they need</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Provide personalized care and support to your employees, ensuring their well-being and fostering a
              positive work environment that drives productivity and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
