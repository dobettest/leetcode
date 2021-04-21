#include <iostream>
#include <string>
using namespace std;
int balancedStringSplit(string s)
{
    int num = 0;
    int n = 0;
    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] == 'R')
            n++;
        if (s[i] == 'L')
            n--;
        if (n == 0)
            num++;
    }
    return num;
}
int main()
{
    string str;
    cin >> str;
    cout << balancedStringSplit(str) << endl;
}