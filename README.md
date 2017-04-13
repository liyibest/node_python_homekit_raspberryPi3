# node_python_homekit_raspberryPi3
### modified by 李江涛 （friderick_lee）
  >add lastest BCM2835 library  for  C/C++ ,if it surppport you machine.
```
   wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.35.tar.gz     
   tar xvzf bcm2835-1.xx.tar.gz     
   cd bcm2835-1.xx
   ./configure  
   make   
   sudo make check    
   sudo make install 

```
 >add node-dht-sensor module for node.js,it's rely on the BCM2835 library.
```
 npm install node-dht-sensor
```
 >add python surpport for javascript(node.js)
```
npm install  python-shell
```
