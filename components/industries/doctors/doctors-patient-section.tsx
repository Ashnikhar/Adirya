import Image from "next/image"

export function DoctorsPatientSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Patient engagement"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-[#008080]">
                Reach out to new patients through convenient in-app profile sharing and strengthen your brand
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              Expand your patient base effortlessly by sharing your profile within the app, enhancing a strong and
              recognizable brand in the healthcare landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
