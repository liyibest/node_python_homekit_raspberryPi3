import Adafruit_DHT
sensor = Adafruit_DHT.DHT11

# Example using a Beaglebone Black with DHT sensor
# connected to pin P8_11.
pin = 18

# Example using a Raspberry Pi with DHT sensor
# connected to GPIO23.
#pin = 23

# Try to grab a sensor reading.  Use the read_retry method which will retry up
# to 15 times to get a sensor reading (waiting 2 seconds between each retry).
humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

# Note that sometimes you won't get a reading and
# the results will be null (because Linux can't
# guarantee the timing of calls to read the sensor).
# If this happens try again!
#if humidity is not None and temperature is not None:
#    print('Temp={0:0.1f}*C  Humidity={1:0.1f}%'.format(temperature, humidity))
#else:
#    print('Failed to get reading. Try again!')

def temp():
        return  temperature

def hum(value):
        return value*humidity


temp=temp()
print temp
