import Image from "next/image"

export function PharmaceuticalsServicesSection() {
  const services = [
    {
      title: "Decentralized Clinical Trial",
      description:
        "Experience the power of a flexible, tailored solution for your clinical trials down unparalleled accuracy with continuous data collection and real-time reporting, allowing you to quickly design studies that align perfectly with your specific therapeutic area. Collect high-quality, protocol-specific data with ease and precision.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Patient Support Programs",
      description:
        "Digital therapy led patient support to track and monitor digital biomarkers, to monitor and to improve both patient engagement and outcomes.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Companion SaMD's",
      description:
        "Clinically validated, software as a medical device solutions used in combination with a drug therapy/device to improve real-world effectiveness.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="space-y-6">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={400}
                height={300}
                className="rounded-xl object-cover w-full h-48"
              />
              <h3 className="text-2xl font-bold text-[#008080]">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
