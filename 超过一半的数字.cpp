#include<iostream>
#include<vector>
#include <algorithm>
using namespace std;
int counter(vector<int>nums){
    int len=nums.size()/2;
    for(auto lt:nums){
        if(count(nums.begin(),nums.end(),lt)>len){
            return lt;
        }
    }
    return 0;
}
int main(){
    vector<int>nums;
}