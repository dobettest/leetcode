#include<iostream>
using namespace std;
int main(){
    int count=0,n;
    cin>>n;
    while(n){
        count+=n/5;//尾数为0的数，必含有质因数2、5
        n/=5;
    }
    cout<<count<<endl;
}