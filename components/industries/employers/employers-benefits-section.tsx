import Image from "next/image"

export function EmployersBenefitsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">
              <span className="text-[#008080]">Improve benefit utilization and outcomes across the organization</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Enhance your investment return by optimizing benefit utilization and achieving better health outcomes
              across your entire organization.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Team meeting"
              width={200}
              height={200}
              className="rounded-xl object-cover"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Healthcare benefits"
              width={200}
              height={200}
              className="rounded-xl object-cover"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Employee wellness"
              width={200}
              height={200}
              className="rounded-xl object-cover"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Health outcomes"
              width={200}
              height={200}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
