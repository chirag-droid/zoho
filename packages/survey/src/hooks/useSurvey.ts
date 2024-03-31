import { create } from 'zustand'
import { combine, persist } from 'zustand/middleware'

const store = combine(({
    isOpen: false,
}), (set) => ({
    toggleSurvey: () => set((state) => ({ isOpen: !state.isOpen })),
    openSurvey: () => set({ isOpen: true }),
    closeSurvey: () => set({ isOpen: false })
}))

const useSurvey = create(persist(store, {
    name: "survey-popup",
    version: 1,
}))

export default useSurvey
