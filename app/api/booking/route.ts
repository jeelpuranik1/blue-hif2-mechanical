import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type BookingPayload = {
  name: string
  phone: string
  email?: string
  address: string
  service: string
  propertyType: string
  preferredDate?: string
  message?: string
}

function formatPropertyType(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function formatDate(value?: string) {
  if (!value) return 'Not specified'
  return new Date(`${value}T12:00:00`).toLocaleDateString('en-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 })
  }

  let body: BookingPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, phone, email, address, service, propertyType, preferredDate, message } = body

  if (!name?.trim() || !phone?.trim() || !address?.trim() || !service?.trim()) {
    return NextResponse.json({ error: 'Name, phone, address, and service are required.' }, { status: 400 })
  }

  const toEmail = process.env.BOOKING_NOTIFICATION_EMAIL ?? 'ibsa@bluehif2mechanical.com'
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? 'Blue HIF₂ Mechanical <onboarding@resend.dev>'

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: email?.trim() || undefined,
    subject: `New Service Request: ${service}`,
    html: `
      <h2>New Service Appointment Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email?.trim() || 'Not provided'}</p>
      <p><strong>Service Address:</strong> ${address}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Property Type:</strong> ${formatPropertyType(propertyType)}</p>
      <p><strong>Preferred Date:</strong> ${formatDate(preferredDate)}</p>
      <p><strong>Message:</strong></p>
      <p>${message?.trim() ? message.replace(/\n/g, '<br>') : 'No message provided'}</p>
    `,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send your request. Please call us instead.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
