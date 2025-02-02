import { defineStore } from 'pinia'

export const useAttendanceStore = defineStore('attendance', () => {
  state: () => {
    return {
      date: "",
      participants: "MEN",
      meetingType: "CHURCH",
      county: "Kenton",
      chaplains: [],
      headcount: 0
    }
  }
})
