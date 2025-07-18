import Image from "next/image"

export function SuccessFinanceSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              A leading player in online insurance aggregator and{" "}
              <span className="text-[#008080]">financial technology space</span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#008080] mb-2">Challenge</h3>
                <p className="text-gray-300">
                  Managing complex insurance product comparisons and providing personalized recommendations to customers
                  across multiple insurance categories.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#008080] mb-2">Solution</h3>
                <p className="text-gray-300">
                  Implemented AI-driven recommendation engine and automated underwriting system to streamline the
                  insurance selection and application process.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#008080] mb-2">Results</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• 60% increase in conversion rates</li>
                  <li>• 80% reduction in application processing time</li>
                  <li>• 95% customer satisfaction score</li>
                  <li>• 3x growth in policy sales</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Financial technology platform"
              width={600}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
