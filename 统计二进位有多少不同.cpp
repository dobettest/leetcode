#include <iostream>
using namespace std;
class Solution
{
public:
    int countBitDiff(int m, int n)
    {
        int count = 0;
        int res = m ^ n;
        while (res)
        {
            count += 1 & (res % 2);
            res /= 2;
        }
        return count;
    }
};

int main()
{
    Solution s;
    int m, n;
    cin >> m >> n;
    cout << s.countBitDiff(m, n) << endl;
}