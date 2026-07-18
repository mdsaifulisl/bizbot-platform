import { createSlice } from "@reduxjs/toolkit"

// export যোগ করা হয়েছে যাতে store.ts ফাইলটি এই টাইপগুলো অ্যাক্সেস করতে পারে
export type Theme = "light" | "dark"

export interface ThemeState {
  mode: Theme
}

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme) return savedTheme
    return "dark" 
  }
  return "dark" 
}

const initialState: ThemeState = {
  mode: getInitialTheme(),
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
      localStorage.setItem("theme", state.mode)
      
      const root = window.document.documentElement
      if (state.mode === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    },
    initTheme: (state) => {
      const root = window.document.documentElement
      if (state.mode === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }
  },
})

export const { toggleTheme, initTheme } = themeSlice.actions
export default themeSlice.reducer