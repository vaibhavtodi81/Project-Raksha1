import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-white flex items-center justify-center">
      <div className="card p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold font-display mb-2">Login — <span className="gradient-text">Coming Soon</span></h1>
        <p className="text-dark-400 text-sm mb-6">Full login page will be built next.</p>
        <Link to="/" className="btn-outline text-sm">← Back to Home</Link>
      </div>
    </div>
  )
}

export default Login
