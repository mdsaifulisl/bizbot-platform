import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, ShieldCheck, Eye, EyeOff, Lock } from "lucide-react"

type AuthMode = "LOGIN" | "FORGOT_PASSWORD" | "VERIFY_CODE" | "SET_NEW_PASSWORD"

export default function Login() {
  const navigate = useNavigate()
  
  const [mode, setMode] = useState<AuthMode>("LOGIN")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [forgotEmail, setForgotEmail] = useState("")
  const [code, setCode] = useState<string[]>(new Array(6).fill(""))
  const [newPasswordData, setNewPasswordData] = useState({ password: "", confirmPassword: "" })
  
  const [alertMessage, setAlertMessage] = useState("")
  const inputRefs = useRef<HTMLInputElement[]>([])

  useEffect(() => {
    if (mode === "VERIFY_CODE" && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [mode])

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log("Login Submitting:", loginData)
    setTimeout(() => {
      setIsLoading(false)
      navigate("/dashboard")
    }, 1000)
  }

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log("Forgot Password Request for:", forgotEmail)
    setTimeout(() => {
      setIsLoading(false)
      setMode("VERIFY_CODE")
    }, 1000)
  }

  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log("Verifying Code:", code.join(""))
    setTimeout(() => {
      setIsLoading(false)
      setMode("SET_NEW_PASSWORD")
    }, 1200)
  }

  const handleSetNewPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPasswordData.password !== newPasswordData.confirmPassword) {
      setAlertMessage("Passwords do not match")
      setTimeout(() => setAlertMessage(""), 3000)
      return
    }
    setIsLoading(true)
    console.log("Setting New Password:", newPasswordData.password)
    setTimeout(() => {
      setIsLoading(false)
      setMode("LOGIN")
      setNewPasswordData({ password: "", confirmPassword: "" })
      setCode(new Array(6).fill(""))
    }, 1500)
  }

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false
    const newCode = [...code]
    newCode[index] = element.value
    setCode(newCode)
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  return (
    <div className="space-y-6">
      
      {/* ================= 1. LOGIN MODE ================= */}
      {mode === "LOGIN" && (
        <>
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Welcome back</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Enter your credentials to access your dashboard</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                className="w-full px-3 py-2 bg-light-bg border border-light-border dark:bg-dark-bg dark:border-dark-border rounded-md text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="password">Password</label>
                <button
                  type="button"
                  onClick={() => setMode("FORGOT_PASSWORD")}
                  className="text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors bg-transparent border-none cursor-pointer font-medium"
                >
                  Forgot password?
                </button>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-3 py-2 bg-light-bg border border-light-border dark:bg-dark-bg dark:border-dark-border rounded-md text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-zinc-950 font-semibold rounded-md transition-colors cursor-pointer shadow-sm"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="relative flex items-center justify-center my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-light-border dark:border-dark-border"></div>
            </div>
            <span className="relative px-3 bg-light-card dark:bg-dark-card text-xs text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Or continue with</span>
          </div>

          <button
            onClick={() => console.log("Google Auth")}
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-light-bg border border-light-border dark:bg-dark-bg dark:border-dark-border hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-medium rounded-md transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" strokeWidth="0"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" strokeWidth="0"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" strokeWidth="0"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" strokeWidth="0"/>
            </svg>
            Google
          </button>
        </>
      )}

      {/* ================= 2. FORGOT PASSWORD MODE ================= */}
      {mode === "FORGOT_PASSWORD" && (
        <>
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Forgot password?</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Enter your email and we'll send you a verification code.</p>
          </div>

          <form onSubmit={handleForgotSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="forgotEmail">Email Address</label>
              <input
                id="forgotEmail"
                type="email"
                placeholder="name@example.com"
                required
                className="w-full px-3 py-2 bg-light-bg border border-light-border dark:bg-dark-bg dark:border-dark-border rounded-md text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-zinc-950 font-semibold rounded-md transition-colors cursor-pointer"
            >
              {isLoading ? "Sending..." : "Send Verification Code"}
            </button>
          </form>

          <button 
            onClick={() => setMode("LOGIN")}
            className="w-full flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors bg-transparent border-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Sign In
          </button>
        </>
      )}

      {/* ================= 3. VERIFY CODE MODE ================= */}
      {mode === "VERIFY_CODE" && (
        <>
          <div className="space-y-2 text-center">
            <div className="flex justify-center mb-1">
              <div className="p-2 bg-light-bg border border-light-border dark:bg-dark-bg dark:border-dark-border rounded-full text-emerald-500 dark:text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Verify Code</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Sent to <span className="text-zinc-800 dark:text-zinc-200 font-medium">{forgotEmail}</span></p>
          </div>

          <form onSubmit={handleVerifySubmit} className="space-y-5">
            <div className="flex justify-between gap-2">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => {
                    inputRefs.current[index] = el as HTMLInputElement
                  }}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  className="w-12 h-12 text-center text-xl font-bold bg-light-bg border border-light-border dark:bg-dark-bg dark:border-dark-border rounded-lg text-zinc-900 dark:text-zinc-50 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={isLoading || code.includes("")}
              className="w-full py-2 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-light-border dark:disabled:bg-zinc-800 disabled:text-zinc-400 dark:disabled:text-zinc-500 disabled:cursor-not-allowed text-zinc-950 font-semibold rounded-md transition-colors cursor-pointer"
            >
              {isLoading ? "Verifying..." : "Verify Code"}
            </button>
          </form>

          <button 
            onClick={() => setMode("FORGOT_PASSWORD")}
            className="w-full flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors bg-transparent border-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Change Email
          </button>
        </>
      )}

      {/* ================= 4. SET NEW PASSWORD MODE ================= */}
      {mode === "SET_NEW_PASSWORD" && (
        <>
          <div className="space-y-2 text-center">
            <div className="flex justify-center mb-1">
              <div className="p-2 bg-light-bg border border-light-border dark:bg-dark-bg dark:border-dark-border rounded-full text-emerald-500 dark:text-emerald-400">
                <Lock className="w-5 h-5" />
              </div>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Set New Password</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Must be different from previously used passwords.</p>
            {alertMessage && (
              <div className="mt-2 text-sm text-red-500 font-medium">
                {alertMessage}
              </div>
            )}
          </div>

          <form onSubmit={handleSetNewPasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="newPassword">New Password</label>
              <div className="relative">
                <input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="w-full pl-3 pr-10 py-2 bg-light-bg border border-light-border dark:bg-dark-bg dark:border-dark-border rounded-md text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  value={newPasswordData.password}
                  onChange={(e) => setNewPasswordData({ ...newPasswordData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 bg-transparent border-none cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300" htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-3 py-2 bg-light-bg border border-light-border dark:bg-dark-bg dark:border-dark-border rounded-md text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                value={newPasswordData.confirmPassword}
                onChange={(e) => setNewPasswordData({ ...newPasswordData, confirmPassword: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-700 text-zinc-950 font-semibold rounded-md transition-colors cursor-pointer"
            >
              {isLoading ? "Updating..." : "Reset Password"}
            </button>
          </form>
        </>
      )}

    </div>
  )
}