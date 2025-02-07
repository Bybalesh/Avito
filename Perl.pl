sub print_hello_world {
    my ($times) = @_;
    for (my $i = 0; $i < $times; $i++) {
        print "Hello World\n";
    }  
}  

print_hello_world(5);
#!/usr/bin/perl
use strict;
use warnings;
use Math::Trig;

# Константы
my $earth_radius = 6371;  # km
my $omsk_latitude = 54.95; # degrees

# Перевод градусов в радианы
sub degrees_to_radians {
    my ($degrees) = @_;
    return deg2rad($degrees); # Используем функцию deg2rad из Math::Trig
}

# Вычисление расстояния от экватора
sub distance_from_equator {
    my ($latitude) = @_;
    my $latitude_radians = degrees_to_radians($latitude);
    return $earth_radius * $latitude_radians;
}

# Вычисление и вывод результата
my $distance = distance_from_equator($omsk_latitude);
printf "Расстояние от экватора до Омска: %.0f км\n", $distance;
