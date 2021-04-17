#include<iostream>
#include <vector>
#include<string>
using namespace std;
string order(string s, vector<int>& indices){
    string str=s;//否则下标赋值不能保存
    for(int i=0;i<s.length();i++){
        str[indices[i]]=s[i];
    }
    return str;
}
int main(){
    string str;
    vector<int>indices;
    int temp;
    cin>>str;
    for(int i=0;i<str.length();i++){
        cin>>temp;
        indices.push_back(temp);
    }
    cout<<order(str,indices)<<endl;
    
}