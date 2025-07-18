import Image from "next/image"

export function AboutTeamSection() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Michael Chen",
      role: "CTO & Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Chief Medical Officer",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-full object-cover w-48 h-48 mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-[#008080]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
