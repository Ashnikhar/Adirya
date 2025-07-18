import Image from "next/image"

export function InsuranceWellnessSection() {
  const programs = [
    {
      title: "Wellness Programs",
      items: [
        "Enhance engagement through your wellness programs",
        "Reach new wellness programs at their level",
        "Implement member-centric programs and reward healthy behaviors",
        "Encourage users to reach their wellness and prevent illness",
      ],
    },
    {
      title: "Claims Processing",
      items: [
        "Make your claims processing more intelligent",
        "Automate claims and reduce manual review",
        "Reduce fraudulent claims before they're processed",
        "Reduce claims processing costs with real-time health data and AI insights",
      ],
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Wellness programs"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="grid gap-8">
            {programs.map((program, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-2xl font-bold text-[#008080]">{program.title}</h3>
                <ul className="space-y-2">
                  {program.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
