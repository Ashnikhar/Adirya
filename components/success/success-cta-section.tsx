import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SuccessCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to give it a try?</h2>
            <p className="text-xl text-white/90">
              Start your POC today with CarePlix Check, our ready-to-use app for healthcare professionals.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Get Started
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Healthcare professional with laptop"
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
