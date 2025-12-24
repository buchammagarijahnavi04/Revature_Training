#!/bin/bash 
#simple linux Functions
name='Alice'
hello(){
    echo "Hello $name"
}
add(){
    sum=$($1+$2)
    echo "sum of $1 and $2=$sum"
}

hello
add $1 $2
