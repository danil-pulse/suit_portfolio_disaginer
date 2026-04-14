import { NextRequest, NextResponse } from "next/server"

export type SendMethod = "telegram" | "email"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  service?: string
  message: string
  sendMethod: SendMethod
  date?: string
  time?: string
}

// Отправка в Telegram
async function sendToTelegram(data: ContactFormData): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    console.error("Telegram credentials not configured")
    return false
  }

  const text = `
📬 Новая заявка с сайта

👤 Имя: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
${data.phone ? `📱 Телефон: ${data.phone}` : ""}
${data.service ? `🎯 Услуга: ${data.service}` : ""}
${data.date ? `📅 Дата: ${data.date}` : ""}
${data.time ? `🕐 Время: ${data.time}` : ""}

💬 Сообщение:
${data.message}
  `.trim()

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    )

    return response.ok
  } catch (error) {
    console.error("Telegram send error:", error)
    return false
  }
}

// Отправка на email (через SMTP или внешний сервис)
async function sendToEmail(data: ContactFormData): Promise<boolean> {
  const emailTo = process.env.CONTACT_EMAIL
  const resendApiKey = process.env.RESEND_API_KEY

  if (!emailTo) {
    console.error("Email recipient not configured")
    return false
  }

  // Если настроен Resend API
  if (resendApiKey) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: emailTo,
          subject: `Новая заявка от ${data.firstName} ${data.lastName}`,
          html: `
            <h2>Новая заявка с сайта</h2>
            <p><strong>Имя:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            ${data.phone ? `<p><strong>Телефон:</strong> ${data.phone}</p>` : ""}
            ${data.service ? `<p><strong>Услуга:</strong> ${data.service}</p>` : ""}
            ${data.date ? `<p><strong>Дата:</strong> ${data.date}</p>` : ""}
            ${data.time ? `<p><strong>Время:</strong> ${data.time}</p>` : ""}
            <h3>Сообщение:</h3>
            <p>${data.message}</p>
          `,
        }),
      })

      return response.ok
    } catch (error) {
      console.error("Resend email error:", error)
      return false
    }
  }

  // Fallback: логируем данные (для демонстрации без настроенного email сервиса)
  console.log("Email would be sent to:", emailTo, "Data:", data)
  return true
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Валидация обязательных полей
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    let success = false

    if (data.sendMethod === "telegram") {
      success = await sendToTelegram(data)
    } else {
      success = await sendToEmail(data)
    }

    if (success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { success: false, error: "Failed to send message" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}
