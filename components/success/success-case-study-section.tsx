import Image from "next/image"

export function SuccessCaseStudySection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Healthcare insurance company"
              width={600}
              height={500}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              A leading global health insurance company <span className="text-[#008080]">based out of India</span>
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#008080] mb-2">Challenge</h3>
                <p className="text-gray-300">
                  The company faced challenges in processing large volumes of health insurance claims efficiently while
                  maintaining accuracy and preventing fraud.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#008080] mb-2">Solution</h3>
                <p className="text-gray-300">
                  CarePlix implemented an AI-powered claims processing system that automated claim validation, fraud
                  detection, and risk assessment.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#008080] mb-2">Results</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• 75% reduction in claim processing time</li>
                  <li>• 90% improvement in fraud detection accuracy</li>
                  <li>• 40% increase in customer satisfaction</li>
                  <li>• $2M annual cost savings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
