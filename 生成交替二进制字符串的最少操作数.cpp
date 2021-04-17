#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int count(string str)
{
    int a = 0, b = 0;
    char c;
    for (int i = 0; i < str.length(); i++)
    {
        c = (i & 1) ? '0' : '1';
        a += (str[i] != c);
        c = (i & 1) ? '1' : '0';
        b += (str[i] != c);
    }
    return min(a, b);
}
int main()
{
    string str;
    cin >> str;
    cout << count(str) << endl;
}