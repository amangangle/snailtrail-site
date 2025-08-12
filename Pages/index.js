import Header from '../components/Header'
import Link from 'next/link'

export default function Home(){
  const price = 799
  const handleAddToCart = () => {
    // store simple cart in localStorage as demo
    const cart = [{ id: 'serum-001', title: 'Advanced Repair Serum', price, qty: 1 }]
    localStorage.setItem('snail_cart', JSON.stringify(cart))
    alert('Added to cart. Go to Pay to complete purchase.')
    // redirect to pay
    window.location.href = '/pay'
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm uppercase tracking-wider text-skinmuted">Advanced Repair</div>
            <h1 className="text-3xl md:text-4xl font-semibold mt-3">Niacinamide 10% + Snail Mucin 5%</h1>
            <p className="mt-4 text-gray-700">A premium serum formulated to target oiliness, brighten and repair skin barrier. Zinc PCA supports blemish-prone skin.</p>
            <div className="mt-6 flex gap-4">
              <button onClick={handleAddToCart} className="px-5 py-3 rounded bg-skinaccent text-white font-medium">Add to Cart</button>
              <Link href="/pay"><a className="px-5 py-3 rounded border border-skinmuted text-skingray">Buy Now</a></Link>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <strong>Price: </strong>₹{price} • <span className="text-green-700">In stock</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-72 hero-card p-6 rounded-lg shadow-sm">
              <img src="/serum-placeholder.png" alt="Serum" className="w-full h-auto" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
