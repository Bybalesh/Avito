package main

import (
 "fmt"
 "math"
)

// Константы
const earthRadius float64 = 6371.0 // km
const omskLatitude float64 = 54.95  // degrees

// Функция для перевода градусов в радианы
func degreesToRadians(degrees float64) float64 {
 return degrees * math.Pi / 180.0
}

// Функция для вычисления расстояния от экватора
func distanceFromEquator(latitude float64) float64 {
 latitudeRadians := degreesToRadians(latitude)
 return earthRadius * latitudeRadians
}

func main() {
 distance := distanceFromEquator(omskLatitude)
 fmt.Printf("Расстояние от экватора до Омска: %.0f км\n", math.Round(distance))
}
