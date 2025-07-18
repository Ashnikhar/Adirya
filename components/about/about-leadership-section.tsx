import Image from "next/image"

export function AboutLeadershipSection() {
  const leaders = [
    {
      name: "Dr. James Wilson",
      role: "Chief Strategy Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former healthcare executive with 20+ years of experience in digital health transformation.",
    },
    {
      name: "Dr. Lisa Park",
      role: "VP of Research",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading AI researcher specializing in medical applications and clinical validation.",
    },
    {
      name: "Mark Thompson",
      role: "VP of Engineering",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Technology leader with expertise in scalable healthcare platforms and AI infrastructure.",
    },
    {
      name: "Dr. Anna Martinez",
      role: "Chief Compliance Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Healthcare compliance expert ensuring regulatory adherence and patient safety standards.",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#008080]">Meet the team</span> that manages our business growth
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-32 h-32 mx-auto"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{leader.name}</h3>
              <p className="text-[#008080] mb-3">{leader.role}</p>
              <p className="text-gray-400 text-sm">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
