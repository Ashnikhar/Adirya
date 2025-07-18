import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ContactInfoSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Business meeting"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-4">
              <p className="text-white text-sm mb-4">
                We are available for meetings from Monday to Saturday, between 9 am and 9 pm IST. Our commitment is to
                provide responses to all inquiries within 24 hours on weekdays. We look forward to connecting with you.
              </p>
              <Button className="bg-gradient-to-r from-[#008080] to-[#00AAAA] text-white">Schedule Meeting →</Button>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#008080]">Address</h2>
              <p className="text-gray-300 mb-4">
                Call or email us at any time, we strive to respond to all inquiries within 24 hours on business days. We
                will be happy to answer any questions you may have.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">🇮🇳 INDIA</h3>
                <p className="text-gray-400">
                  Webel IT Park, Phase 2, 4th Floor, DH Block/Newtown, Action Area I, Newtown, West Bengal 700156, India
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">🇺🇸 USA</h3>
                <p className="text-gray-400">2954 West Washington Street, Suite 850 Chicago, Illinois 60612, USA</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">🇦🇪 UAE</h3>
                <p className="text-gray-400">
                  Dubai, UAE Dubai International Financial Centre Level 14, The Gate, Dubai 74777, UAE
                </p>
              </div>

              <div className="pt-4">
                <p className="text-gray-400 mb-2">📞 +91-4896533</p>
                <p className="text-gray-400">✉️ connect@AdiryaHealth.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduling Interface */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="bg-gray-900 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#008080] to-[#00AAAA] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Adirya Health</h3>
                <p className="text-gray-400">
                  Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.
                </p>
              </div>
            </div>
            <div className="border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-semibold">30 Minute Meeting</h4>
                  <p className="text-gray-400 text-sm">
                    Please provide us with information regarding the purpose of this meeting. This will assist us in
                    preparing for the meeting and understanding the agenda.
                  </p>
                </div>
                <Button variant="ghost" className="text-[#008080]">
                  →
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-4">
            <div className="bg-white rounded-lg p-4 h-full">
              <div className="text-center mb-4">
                <h4 className="text-black font-semibold">Adirya Health Pvt Ltd</h4>
                <p className="text-gray-600 text-sm">
                  B-601, Signature-1, Nr New Rajdhani Market, Opp. Torrent Power, Makarba, West Ahmedabad 380051
                </p>
                <Button className="mt-2 text-[#008080]" variant="ghost">
                  View larger map
                </Button>
              </div>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Map View</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
