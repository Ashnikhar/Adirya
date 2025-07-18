export function EmployersMetricsSection() {
  const metrics = [
    {
      title: "Drive Unmatched Engagement",
      description: "Ignite passion and commitment with our dynamic challenges.",
      icon: "📈",
    },
    {
      title: "Cut Turnover, Boost Loyalty",
      description: "Empower your workforce with tools for better health, reducing turnover and boosting loyalty.",
      icon: "🎯",
    },
    {
      title: "Elevate Productivity",
      description: "Transform employee morale higher with personalized health and performance insights.",
      icon: "⚡",
    },
    {
      title: "Minimize Absenteeism",
      description: "Proactive health challenges promote the health and reduce absenteeism.",
      icon: "🏥",
    },
    {
      title: "Strengthen Your Company Wellbeing Score",
      description: "Keep your workforce in optimal health and boost your company's wellbeing metrics.",
      icon: "💪",
    },
    {
      title: "Ignite Team Spirit",
      description: "Foster a culture of positivity and collaboration through engaging team challenges.",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6">
              <div className="text-4xl mb-4">{metric.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-[#008080]">{metric.title}</h3>
              <p className="text-gray-300">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
