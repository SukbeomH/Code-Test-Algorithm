class Solution {
public: 
    int lengthOfLastWord(string s) {
        int cnt = 0, flag = 0, size = s.size();
        
        for (int i = size - 1; i >= 0; i--) {
            if (s[i] != ' ' && flag == 0) {
                flag = 1;
            }
            if (s[i] != ' ' && flag == 1) {
                cnt++;
            }
            if (s[i] == ' ' && flag == 1) {
                break;
            }
        }
        return cnt;
    }
};