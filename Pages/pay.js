import Header from '../components/Header'
import { useEffect, useState } from 'react'

export default function Pay(){
  const [amount, setAmount] = useState(799) // demo amount

  useEffect(()=>{
    // load razorpay script
    const s = document.createElement('script')
    s.src = 'https://checkout.razorpay.com/v1/checkout.js'
    s.async = true
    document.body.appendChild(s)
  },[])

  const handlePay = async ()=>{
    try {
      // create order via serverless API (if present) else use client-side with key (test)
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ amount })
      })
      const order = await res.json()
      if (!order || order.error) throw new Error(order?.error || 'Order creation failed')

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: order.amount,
        currency: order.currency,
        name: 'SnailTrail',
        description: 'Order Payment',
        order_id: order.id,
        handler: function(response){
          alert('Payment successful: ' + response.razorpay_payment_id)
          // TODO: save order to Firestore
          window.location.href = '/'
        },
        theme: { color: '#C7A77A' }
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch(err) {
      console.error(err)
      alert('Payment error: ' + err.message)
    }
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <div className="max-w-md border p-6 rounded bg-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-sm text-gray-600">Advanced Repair Serum</div>
              <div className="font-medium">Niacinamide 10% + Snail Mucin 5%</div>
            </div>
            <div className="text-lg font-semibold">₹{amount}</div>
          </div>
          <div className="mt-4">
            <button onClick={handlePay} className="w-full px-4 py-3 bg-skinaccent text-white rounded">Pay ₹{amount}</button>
          </div>
          <div className="mt-3 text-sm text-gray-500">Razorpay test mode — set keys in Vercel env vars.</div>
        </div>
      </main>
    </div>
  )
}
