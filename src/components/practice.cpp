#include<iostream>
using namespace std;
class dada{
    protected :
    void display1(){
        cout<<"mai in sbka baap hun"<<endl;
    }
}
class baap :protected dada{
    protected:
    void display2(){
        cout<<"mai bete ka baap hun"<<endl;
    }
}
class beta : protected baap{
    protected:
    void display3(){
        cout<<"mai in sbka beta hun"<<endl;
    }
}
int main(){
    beta narendra_modi;
    narendra_modi.display1;
    narendra_modi.display2;
    narendra_modi.display3;
    return 0;
}