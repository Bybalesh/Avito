

System.out.println("Hello, World");
 }
}
public class OmskDistance {

    // Константы
    private static final double EARTH_RADIUS = 6371.0; // km
    private static final double OMSK_LATITUDE = 54.95; // degrees

    // Функция для перевода градусов в радианы
    public static double degreesToRadians(double degrees) {
        return degrees * Math.PI / 180.0;
    }


    public static double distanceFromEquator(double latitude) {
        double latitudeRadians = degreesToRadians(latitude);
        return EARTH_RADIUS * latitudeRadians;
    }

    public static void main(String[] args) {
        double distance = distanceFromEquator(OMSK_LATITUDE);
        System.out.printf("Расстояние от экватора до Омска: %.0f км%n", distance);
    }
}
