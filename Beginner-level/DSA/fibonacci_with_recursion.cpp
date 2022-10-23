//Code By Keshav Pai in C++

//Input: Enter the number of terms of series: 10
//Output: Fibonnaci Series:  0 1 1 2 3 5 8 13 21 34

#include <iostream>
using namespace std;
int fib(int x) {
   if((x==1)||(x==0)) {
      return(x);
   }else {
      return(fib(x-1)+fib(x-2));
   }
}
int main() {
   int x , i=0;
   cout << "Enter the number of terms of series: ";
   cin >> x;
   cout << "Fibonnaci Series: ";
   while(i < x) {
      cout << " " << fib(i);
      i++;
   }
   return 0;
}