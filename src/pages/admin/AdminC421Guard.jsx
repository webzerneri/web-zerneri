import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

import AdminLogin from './AdminLogin'
import AdminC421 from './AdminC421'

const ADMIN_USER_ID = 'c3ef2f8c-1b5f-43f0-a524-207b82b3695e'

function AdminC421Guard() {
  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    let mounted = true

    async function checkSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!mounted) return

      setAuthorized(
        session?.user?.id === ADMIN_USER_ID
      )

      setLoading(false)
    }

    checkSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!mounted) return

        setAuthorized(
          session?.user?.id === ADMIN_USER_ID
        )
      }
    )

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  async function handleLogout() {
    await supabase.auth.signOut()
    setAuthorized(false)
  }

  if (loading) {
    return (
      <main className="admin-c421">
        <p className="admin-c421-loading">
          Cargando...
        </p>
      </main>
    )
  }

  if (!authorized) {
    return (
      <AdminLogin
        onLogin={(session) => {
          setAuthorized(
            session?.user?.id === ADMIN_USER_ID
          )
        }}
      />
    )
  }

  return (
    <AdminC421 onLogout={handleLogout} />
  )
}

export default AdminC421Guard