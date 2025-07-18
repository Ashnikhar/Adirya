export function AboutAdvisorySection() {
  const advisors = [
    { name: "Dr. Robert Kim", role: "Medical Advisory Board" },
    { name: "Prof. Maria Santos", role: "AI Ethics Advisor" },
    { name: "Dr. David Lee", role: "Clinical Research Advisor" },
    { name: "Sarah Johnson", role: "Healthcare Policy Advisor" },
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Clinical Advisory Board</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {advisors.map((advisor, index) => (
            <div key={index} className="bg-black p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#008080] to-[#00AAAA] rounded-full mb-4 mx-auto"></div>
              <h3 className="text-lg font-bold mb-2">{advisor.name}</h3>
              <p className="text-gray-400">{advisor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
