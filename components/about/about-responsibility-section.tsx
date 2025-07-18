export function AboutResponsibilitySection() {
  const responsibilities = [
    {
      title: "Ethical AI Development",
      description: "Ensuring our AI systems are developed with ethical considerations and bias mitigation.",
    },
    {
      title: "Data Privacy & Security",
      description: "Maintaining the highest standards of patient data protection and privacy compliance.",
    },
    {
      title: "Clinical Validation",
      description: "Rigorous testing and validation of all medical AI solutions before deployment.",
    },
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            more about CarePlix's responsible approach to healthcare AI
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {responsibilities.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-[#008080] to-[#00AAAA] rounded-full mb-6 mx-auto"></div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
