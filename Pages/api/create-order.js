import fetch from 'node-fetch'

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).end()
  const { amount = 0 } = req.body
  const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY
  const key_secret = process.env.RAZORPAY_KEY_SECRET
  if (!key_id || !key_secret) return res.status(500).json({ error: 'Razorpay keys not configured.' })

  const auth = Buffer.from(`${key_id}:${key_secret}`).toString('base64')
  try {
    const r = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: { 'Content-Type':'application/json', 'Authorization': `Basic ${auth}` },
      body: JSON.stringify({ amount: Math.round(amount * 100), currency: 'INR', payment_capture: 1 })
    })
    const data = await r.json()
    return res.status(200).json(data)
  } catch(err){
    console.error(err)
    return res.status(500).json({ error: 'order creation failed' })
  }
}
