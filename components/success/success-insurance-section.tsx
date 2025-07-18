export function SuccessInsuranceSection() {
  const benefits = [
    "Streamlined claim processing with AI automation",
    "Enhanced fraud detection capabilities",
    "Improved customer experience through faster processing",
    "Reduced operational costs and increased efficiency",
    "Better risk assessment and underwriting decisions",
    "Real-time analytics and reporting capabilities",
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            India's leading private-sector general insurance company
          </h2>
          <p className="text-xl text-gray-600">Our Client Challenge: 1,00,000+ Employees, 500+ Branches</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black">Key Benefits Achieved</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Impact Metrics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Processing Time Reduction</span>
                <span className="text-2xl font-bold text-[#008080]">75%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Fraud Detection Accuracy</span>
                <span className="text-2xl font-bold text-[#008080]">90%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Customer Satisfaction</span>
                <span className="text-2xl font-bold text-[#008080]">+40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Annual Cost Savings</span>
                <span className="text-2xl font-bold text-[#008080]">$2M+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
