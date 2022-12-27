import Link from 'next/link'

import { AuthLayout } from 'components/layouts/AuthLayout'

const SignupPage = () => {
  return (
    <AuthLayout description="Pagina de registro de Tesla Shop" title="Signup | Tesla Shop">
      <section className="w-full max-w-sm p-4 ">
        <h1>Crea una cuenta</h1>
        <form>
          <input name="name" placeholder="..." type="text" />
          <input name="password" placeholder="..." type="password" />
          <button>Registrarme</button>
          <Link href="/auth/login">¿Ya tienes cuenta?</Link>
        </form>
      </section>
    </AuthLayout>
  )
}

export default SignupPage
