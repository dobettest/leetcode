#include <iostream>
#include <string>
using namespace std;
int replacer(string str){
    int index=0,count=0;
    while((index=str.find("ab"))!=-1){
        str=str.replace(index,2,"bba");
        count++;
    }
    return count % 1000000007;
}
int main(){
    string str;
    cin>>str;
    cout<<replacer(str)<<endl;
}