#include <iostream>
using namespace std;

int main() {
    int i = -1;
    cout << "0.Cancel....1.Shutdown" << endl << "$ ";
    while (i != 1 && i != 0) {
        cin >> i;
    }
    if (i == 0) {
        cout << "Bye!" << endl;
    } else {
        cout << "Shutdown!" << endl;
        system("shudown /s /t 10");
    }
    return 0;
}