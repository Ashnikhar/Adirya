import Image from "next/image"

export function AboutStorySection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-[#008080]">About</span> Us
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Adirya Health is at the forefront of healthcare innovation, combining cutting-edge artificial intelligence with
              deep medical expertise to create solutions that transform patient care. Our mission is to democratize
              healthcare by making advanced medical technologies accessible to healthcare providers and patients
              worldwide.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded by a team of healthcare professionals, AI researchers, and technology experts, we understand the
              challenges facing modern healthcare systems. Our solutions are designed to bridge the gap between
              traditional medical practice and the digital future of healthcare.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Through our innovative platform, we enable healthcare providers to deliver more accurate diagnoses, more
              personalized treatments, and more efficient care delivery, ultimately improving patient outcomes and
              reducing healthcare costs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Healthcare team meeting"
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Medical technology"
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Patient care"
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="AI healthcare"
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
