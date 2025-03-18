import { create } from "zustand"

// Define user roles
export type UserRole = "learner" | "creator"

interface AuthState {
  email: string
  password: string
  matricNumber: string
  fullName: string
  course: string
  gender: string
  termsAccepted: boolean
  role: UserRole | null
  currentStep: number
  isAuthenticated: boolean
  userId: string

  // Actions
  setEmail: (email: string) => void
  setPassword: (password: string) => void
  setMatricNumber: (matricNumber: string) => void
  setFullName: (fullName: string) => void
  setCourse: (course: string) => void
  setGender: (gender: string) => void
  setTermsAccepted: (accepted: boolean) => void
  setRole: (role: UserRole) => void
  nextStep: () => void
  prevStep: () => void
  setStep: (step: number) => void
  setAuthenticated: (isAuthenticated: boolean) => void
  setUserId: (userId: string) => void
  resetForm: () => void

  // Computed
  getTotalSteps: () => number
}

export const useAuthStore = create<AuthState>((set, get) => ({
  email: "",
  password: "",
  matricNumber: "",
  fullName: "",
  course: "",
  gender: "",
  termsAccepted: false,
  role: null,
  currentStep: 0,
  isAuthenticated: false,
  userId: "",

  // Actions
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setMatricNumber: (matricNumber) => set({ matricNumber }),
  setFullName: (fullName) => set({ fullName }),
  setCourse: (course) => set({ course }),
  setGender: (gender) => set({ gender }),
  setTermsAccepted: (accepted) => set({ termsAccepted: accepted }),
  setRole: (role) => set({ role }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) })),
  setStep: (step) => set({ currentStep: step }),
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUserId: (userId) => set({ userId }),
  resetForm: () =>
    set({
      email: "",
      password: "",
      matricNumber: "",
      fullName: "",
      course: "",
      gender: "",
      termsAccepted: false,
      role: null,
      currentStep: 0,
      userId: "",
    }),

  // Computed
  getTotalSteps: () => 7, // Email/Password, Matric, Name, Course, Gender, Terms, Role
}))

