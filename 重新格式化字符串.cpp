#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;
string reformat(string s)
{
    vector<char> nums;
    vector<char> words;
    int a = 0, b = 0,c,d;
    string res = "";
    for (auto lt : s)
    {
        if (lt - 'a' >= 0)
        {
            nums.push_back(lt);
        }
        else
        {
            words.push_back(lt);
        }
    }
    c=nums.size();
    d=words.size();
    if (c - d > 1 || c - d < -1)
    {
        return res;
    }
    for (int i = 0; i < s.length(); i++)
    {
        if (nums.size() > words.size())
        {
            if (1 & i)
            {
                res += words[a++];
            }
            else
            {
                res += nums[b++];
            }
        }
        else
        {
            if (1 & i)
            {
                res += nums[a++];
            }
            else
            {
                res += words[b++];
            }
        }
    }
    return res;
}
int main()
{
    string str;
    cin >> str;
    cout << reformat(str) << endl;
}
