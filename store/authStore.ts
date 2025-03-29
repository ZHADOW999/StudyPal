import { create } from "zustand"

// Define user roles
export type UserRole = "Growing" | "Elite"
export type GenderType = "Male" | "Female"

interface AuthState {
  matricNumber: string
  fullName: string
  course: string
  gender: GenderType | null
  privacyPolicy: boolean
  role: UserRole | null
  currentStep: number
  isAuthenticated: boolean
  userId: string
  isLoading: boolean

  // Actions

  setMatricNumber: (matricNumber: string) => void
  setFullName: (fullName: string) => void
  setCourse: (course: string) => void
  setGender: (gender: GenderType) => void
  setPrivacyPolicy: (accepted: boolean) => void
  setRole: (role: UserRole) => void
  nextStep: () => void
  prevStep: () => void
  setStep: (step: number) => void
  setAuthenticated: (isAuthenticated: boolean) => void
  setUserId: (userId: string) => void
  setIsLoading: (isLoading: boolean) => void
  resetForm: () => void

  // Computed
  getTotalSteps: () => number
}

export const useAuthStore = create<AuthState>((set, get) => ({

  matricNumber: "",
  fullName: "",
  course: "",
  gender: null,
  privacyPolicy: false,
  role: null,
  currentStep: 0,
  isAuthenticated: false,
  isLoading: false,
  userId: "",

  // Actions
  setMatricNumber: (matricNumber) => set({ matricNumber }),
  setFullName: (fullName) => set({ fullName }),
  setCourse: (course) => set({ course }),
  setGender: (gender: GenderType) => set({ gender }),
  setPrivacyPolicy: (accepted) => set({ privacyPolicy: accepted }),
  setRole: (role) => set({ role }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) })),
  setStep: (step) => set({ currentStep: step }),
  setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setUserId: (userId) => set({ userId }),
  setIsLoading: (isLoading) => set({ isLoading }),
  resetForm: () =>
    set({
      matricNumber: "",
      fullName: "",
      course: "",
      gender: null,
      privacyPolicy: false,
      role: null,
      currentStep: 0,
      userId: "",
    }),

  // Computed
  getTotalSteps: () => 6, // Email/Password, Matric, Name, Course, Gender, Terms, Role
}))

