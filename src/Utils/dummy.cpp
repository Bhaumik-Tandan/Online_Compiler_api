#include<bits/stdc++.h>
using namespace std;
int getSumWithBase(int n , int b )
{
        int sum =0;
        while(n!=0){
                sum+=(n%b);
                n/=b;
        }
        return sum;
}
int main(){
        cout<<getSumWithBase(216,100);
}
