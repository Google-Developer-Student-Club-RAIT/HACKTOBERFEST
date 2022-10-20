#Program to find the density of an solid whole object using its mass and volume

from __future__ import division
import math
"""D=Density
M=Mass
V=Volume
"""

D= 27 # lbs/ft^3
V= 23.7 #in^3

answer = (D*(V/(12**3)))*(453.6) #grams
print("Mass is", answer, "g")


# lb= 453.6g
# g = 0.00220462262 lb
