import { CartList } from 'components/cart/CartList'
import { ShopLayout } from 'components/layouts/ShopLayout'

function CartPage() {
  return (
    <ShopLayout
      description="Carrito con tus posibles compras en nuestra pagina web"
      title="Carrito | Teslo Shop"
    >
      <h1>Carrito de compras</h1>
      <section>
        <div className="space-y-2">
          <CartList />
        </div>
        <div>
          <div>
            <h2>Orden</h2>
            <button>Checkout</button>
          </div>
        </div>
      </section>
    </ShopLayout>
  )
}
export default CartPage
