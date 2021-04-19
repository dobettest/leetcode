#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool containsNearbyDuplicate(vector<int> &nums, int k)
{
    unordered_set<int> existed;
    int n = nums.size();
    int curr = 0;
    for (int i = 0; i < n; ++i)
    {
        curr = nums[i];
        if (existed.find(curr) == existed.end())
        {
            existed.insert(curr);
            if (existed.size() > k)
            {
                existed.erase(nums[i - k]);
            }
        }
        else
        {
            return true;
        }
    }

    return false;
}
int main(){
    vector<int>nums{1,2,3,1};
    int k=3;
    cout<<boolalpha<<containsNearbyDuplicate(nums,k)<<endl;
    
}