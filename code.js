function binarySearch(list, element, start=0, end=list.length -1) {
    var mid = Math.floor((start + end)/2);
    if (element < list[start] || element > list[end] || list.length == 0){
        return -1;
    }
    else if (element > list[mid]){
        return binarySearch(list, element, mid+1, end)
    }
    else if(element < list[mid]){
        return binarySearch(list, element, start, mid)
    }
    else{
        while(list[mid] == element){    //Checking to see if there are duplicate numbers of the target element
            mid--;                      //If so, keep going back until you hit something that =/= the target
                                        //The next item will be the first occurrence of the target
        }                               //Mid is now 1 smaller than it should be 
        return mid + 1;                 //Return the index for the first occurence of target
    }
}
