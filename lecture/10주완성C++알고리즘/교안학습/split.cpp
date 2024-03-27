#include <bits/stdc++.h>
using namespace std;

vector<string> split(string input, string delimeter) {
  vector<string> ret;
  long long pos = 0;
  string token = "";

  while((pos = input.find(delimeter)) != string::npos) {
    token = input.substr(0, pos);
    ret.push_back(token);
    input.erase(0, pos + delimeter.length());
  }
  ret.push_back(input);

  return ret;
}

vector<string> splitFast (string input, string delimeter) {
  vector<string> ret;
  auto start = 0;
  auto end = input.find(delimeter);

  while (end != string::npos) {
    ret.push_back(input.substr(start, end - start));
    start = end + delimeter.length();
    end = input.find(delimeter, start);
  }
  ret.push_back(input.substr(start));

  return ret;
}

vector<string> split3(string input, string delimeter)
{
  vector<string> ret;
  auto start = 0;
  auto end = input.find(delimeter);


  while (end != string::npos)
  {
    ret.push_back(input.substr(start, end - start));
    start = end + delimeter.length();
    end = input.find(delimeter);
  }
  ret.push_back(input.substr(start));

  return ret;
}

int main () {
  string s = "fsadkljf as;klfdj  askjflh;";
  vector<string> aaa = split3(s, " ");

  for (string bbb : aaa) {
    cout << bbb << '\n';
  }
  return 0;
}