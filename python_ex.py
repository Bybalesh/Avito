import math

# Константы
EARTH_RADIUS = 6371  # km
OMSK_LATITUDE = 54.95  # degrees

# Функция для перевода градусов в радианы
def degrees_to_radians(degrees):
  return degrees * math.pi / 180

# Функция для вычисления расстояния от экватора
def distance_from_equator(latitude):
  latitude_radians = degrees_to_radians(latitude)
  return EARTH_RADIUS * latitude_radians

# Вычисление и вывод результата
distance = distance_from_equator(OMSK_LATITUDE)
print(f"Расстояние от экватора до Омска: {round(distance)} км")
