import Image from "next/image"

export function DoctorsEarningsSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">
              <span className="text-[#008080]">Earn more through increased follow-ups & new patients</span>
            </h2>
            <p className="text-gray-700 text-lg">
              Optimize your income and streamline patient engagements and is readily visible on our patients,
              facilitated by our user-friendly platform.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Healthcare earnings"
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
