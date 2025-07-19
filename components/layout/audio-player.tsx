"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = volume
      audio.muted = isMuted

      const setAudioData = () => {
        setDuration(audio.duration)
        setCurrentTime(audio.currentTime)
      }

      const setAudioTime = () => setCurrentTime(audio.currentTime)
      const togglePlay = () => setIsPlaying(!audio.paused)

      audio.addEventListener("loadeddata", setAudioData)
      audio.addEventListener("timeupdate", setAudioTime)
      audio.addEventListener("play", togglePlay)
      audio.addEventListener("pause", togglePlay)

      return () => {
        audio.removeEventListener("loadeddata", setAudioData)
        audio.removeEventListener("timeupdate", setAudioTime)
        audio.removeEventListener("play", togglePlay)
        audio.removeEventListener("pause", togglePlay)
      }
    }
  }, [volume, isMuted])

  const handlePlayPause = () => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] / 100
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const handleTimeChange = (value: number[]) => {
    const newTime = (value[0] / 100) * duration
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
    setCurrentTime(newTime)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 p-2 bg-black bg-opacity-70 rounded-full shadow-lg pr-4">
      <audio ref={audioRef} src="/audio/tanuki-theme.mp3" loop />
      <Button variant="ghost" size="icon" onClick={handlePlayPause} className="text-white hover:text-blue-500">
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
      </Button>
      <div className="flex items-center gap-2 w-40">
        <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
        <Slider
          value={[duration > 0 ? (currentTime / duration) * 100 : 0]}
          max={100}
          step={1}
          onValueChange={handleTimeChange}
          className="w-full [&>span:first-child]:bg-blue-500 [&>span:first-child]:h-1 [&>span:first-child]:rounded-full [&>span:first-child>span]:bg-white [&>span:first-child>span]:h-3 [&>span:first-child>span]:w-3 [&>span:first-child>span]:-mt-1"
        />
        <span className="text-xs text-gray-400">{formatTime(duration)}</span>
      </div>
      <Button variant="ghost" size="icon" onClick={toggleMute} className="text-white hover:text-blue-500">
        {isMuted || volume === 0 ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
      </Button>
      <Slider
        value={[volume * 100]}
        max={100}
        step={1}
        onValueChange={handleVolumeChange}
        className="w-20 [&>span:first-child]:bg-blue-500 [&>span:first-child]:h-1 [&>span:first-child]:rounded-full [&>span:first-child>span]:bg-white [&>span:first-child>span]:h-3 [&>span:first-child>span]:w-3 [&>span:first-child>span]:-mt-1"
      />
    </div>
  )
}
