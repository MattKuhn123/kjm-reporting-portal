import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('attendanceSheet', () => {
  const date = ref(new Date())
  function setDate(val: Date) {
    date.value = val
  }

  const participants = ref("MEN")
  function setParticipants(val: "MEN" | "WOMEN") {
    participants.value = val
  }

  const meetingType = ref("CHURCH")
  function setMeetingType(val: "CHURCH" | "LIFESKILLS 101") {
    meetingType.value = val
  }

  const county = ref("Kenton")
  function setCounty(val: "Kenton" | "Campbell" | "Boone" | "Grant") {
    county.value = val
  }

  const chaplains = ref([] as string[])
  function setChaplains(val: string[]) {
    chaplains.value = val
  }

  function addChaplain(val: string) {
    chaplains.value.push(val)
  }

  function removeChaplain(val: string) {
    chaplains.value = chaplains.value.filter(x => x !== val)
  }

  const headCount = ref(0)
  function setHeadCount(val: number) {
    headCount.value = val
  }

  return {
    date,
    setDate,
    participants,
    setParticipants,
    meetingType,
    setMeetingType,
    county,
    setCounty,
    chaplains,
    setChaplains,
    addChaplain,
    removeChaplain,
    headCount,
    setHeadCount,
  }
})
