import Image from "next/image"

export function AboutIndustrySection() {
  const industries = [
    { title: "Healthcare Management", image: "/placeholder.svg?height=300&width=400" },
    { title: "Clinical Research", image: "/placeholder.svg?height=300&width=400" },
    { title: "Telemedicine", image: "/placeholder.svg?height=300&width=400" },
    { title: "Medical Diagnostics", image: "/placeholder.svg?height=300&width=400" },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Industry we serve</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {industries.map((industry, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
