import { ShopLayout } from 'components/layouts/ShopLayout'

const AddressPage = () => {
  return (
    <ShopLayout description="Confirmar dirección de destino" title="Dirección">
      <h1>Dirección</h1>
      <section>
        <div>
          <input name="name" placeholder="..." />
        </div>
      </section>
    </ShopLayout>
  )
}

export default AddressPage
