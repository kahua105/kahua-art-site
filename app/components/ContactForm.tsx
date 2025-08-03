"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Formspreeエンドポイントに送信
      const response = await fetch("https://formspree.io/f/xdkogkpv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          _replyto: values.email,
          _subject: `New Contact from ${values.name} - KAHUA Website`,
        }),
      })

      if (response.ok) {
        alert("✅ メッセージが送信されました！お返事をお待ちください。")
        form.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      alert("❌ 送信に失敗しました。もう一度お試しください。")
      console.error("Contact form error:", error)
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#111111" }}>
            Contact
          </h2>
          <p className="text-lg opacity-80" style={{ color: "#111111" }}>
            Get in touch with us to explore new possibilities
          </p>
          <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}>
            <p className="text-sm font-semibold">📧 直接メール: kahua105@gmail.com | 📞 お気軽にお問い合わせください</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 rounded-2xl shadow-lg"
          style={{ backgroundColor: "white" }}
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#111111" }}>お名前 / Name</FormLabel>
                    <FormControl>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input placeholder="山田太郎 / Taro Yamada" {...field} />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#111111" }}>メールアドレス / Email</FormLabel>
                    <FormControl>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input placeholder="your@email.com" {...field} />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel style={{ color: "#111111" }}>メッセージ / Message</FormLabel>
                    <FormControl>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Textarea
                          placeholder="ご相談内容やご質問をお聞かせください... / Tell us about your project or questions..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full text-lg py-3"
                  disabled={isSubmitting}
                  style={{ backgroundColor: "#2d3748", color: "#f4f4f4" }}
                >
                  {isSubmitting ? "送信中... / Sending..." : "メッセージを送信 / Send Message"}
                </Button>
              </motion.div>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-sm opacity-70" style={{ color: "#111111" }}>
              🔒 このフォームは安全に暗号化されています / This form is securely encrypted
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
