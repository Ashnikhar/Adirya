import Image from "next/image"

export function InsuranceCarePlixSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">
              <span className="text-[#008080]">
                Leverage the Power of TWO with ONE - CarePlix ONE - More Powerful than Ever.
              </span>
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                Better, and faster fitness to the highest value integrated programs or more.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                More member utilization and give the insights you need to thrive.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                Reporting member engagement getting them to engage in preventive care.
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                Our data-driven, comprehensive health platform transforms the wellness motivation they need.
              </li>
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="CarePlix ONE platform"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
