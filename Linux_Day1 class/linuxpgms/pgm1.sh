#!/bin/bash
# for i in 1 2 3 4 5
# do echo "Number  : $i"
# done

list=("pen" "pencil" "box")
echo "All items : ${list[@]}"
for item in "${list[@]}"
do 
echo "$item"
done