function getNumberFromUser(message){
    let userValue;
    let flag=false;
     
    do{
        if(flag){
            alert('You have to enter number');
        }
        userValue=+prompt(message);
        flag=true;
    } while(isNaN(userValue)){
    return userValue;}
    }
    
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min) +min) ;
}
 
// TASK 1
// Find the minimum element of this array
const itemsCount=getNumberFromUser('Please the count of  numbers');
const array=[];

for(let index=0 ;index< itemsCount ;index++){
    array[index]=getRandomNumber(0,101);
    console.log(array[index]);
}
let min=array[0];
for(let i=1; i<array.length; i++){
    if(array[i] <min){
        min=array[i];
        }
    }
    console.log(`Our minimum value is : ${min}`);

// TASK 2
// Find the maximum element of this array
// const itemsCount2=getNumberFromUser('Please the count of  numbers');
// const array2=[];

// for(let index=0 ;index< itemsCount2 ;index++){
//     array2[index]=getRandomNumber(0,405);
//     console.log(array2[index]);
// }
// let max=array2[0];
// for(let index=0; index<array2.length; index++){
//     if(array2[index]>max){
//         max=array2[index];
//         }
// }
// console.log(`Our maximum value is : ${max}`);

// TASK 3
//  Find the index of the minimum element of this array
// const itemsCount3=getNumberFromUser('Please the count of  numbers');
// const array3=[];

// for(let index=0 ;index< itemsCount3 ;index++){
//     array3[index]=getRandomNumber(0,405);
//     console.log(array3[index]);
// }
// let min=array3[0];
// let min_index;
// for(let index=1; index<array3.length; index++){
// if(array3[index]<min){
//     min=array3[index];
//     min_index=index;
//         }
// }
// console.log(`Our minimum index is : ${min_index}`);


// TASK 4
// Find the index of the maximum element of this array
// const itemsCount4=getNumberFromUser('Please the count of  numbers');
// const array4=[];

// for(let index=0 ;index< itemsCount4 ;index++){
//     array4[index]=getRandomNumber(0,600);
//     console.log(array4[index]);
// }
// let max=array4[0];
// let max_index;
// for(let index=1; index<array4.length; index++){
// if(array4[index]>max){
//     max=array4[index];
//     max_index=index;
//         }
// }
// console.log(`Our maximum index is : ${max_index}`);

// TASK 5
// Calculate the sum of array's elements with odd indices
// const itemsCount5=getNumberFromUser('Please the count of  numbers');
// const array5=[];

// for(let index=0 ;index< itemsCount5 ;index++){
//     array5[index]=getRandomNumber(0,600);
//     console.log(array5[index]);
// }

// let sum=0;
// for(let index=1; index<array5.length; index+=2){
// sum=sum+ array5[index] ;
//         }

// console.log(`Our odd sum is : ${sum}`);

// TASK 6
// Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array
// const itemsCount6=getNumberFromUser('Please the count of  numbers');
// const array6=[];

// for(let index=0 ;index< itemsCount6 ;index++){
//     array6[index]=getRandomNumber(0,600);
//     console.log(array6[index]);
// }
// reverseArray(array6,itemsCount6);        
// function reverseArray(array12){
//     let length=array12.length;
//     for(let i=0; i<Math.floor(length/2); i++){
//     [array12[i],array12[length-i-1]]=[array12[length-i-1],array12[i]];
// }
// console.log(array12);
// }

// TASK 7
// Count the number of odd elements in the array
// const itemsCount7=getNumberFromUser('Please the count of  numbers');
// const array7=[];

// for(let index=0 ;index< itemsCount7 ;index++){
//     array7[index]=getRandomNumber(0,1000);
//     console.log(array7[index]);
// }
// let count=0;
// for(let index=1; index<array7.length; index++){
//     if(array7[index]%2==1){
//         count=count+1;
//     }
// }
// console.log(`Our count of odd numbers is : ${count}`);

// TASK8
// Swap the first and second half of the array, for example, for an array of 1234, the result is 3412, or for 12345 the result will be 45312.
// const itemsCount8=getNumberFromUser('Please the count of  numbers');
// const array8=[];

// for(let index=0 ;index< itemsCount8 ;index++){
//     array8[index]=getRandomNumber(0,1000);    
//     console.log(array8[index]);                           
// }
// swapFirstSecondHalf(array8);
// function swapFirstSecondHalf(array13)              
// {
//    let length=array13.length;             
//    let l=Math.floor(length/2);
//    if(length%2==0){
//    for(let i=0; i<l;i++){
//     [array13[i],array13[l+i]]=[array13[l+i],array13[i]];
//    }
// }
// else{
//     for(let i=0; i<l;i++){
//         [array13[i],array13[l+i+1]]=[array13[l+i+1],array13[i]];
//        }
// }
//    console.log(array13);
// }



// TASK 9
// Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
// const itemsCount9=getNumberFromUser('Please the count of  numbers');
// const array9=[];

// for(let index=0 ;index< itemsCount9 ;index++){
//     array9[index]=getRandomNumber(0,820);
//     console.log(array9[index]);
// }
// bubbleSort(array9,itemsCount9);
// function bubbleSort( array14, n)
// {
// var i, j;
// for (i = 0; i < n-1; i++)
// {
//     for (j = 0; j < n-i-1; j++)
//     {
//         if (array14[j] > array14[j+1])
//         {
//             let tmp = array14[j];
//             array14[j] = array14[j + 1];
//             array14[j + 1] = tmp;
//          }
//     }
//  }  
//  console.log(`Our increasing sequence is : ${array14}`);
// }

// TASK 10
// Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.
// const itemsCount10=getNumberFromUser('Please the count of  numbers');
// const array10=[];

// for(let index=0 ;index< itemsCount10 ;index++){
//     array10[index]=getRandomNumber(0,1020);               
//     console.log(array10[index]);
// }
// selectionSort(array10,itemsCount10);

//  function selectionSort(array15,n)
// {
// let i,j;
// let max_index;
// for(i=0; i<n-1; i++ )
// {
//     max_index=i;
//     for( j=i+1; j<n ;j++)
//     {
//          if(array15[j]>array15[max_index])
//             max_index=j ;       
//             }
//         [array15[max_index],array15[i]]=[array15[i],array15[max_index]];
// }
// console.log(`Our descending sequence is :${array15}`);
// }
 


