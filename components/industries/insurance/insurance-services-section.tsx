export function InsuranceServicesSection() {
  const services = [
    {
      title: "Underwriting",
      items: [
        "Benefit from comprehensive fitness in reducing risk",
        "Reduce operational costs by collecting health insights automatically",
        "Improve member engagement with data-driven underwriting",
        "Leverage assessments with data from wearables",
        "Utilize a powerful and simple challenge",
      ],
    },
    {
      title: "Dynamic Underwriting",
      items: [
        "Benefit from ongoing member engagement by rewarding healthy behaviors",
        "Utilize objective, real-time health and wellness data from wearables",
        "Reduce the risk of adverse and upgrade",
        "Improve member engagement in a gamified experience",
        "Leverage comprehensive data",
      ],
    },
    {
      title: "Risk Management",
      items: [
        "Automate member outreach through intelligent risk scoring",
        "Quickly flag risky claims using predictive health insights",
        "Leverage case detection from real-time health data",
        "Follow through with personalized interventions",
        "Create custom scores to measure the need for health services",
      ],
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-[#008080]">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
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
    </section>
  )
}
