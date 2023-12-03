"use client"

import { useEffect } from "react"

export default function NotFound() {

  useEffect(() => {
    location.replace('/')
  })

  return null
}
