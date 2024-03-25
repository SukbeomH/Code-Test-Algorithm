// #include <bits/stdc++.h> // 헤더파일 선언
// using namespace std; // std namespace 사용

// string a; // 문자열 변수 a 선언

// int main(){
//   cin >> a; // 입력받은 문자열을 a에 저장
//   cout << a << "\n"; // 저장된 문자열을 출력

//   return 0; // main 함수 종료
// }

// #include <bits/stdc++.h>
// using namespace std;

// typedef int i; // int 타입을 별칭 i 로 선언

// i main(){
//   i a = 1;
//   cout << a << "\n";
//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// #define PI 3.141592
// #define loop(x, n) for (int x = 0; x < n; x++)

// int main(){
//   cout << PI << '\n';
//   int sum = 0;

//   loop(i, 10){
//     sum += i;
//   }

//   cout << sum << '\n';

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int a, c;
// string b;

// int main(){
//   cin >> a >> b >> c;
//   scanf("%d", &a);

//   cout << a << '\n';
//   cout << b << '\n';
//   cout << c << '\n';
//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int a;
// double b;
// char c;

// int main() {
//   scanf("%d %lf %c", &a, &b, &c);
//   printf("%d\n", a);
//   printf("%lf\n", b);
//   printf("%c\n", c);

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int a, b;
// double c;

// int main(){
//   scanf("%d.%d", &a, &b);
//   printf("\n%d %d\n", a, b);

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// string s;

// int main(){
//   getline(cin, s, '\n');
//   cout << s << '\n';

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int t;
// string s;

// int main(){
//   cin >> t;
//   string bufferflush;
//   getline(cin, bufferflush);

//   for (int i = 0; i < t; i++){
//     getline(cin, s);
//     cout << s << "\n";
//   }

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// typedef long long ll;
// double a = 1.234123342343345;

// int main(){
//   cout << a << "\n";
//   cout.precision(7);
//   cout << a << "\n";

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;
// typedef long long ll;
// double a = 1.23456789;
// int b = 12;
// int c = 2;
// int main()
// {
//   printf("%.6lf\n", a);
//   printf("%02d\n", b);
//   printf("%02d\n", c);
//   return 0;
// }

// void, char, string, bool, int, long long, double, unsigned long long


// #include <bits/stdc++.h>
// using namespace std;

// vector<string> split(string input, string delimeter) {
//   vector<string> ret;
//   long long pos = 0;
//   string token = "";

//   while ((pos = input.find(delimeter)) != string::npos) {
//     token = input.substr(0, pos);
//     ret.push_back(token);
//     input.erase(0, pos + delimeter.length());
//   }
//   ret.push_back(input);
  

//   return ret;
// }

// int main() {
//   string s = "안녕하세요  킹갓제너럴 천재입니다 정말이에요!", d = " ";
//   vector<string> a = split(s, d);
//   for(string b : a)
//     cout << b << "\n";

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// vector<string> split(const string& input, string delimeter) {
//   vector<string> result;
//   auto start = 0;
//   auto end = input.find(delimeter);

//   while (end != string::npos) {
//     result.push_back(input.substr(start, end - start));
//     start = end + delimeter.size();
//     end = input.find(delimeter, start);
//   }
//   result.push_back(input.substr(start));

//   return result;
// }

// int main() {
//   string s = "안녕하세요  킹갓제너럴 천재입니다 정말이에요!", d = " ";
//   vector<string> a = split(s, d);
//   for(string b : a)
//     cout << b << "\n";

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main() {
//   string s = "111";
//   string s2 = "abcdef";

//   cout << atoi(s.c_str()) << "\n";
//   cout << atoi(s2.c_str()) << "\n";

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main () {
//   string s = "12345";
//   int num = stoi(s);

//   cout << num + 1 << "\n";

//   return 0;
// }

// #include <bits/stdc++.h>
// using namespace std;

// int main() {
//   ios_base::sync_with_stdio(false);
//   cin.tie(NULL);
//   cout.tie(NULL);

//   int a = 1;
//   cout << bool(a) << "\n";

//   a = 0;
//   cout << bool(a) << "\n";
// }

#include <bits/stdc++.h>
using namespace std;

pair<int, int> pi;
tuple<int, int, int> tl;

int a, b, c;

int main() {
  pi = {1, 2};
  tl = make_tuple(1, 2, 3);

  tie(a, b) = pi;
  cout << a << " : " << b << "\n";
  tie(a, b, c) = tl;
  cout << a << " : " << b << " : " << c << "\n";
  
  return 0;
}