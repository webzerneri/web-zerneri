import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import './AdminLogin.css'

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    setLoading(true)
    setError('')

    const { data, error: supabaseError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      })

    if (supabaseError) {
      setError('Email o contraseña incorrectos.')
      setLoading(false)
      return
    }

    if (data.session) {
      onLogin(data.session)
    }

    setLoading(false)
  }

  return (
    <main className="admin-login">
      <div className="admin-login-box">
        <p className="admin-login-eyebrow">
          ADMINISTRACIÓN
        </p>

        <h1>C421</h1>

        <p className="admin-login-description">
          Acceso privado a la administración de la residencia.
        </p>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <label>
            Email

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </label>

          <label>
            Contraseña

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />
          </label>

          {error && (
            <p className="admin-login-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? 'INGRESANDO...' : 'INGRESAR'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default AdminLogin