import Link from 'next/link'

import { AuthLayout } from 'components/layouts/AuthLayout'

const LoginPage = () => {
  return (
    <AuthLayout description="Pagina de inicio de sesión de Tesla Shop" title="Login | Tesla Shop">
      <section className="w-full max-w-sm p-4 ">
        <h1>Iniciar Sesión</h1>
        <form>
          <input name="name" placeholder="..." type="text" />
          <input name="password" placeholder="..." type="password" />
          <button>Ingresar</button>
          <Link href="/auth/register">¿No tienes cuenta?</Link>
        </form>
      </section>
    </AuthLayout>
  )
}

export default LoginPage
