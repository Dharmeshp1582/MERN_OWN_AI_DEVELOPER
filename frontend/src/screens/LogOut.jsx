import React from 'react'
import axios from '../config/axios'

const LogOut = () => {
  const [loading, setLoading] = React.useState(false)

  const handleLogout = async () => {
    setLoading(true)
    try {
      await axios.get('/users/logout')
      localStorage.removeItem('token')
      window.location.href = '/'
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button className='bg-indigo-400' onClick={handleLogout} disabled={loading}>
      {loading ? 'Logging out...' : 'Logout'}
    </button>
  )
}

export default LogOut